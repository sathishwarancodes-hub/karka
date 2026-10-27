import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AppHeader } from "@/components/AppHeader";
import { inputCls, btnGhost, btnPrimary } from "@/components/AuthShell";
import { useIsAdmin } from "@/lib/use-is-admin";
import { ENQUIRY_STATUSES, type EnquiryStatus } from "@/lib/enquiry-schema";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin dashboard — KARKA NEXUS" },
      { name: "description", content: "Manage KARKA NEXUS enquiries and site settings." },
      { property: "og:title", content: "Admin dashboard — KARKA NEXUS" },
      { property: "og:description", content: "KARKA NEXUS administration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

const PAGE = 20;
const LABEL: Record<EnquiryStatus, string> = { new: "New", in_progress: "In progress", contacted: "Contacted", closed: "Closed" };

function Admin() {
  const { user } = Route.useRouteContext();
  const isAdmin = useIsAdmin(user.id);

  if (isAdmin.isLoading) return <Shell admin={false}><p className="text-on-surface-variant">Checking access…</p></Shell>;
  if (!isAdmin.data)
    return (
      <Shell admin={false}>
        <h1 className="text-headline-md font-bold">Access denied</h1>
        <p className="mt-2 text-on-surface-variant">This area is for administrators only.</p>
        <Link to="/account" className={`${btnGhost} inline-block mt-6`}>Go to my account</Link>
      </Shell>
    );
  return (
    <Shell admin>
      <h1 className="text-headline-lg font-bold">Admin dashboard</h1>
      <Stats />
      <Enquiries />
      <Settings />
    </Shell>
  );
}

function Shell({ admin, children }: { admin: boolean; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <AppHeader isAdmin={admin} />
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">{children}</main>
    </div>
  );
}

function Stats() {
  const q = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const entries = await Promise.all(
        ENQUIRY_STATUSES.map(async (s) => {
          const { count, error } = await supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("status", s);
          if (error) throw error;
          return [s, count ?? 0] as const;
        }),
      );
      return Object.fromEntries(entries) as Record<EnquiryStatus, number>;
    },
  });
  const total = q.data ? Object.values(q.data).reduce((a, b) => a + b, 0) : 0;
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {q.isError && <p className="col-span-full text-error">Could not load statistics.</p>}
      <Stat label="Total" value={q.isLoading ? "…" : total} />
      {ENQUIRY_STATUSES.map((s) => (
        <Stat key={s} label={LABEL[s]} value={q.isLoading ? "…" : (q.data?.[s] ?? 0)} />
      ))}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-surface-container border border-primary/20 rounded-2xl p-5">
      <p className="text-label-md uppercase text-on-surface-variant">{label}</p>
      <p className="mt-2 text-headline-md font-bold text-tertiary">{value}</p>
    </div>
  );
}

type Enquiry = {
  id: string; full_name: string; email: string; phone: string; program: string;
  background: string | null; message: string | null; status: EnquiryStatus; created_at: string;
};

