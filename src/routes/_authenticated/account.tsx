import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AppHeader } from "@/components/AppHeader";
import { inputCls, btnPrimary } from "@/components/AuthShell";
import { useIsAdmin } from "@/lib/use-is-admin";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({
    meta: [
      { title: "My account — KARKA NEXUS" },
      { name: "description", content: "Manage your KARKA NEXUS profile." },
      { property: "og:title", content: "My account — KARKA NEXUS" },
      { property: "og:description", content: "Manage your KARKA NEXUS profile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Account,
});

function Account() {
  const { user } = Route.useRouteContext();
  const qc = useQueryClient();
  const isAdmin = useIsAdmin(user.id);
  const profile = useQuery({
    queryKey: ["profile", user.id],
    queryFn: async () => {
      const { data, error } = await supabase.from("profiles").select("full_name, phone").eq("id", user.id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (profile.data) {
      setFullName(profile.data.full_name ?? "");
      setPhone(profile.data.phone ?? "");
    }
  }, [profile.data]);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (phone && !/^\+?[0-9\s\-()]{7,20}$/.test(phone)) return setMsg({ ok: false, text: "Please enter a valid phone number" });
    setBusy(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, full_name: fullName.trim().slice(0, 100) || null, phone: phone.trim() || null });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: "Could not save your profile. Please try again." });
    qc.invalidateQueries({ queryKey: ["profile", user.id] });
    setMsg({ ok: true, text: "Profile saved." });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <AppHeader isAdmin={isAdmin.data === true} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-headline-lg font-bold">My account</h1>
        <p className="mt-2 text-body-md text-on-surface-variant">{user.email}</p>
        <form onSubmit={save} className="mt-8 space-y-5 bg-surface-container border border-primary/20 rounded-2xl p-6">
          {profile.isLoading ? (
            <p className="text-body-sm text-on-surface-variant">Loading profile…</p>
          ) : profile.isError ? (
            <p className="text-body-sm text-error">Could not load your profile.</p>
          ) : (
            <>
              <label className="block space-y-2">
                <span className="text-label-lg">Full name</span>
                <input className={inputCls} maxLength={100} value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </label>
              <label className="block space-y-2">
                <span className="text-label-lg">Phone</span>
                <input className={inputCls} type="tel" maxLength={30} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              {msg && <p role="status" className={`text-body-sm ${msg.ok ? "text-tertiary" : "text-error"}`}>{msg.text}</p>}
              <button type="submit" disabled={busy} className={btnPrimary}>{busy ? "Saving…" : "Save profile"}</button>
            </>
          )}
        </form>
      </main>
    </div>
  );
}
