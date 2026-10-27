import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { AuthShell, inputCls, btnPrimary } from "@/components/AuthShell";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — KARKA NEXUS" },
      { name: "description", content: "Sign in or create your KARKA NEXUS account." },
      { property: "og:title", content: "Sign in — KARKA NEXUS" },
      { property: "og:description", content: "Access your KARKA NEXUS student account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

type Mode = "signin" | "signup" | "forgot";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/account", replace: true });
    });
  }, [navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        if (password.length < 8) throw new Error("Password must be at least 8 characters");
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/account", data: { full_name: fullName.trim() } },
        });
        if (error) throw error;
        setInfo("Check your email to confirm your account, then sign in.");
      } else if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/account", replace: true });
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/reset-password",
        });
        if (error) throw error;
        setInfo("If an account exists, a reset link has been sent to your email.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setError(null);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/auth" });
    if (r.error) return setError(r.error.message);
    if (r.redirected) return;
    navigate({ to: "/account", replace: true });
  };

  const titles: Record<Mode, string> = { signin: "Welcome back", signup: "Create your account", forgot: "Reset password" };

  return (
    <AuthShell title={titles[mode]} subtitle={mode === "forgot" ? "We'll email you a reset link." : undefined}>
      <form onSubmit={submit} className="space-y-4">
        {mode === "signup" && (
          <input className={inputCls} placeholder="Full name" required maxLength={100} value={fullName} onChange={(e) => setFullName(e.target.value)} />
        )}
        <input className={inputCls} type="email" placeholder="Email address" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {mode !== "forgot" && (
          <input className={inputCls} type="password" placeholder="Password" required minLength={mode === "signup" ? 8 : undefined} autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        )}
        {error && <p role="alert" className="text-body-sm text-error">{error}</p>}
        {info && <p role="status" className="text-body-sm text-tertiary">{info}</p>}
        <button type="submit" disabled={busy} className={btnPrimary}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}
        </button>
      </form>
      {mode !== "forgot" && (
        <>
          <div className="my-5 flex items-center gap-3 text-label-md text-outline"><span className="h-px flex-1 bg-outline-variant/40" />OR<span className="h-px flex-1 bg-outline-variant/40" /></div>
          <button type="button" onClick={google} className="w-full px-6 py-3 rounded-xl border border-outline-variant/40 hover:border-tertiary text-on-surface transition-all">
            Continue with Google
          </button>
        </>
      )}
      <div className="mt-6 flex flex-col gap-2 text-center text-body-sm text-on-surface-variant">
        {mode === "signin" && (
          <>
            <button type="button" className="hover:text-tertiary" onClick={() => setMode("forgot")}>Forgot password?</button>
            <button type="button" className="hover:text-tertiary" onClick={() => setMode("signup")}>New here? Create an account</button>
          </>
        )}
        {mode !== "signin" && (
          <button type="button" className="hover:text-tertiary" onClick={() => setMode("signin")}>Back to sign in</button>
        )}
      </div>
    </AuthShell>
  );
}
