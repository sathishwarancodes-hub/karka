import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, inputCls, btnPrimary } from "@/components/AuthShell";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password — KARKA NEXUS" },
      { name: "description", content: "Choose a new password for your KARKA NEXUS account." },
      { property: "og:title", content: "Set a new password — KARKA NEXUS" },
      { property: "og:description", content: "Reset your KARKA NEXUS password." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return setError(error.message);
    navigate({ to: "/account", replace: true });
  };

  return (
    <AuthShell title="Set a new password">
      <form onSubmit={submit} className="space-y-4">
        <input className={inputCls} type="password" placeholder="New password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className={inputCls} type="password" placeholder="Confirm password" autoComplete="new-password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        {error && <p role="alert" className="text-body-sm text-error">{error}</p>}
        <button type="submit" disabled={busy} className={btnPrimary}>{busy ? "Saving…" : "Update password"}</button>
      </form>
    </AuthShell>
  );
}