function Enquiries() {
  const qc = useQueryClient();
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState<EnquiryStatus | "all">("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => { setTerm(search.trim()); setPage(0); }, 300);
    return () => clearTimeout(t);
  }, [search]);

  const q = useQuery({
    queryKey: ["admin-enquiries", term, status, from, to, page],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      let r = supabase.from("enquiries").select("*", { count: "exact" }).order("created_at", { ascending: false });
      if (status !== "all") r = r.eq("status", status);
      if (from) r = r.gte("created_at", new Date(from).toISOString());
      if (to) r = r.lt("created_at", new Date(new Date(to).getTime() + 86400000).toISOString());
      if (term) {
        const safe = term.replace(/[%,()]/g, " ");
        r = r.or(`full_name.ilike.%${safe}%,email.ilike.%${safe}%,phone.ilike.%${safe}%,program.ilike.%${safe}%`);
      }
      const { data, error, count } = await r.range(page * PAGE, page * PAGE + PAGE - 1);
      if (error) throw error;
      return { rows: (data ?? []) as Enquiry[], count: count ?? 0 };
    },
  });

  const updateStatus = async (id: string, s: EnquiryStatus) => {
    const { error } = await supabase.from("enquiries").update({ status: s }).eq("id", id);
    if (error) return alert("Could not update status.");
    qc.invalidateQueries({ queryKey: ["admin-enquiries"] });
    qc.invalidateQueries({ queryKey: ["admin-stats"] });
  };

  const pages = Math.max(1, Math.ceil((q.data?.count ?? 0) / PAGE));

  return (
    <section className="bg-surface-container border border-primary/20 rounded-2xl p-6">
      <h2 className="text-headline-sm font-bold">Enquiries</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input className={inputCls} placeholder="Search name, email, phone, program" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className={inputCls} value={status} onChange={(e) => { setStatus(e.target.value as EnquiryStatus | "all"); setPage(0); }}>
          <option value="all">All statuses</option>
          {ENQUIRY_STATUSES.map((s) => <option key={s} value={s}>{LABEL[s]}</option>)}
        </select>
        <input className={inputCls} type="date" aria-label="From date" value={from} onChange={(e) => { setFrom(e.target.value); setPage(0); }} />
        <input className={inputCls} type="date" aria-label="To date" value={to} onChange={(e) => { setTo(e.target.value); setPage(0); }} />
      </div>

      <div className="mt-6 overflow-x-auto">
        {q.isLoading ? (
          <p className="text-on-surface-variant">Loading enquiries…</p>
        ) : q.isError ? (
          <p className="text-error">Could not load enquiries.</p>
        ) : q.data!.rows.length === 0 ? (
          <p className="text-on-surface-variant">No enquiries found.</p>
        ) : (
          <table className="w-full text-body-sm">
            <thead className="text-left text-label-md uppercase text-on-surface-variant">
              <tr><th className="py-2 pr-4">Date</th><th className="py-2 pr-4">Name</th><th className="py-2 pr-4">Email</th><th className="py-2 pr-4">Program</th><th className="py-2 pr-4">Status</th><th /></tr>
            </thead>
            <tbody>
              {q.data!.rows.map((r) => (
                <Fragment key={r.id}>
                  <tr className="border-t border-surface-variant/40">
                    <td className="py-3 pr-4 whitespace-nowrap">{new Date(r.created_at).toLocaleDateString()}</td>
                    <td className="py-3 pr-4">{r.full_name}</td>
                    <td className="py-3 pr-4">{r.email}</td>
                    <td className="py-3 pr-4">{r.program}</td>
                    <td className="py-3 pr-4">
                      <select aria-label="Status" className="bg-surface border border-outline-variant/40 rounded-xl px-2 py-1" value={r.status} onChange={(e) => updateStatus(r.id, e.target.value as EnquiryStatus)}>
                        {ENQUIRY_STATUSES.map((s) => <option key={s} value={s}>{LABEL[s]}</option>)}
                      </select>
                    </td>
                    <td className="py-3 text-right">
                      <button type="button" className="text-tertiary hover:underline" onClick={() => setOpen(open === r.id ? null : r.id)}>{open === r.id ? "Hide" : "View"}</button>
                    </td>
                  </tr>
                  {open === r.id && (
                    <tr>
                      <td colSpan={6} className="pb-4">
                        <div className="bg-surface rounded-xl p-4 space-y-1 text-on-surface-variant">
                          <p><b className="text-on-surface">Phone:</b> {r.phone}</p>
                          <p><b className="text-on-surface">Background:</b> {r.background || "—"}</p>
                          <p className="whitespace-pre-wrap"><b className="text-on-surface">Message:</b> {r.message || "—"}</p>
                          <p><b className="text-on-surface">Received:</b> {new Date(r.created_at).toLocaleString()}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-body-sm text-on-surface-variant">
        <span>{q.data?.count ?? 0} total · page {page + 1} of {pages}</span>
        <div className="flex gap-2">
          <button type="button" className={btnGhost} disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
          <button type="button" className={btnGhost} disabled={page + 1 >= pages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </section>
  );
}

const SETTING_KEYS = [
  { key: "contact_phone", label: "Contact phone" },
  { key: "contact_address", label: "Academy address" },
];

function Settings() {
  const qc = useQueryClient();
  const q = useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_settings").select("key, value");
      if (error) throw error;
      return Object.fromEntries((data ?? []).map((r) => [r.key, r.value])) as Record<string, string>;
    },
  });
  const [vals, setVals] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => { if (q.data) setVals(q.data); }, [q.data]);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    const rows = SETTING_KEYS.map(({ key }) => ({ key, value: (vals[key] ?? "").trim().slice(0, 500) }));
    const { error } = await supabase.from("site_settings").upsert(rows);
    if (error) return setMsg("Could not save settings.");
    qc.invalidateQueries({ queryKey: ["site-settings"] });
    setMsg("Settings saved.");
  };

  return (
    <section className="bg-surface-container border border-primary/20 rounded-2xl p-6">
      <h2 className="text-headline-sm font-bold">Website settings</h2>
      <form onSubmit={save} className="mt-4 space-y-4 max-w-xl">
        {SETTING_KEYS.map(({ key, label }) => (
          <label key={key} className="block space-y-2">
            <span className="text-label-lg">{label}</span>
            <input className={inputCls} maxLength={500} value={vals[key] ?? ""} onChange={(e) => setVals({ ...vals, [key]: e.target.value })} />
          </label>
        ))}
        {msg && <p role="status" className="text-body-sm text-tertiary">{msg}</p>}
        <button type="submit" className={`${btnPrimary} md:w-auto`}>Save settings</button>
      </form>
    </section>
  );
}
