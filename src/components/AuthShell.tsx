import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const inputCls =
  "w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md";
export const btnPrimary =
  "w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] text-on-primary font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(47,217,244,0.5)] transition-all disabled:opacity-60";
export const btnGhost =
  "px-4 py-2 rounded-xl border border-outline-variant/40 text-on-surface hover:border-tertiary transition-all";

export function BrandLink() {
  return (
    <Link to="/" className="inline-flex items-center gap-1.5 text-headline-sm font-bold">
      <span className="text-on-surface">KARKA</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">NEXUS</span>
    </Link>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle?: string | undefined; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070816] text-on-surface flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/30 via-[#2fd9f4]/20 to-[#d946ef]/20 blur-[140px] pointer-events-none" />
      <div className="relative w-full max-w-md bg-surface-container/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(139,92,246,0.2)]">
        <div className="mb-6 text-center">
          <BrandLink />
          <h1 className="mt-4 text-headline-md font-bold">{title}</h1>
          {subtitle && <p className="mt-2 text-body-sm text-on-surface-variant">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
