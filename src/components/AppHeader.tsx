import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BrandLink, btnGhost } from "./AuthShell";

export function AppHeader({ isAdmin }: { isAdmin: boolean }) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };
  return (
    <header className="border-b border-surface-variant/40 bg-surface-container-lowest/85 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <BrandLink />
        <nav className="flex items-center gap-2 text-label-lg">
          <Link to="/account" className="px-3 py-2 rounded-xl text-on-surface-variant hover:text-on-surface" activeProps={{ className: "text-tertiary" }}>Account</Link>
          {isAdmin && (
            <Link to="/admin" className="px-3 py-2 rounded-xl text-on-surface-variant hover:text-on-surface" activeProps={{ className: "text-tertiary" }}>Admin</Link>
          )}
          <button type="button" onClick={signOut} className={btnGhost}>Sign out</button>
        </nav>
      </div>
    </header>
  );
}
