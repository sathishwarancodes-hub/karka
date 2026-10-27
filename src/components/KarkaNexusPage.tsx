import { useState, type FormEvent } from "react";

export function KarkaNexusPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("Thanks! Online enquiries aren't connected yet — please call us at +91 94875 30243.");
  };
  return (
    <div className="bg-surface font-body text-on-surface">
<header className="fixed top-4 left-0 right-0 mx-auto w-[94%] max-w-7xl z-50 transition-all duration-300">

<div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/50 via-[#2fd9f4]/40 to-[#d946ef]/40 rounded-2xl blur-xl opacity-60 -z-10 pointer-events-none"></div>
<div className="relative bg-surface-container-lowest/85 backdrop-blur-xl border border-primary/20 hover:border-primary/40 rounded-2xl shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all px-4 lg:px-8 py-3">
<div className="flex items-center justify-between gap-4">

<a className="flex items-center gap-3 group shrink-0" data-path="home" href="#top"><div className="relative flex items-center justify-center shrink-0"><div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-tertiary blur-sm opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div><div className="relative px-2.5 py-1.5 rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container border border-primary/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.4)] group-hover:scale-105 transition-transform"><svg className="w-10 h-8" fill="none" viewBox="0 0 76 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#8B5CF6" fillOpacity="0.15" height="15" rx="2.5" stroke="#8B5CF6" strokeWidth="2.2" width="18" x="3" y="14"></rect><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="8" x2="16" y1="10" y2="10"></line><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="12" x2="12" y1="10" y2="14"></line><rect fill="#8B5CF6" fillOpacity="0.15" height="15" rx="2.5" stroke="#8B5CF6" strokeWidth="2.2" width="18" x="55" y="14"></rect><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="60" x2="68" y1="10" y2="10"></line><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="64" x2="64" y1="10" y2="14"></line><circle cx="38" cy="11" fill="#22D3EE" fillOpacity="0.25" r="5.5" stroke="#22D3EE" strokeWidth="2.4"></circle><path d="M27 38 C27 27, 32 22, 38 22 C44 22, 49 27, 49 38" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2.4"></path><path d="M33 30 V38 M43 30 V38" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2"></path><path d="M12 36 C12 43, 24 45, 38 45 C52 45, 64 43, 64 36" stroke="#8B5CF6" strokeDasharray="1 2.5" strokeLinecap="round" strokeWidth="2"></path><circle cx="14" cy="42" fill="#22D3EE" r="2"></circle><path d="M14 42 C18 45, 23 44, 28 43" stroke="#22D3EE" strokeLinecap="round" strokeWidth="1.4"></path></svg></div></div><div className="flex flex-col"><div className="flex items-center gap-2"><span className="text-headline-sm font-headline font-bold tracking-tight leading-none inline-flex items-center gap-1.5"><span className="text-on-surface font-extrabold">KARKA</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary font-bold">NEXUS</span></span></div><div className="flex items-center gap-1.5 mt-1"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-tertiary"></span></span><span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">AI &amp; TECH ACADEMY</span></div></div></a>

<nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/60 border border-surface-variant/30 rounded-full px-4 py-1.5 shadow-inner" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-xl">
<a className="px-3 py-1.5 text-sm font-medium text-on-surface hover:text-tertiary rounded-full hover:bg-surface-variant/40 transition-all duration-300 flex items-center gap-1" data-path="programs" href="#programs">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="">Programs</span>
</a>
<a className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-variant/40 transition-all duration-300" data-path="projects" href="#projects">Projects</a>
<a className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-variant/40 transition-all duration-300" data-path="why-karka" href="#why-karka">Why Karka</a>
<a className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-variant/40 transition-all duration-300" data-path="placements" href="#placements">Placements</a>
<a className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-variant/40 transition-all duration-300" data-path="faqs" href="#faqs">FAQs</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-label-lg text-on-surface-variant hover:text-on-surface border border-outline-variant/40 hover:border-tertiary hover:bg-surface-variant/30 transition-all duration-300 backdrop-blur-md" data-path="programs" href="#programs">
<span className="">Explore Programs</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">arrow_forward</span>
</a>
<a className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#22D3EE] text-on-primary font-label-lg transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(47,217,244,0.5)] hover:scale-[1.02] flex items-center gap-2" data-path="get-started" href="#get-started">
<span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">rocket_launch</span>
<span className="tracking-wide">Get Started</span>
</a>
<button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="w-9 h-9 rounded-xl bg-surface-container border border-primary/20 flex items-center justify-center lg:hidden hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-[20px]">{menuOpen ? "close" : "menu"}</span>
</button>
</div>
</div>
<div className={`lg:hidden grid transition-all duration-300 ease-out ${menuOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}><nav className="overflow-hidden flex flex-col gap-1">{[["Programs","#programs"],["Projects","#projects"],["Why Karka","#why-karka"],["Placements","#placements"],["FAQs","#faqs"],["Get Started","#get-started"]].map(([l,h]) => <a key={h} href={h} onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-xl text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-colors">{l}</a>)}</nav></div></div>
</header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full text-on-surface">

<section id="top" className="relative min-h-[921px] flex items-center justify-center overflow-hidden pt-12 pb-24 px-6 lg:px-12">
<div className="absolute inset-0 bg-[#070816] -z-20"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1d1e2d10_1px,transparent_1px),linear-gradient(to_bottom,#1d1e2d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] -z-10"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/30 via-[#2fd9f4]/25 to-[#d946ef]/25 blur-[140px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-gradient-to-bl from-[#2fd9f4]/25 via-[#6366F1]/30 to-[#8B5CF6]/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-[#d946ef]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>


<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 z-10">
  
  <div className="relative rounded-3xl bg-surface-container-low/60 border border-white/10 backdrop-blur-xl p-8 lg:p-10 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col justify-between">
    
    
    
    <div className="space-y-6 relative z-10">
      
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container/80 border border-primary/30 backdrop-blur-md">
        <span className="text-[#2fd9f4] text-xs">✦</span>
        <span className="text-[11px] font-mono tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2fd9f4] to-[#d0bcff] uppercase">THE NEXT ERA OF TECH</span>
      </div>

      
      <h1 className="font-headline text-[36px] sm:text-[44px] lg:text-[50px] font-bold tracking-tight leading-[1.1]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Learn the Future.</span><br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8B5CF6] to-[#ec4899] drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]">Build What Matters.</span>
      </h1>

      
      <p className="text-body-md sm:text-body-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
        Step into the world of AI, software, and emerging technologies. Develop practical skills, create meaningful projects, and move toward your career ambitions.
      </p>

      
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a href="#programs" data-path="programs" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] text-on-primary font-label-lg hover:shadow-[0_0_25px_rgba(47,217,244,0.5)] hover:scale-[1.02] transition-all flex items-center gap-2 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)]">
          <span className="">Explore Programs</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
        <a href="#approach" data-path="why-karka" className="px-6 py-3 rounded-xl bg-surface-container/80 border border-primary/25 text-on-surface font-label-lg hover:border-tertiary hover:bg-surface-variant/40 hover:shadow-[0_0_20px_rgba(47,217,244,0.2)] transition-all backdrop-blur-md">
          Discover Our Approach
        </a>
      </div>
    </div>
  </div>

  
  <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl px-2">
    <div className="flex flex-col">
      <span className="text-label-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#d0bcff]">PRACTICAL</span>
      <span className="text-body-sm text-on-surface-variant font-medium">LEARNING</span>
    </div>
    <div className="flex flex-col border-x border-surface-variant/30 px-4">
      <span className="text-label-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] to-[#67e8f9]">PROJECT</span>
      <span className="text-body-sm text-on-surface-variant font-medium">DRIVEN</span>
    </div>
    <div className="flex flex-col pl-2">
      <span className="text-label-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#c0c1ff]">CAREER</span>
      <span className="text-body-sm text-on-surface-variant font-medium">FOCUSED</span>
    </div>
  </div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">

<div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#8B5CF6]/35 via-[#2fd9f4]/30 to-[#ec4899]/30 blur-2xl -z-10 animate-pulse"></div>

<div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite] shadow-[0_0_20px_rgba(139,92,246,0.15)]"></div>
<div className="absolute inset-6 rounded-full border border-tertiary/30 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>

<div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#2fd9f4] to-[#ec4899] p-[3px] shadow-[0_0_60px_rgba(139,92,246,0.6)] flex items-center justify-center relative z-10 transition-transform duration-500 hover:scale-105">
<div className="w-full h-full rounded-full bg-[#0d0e1d] flex flex-col items-center justify-center text-center p-4 border border-white/10 shadow-inner">
<span className="material-symbols-outlined text-[36px] text-transparent bg-clip-text bg-gradient-to-tr from-[#2fd9f4] to-[#8B5CF6]" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
<span className="text-label-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#d0bcff] mt-1">NEXUS CORE</span>
<span className="text-code-sm text-[#2fd9f4] font-mono tracking-wider font-semibold">v4.8 ACTIVE</span>
</div>
</div>

<div className="absolute -top-4 -left-4 bg-surface-container-high/90 border border-[#2fd9f4]/40 p-4 rounded-xl backdrop-blur-xl shadow-[0_0_25px_rgba(47,217,244,0.25)] z-20 max-w-[200px]">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-ping"></div>
<span className="text-code-sm text-[#2fd9f4] font-bold">Neural Engine</span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px]">Training weights optimized via real-time telemetry.</p>
</div>
<div className="absolute -bottom-6 -right-2 bg-surface-container-high/90 border border-[#ec4899]/40 p-4 rounded-xl backdrop-blur-xl shadow-[0_0_25px_rgba(236,72,153,0.25)] z-20">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[16px] text-[#ec4899]">terminal</span>
<span className="text-code-sm text-[#ec4899] font-bold">compile_status</span>
</div>
<p className="text-code-sm text-on-surface text-[12px] bg-surface/90 border border-white/10 p-1.5 rounded font-mono">&gt;&gt;&gt; 0 errors, 100% test pass</p>
</div>
</div>
</div>
</div></section>

<section id="programs" className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden">
<div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#8B5CF6]/15 via-[#2fd9f4]/10 to-transparent blur-[140px] pointer-events-none"></div>


<div className="max-w-7xl mx-auto space-y-16 relative z-10">
<div className="text-center max-w-3xl mx-auto space-y-4">
<span className="text-label-md font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8B5CF6] to-[#ec4899]">EXPLORE YOUR POTENTIAL</span>
<h2 className="text-headline-lg font-headline font-bold text-on-surface">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Find Your Next Direction.</span>
</h2>
<p className="text-body-lg text-on-surface-variant">Explore technology learning paths that help you develop skills and turn curiosity into practical knowledge.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-surface-container/75 border border-primary/25 hover:border-primary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6]/25 to-[#2fd9f4]/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">psychology</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">AI &amp; Machine Learning</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Master neural networks, deep learning architectures, and modern LLM integrations through rigorous hands-on builds.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#2fd9f4] font-semibold">6 Months</span>
<a className="text-label-lg text-primary flex items-center gap-1 group-hover:text-[#2fd9f4] group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>

<div className="group bg-surface-container/75 border border-tertiary/25 hover:border-tertiary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(47,217,244,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2fd9f4] via-[#009fb4] to-[#6366F1] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2fd9f4]/25 to-[#6366F1]/20 border border-tertiary/30 flex items-center justify-center text-tertiary group-hover:scale-110 shadow-[0_0_15px_rgba(47,217,244,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">monitoring</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Data Science &amp; Analytics</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Transform raw datasets into actionable business foresight using advanced Python, SQL, and predictive modeling.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] to-[#c0c1ff] font-semibold">5 Months</span>
<a className="text-label-lg text-tertiary flex items-center gap-1 group-hover:text-primary group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>

<div className="group bg-surface-container/75 border border-secondary/25 hover:border-secondary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(192,193,255,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] via-[#c0c1ff] to-[#ec4899] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c0c1ff]/25 to-[#ec4899]/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">code</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">Full-Stack Development</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Engineer production-ready web architectures from robust Node/Go backends to reactive Next.js client interfaces.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#c0c1ff] to-[#ec4899] font-semibold">6 Months</span>
<a className="text-label-lg text-secondary flex items-center gap-1 group-hover:text-primary group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>

<div className="group bg-surface-container/75 border border-primary/25 hover:border-primary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#ec4899] to-[#2fd9f4] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6]/25 to-[#ec4899]/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">terminal</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Python Programming</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Build a solid engineering foundation starting from clean syntax logic all the way to asynchronous backend scripts.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#ec4899] font-semibold">3 Months</span>
<a className="text-label-lg text-primary flex items-center gap-1 group-hover:text-[#2fd9f4] group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>

<div className="group bg-surface-container/75 border border-tertiary/25 hover:border-tertiary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(47,217,244,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2fd9f4] via-[#3b82f6] to-[#8B5CF6] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2fd9f4]/25 to-[#3b82f6]/20 border border-tertiary/30 flex items-center justify-center text-tertiary group-hover:scale-110 shadow-[0_0_15px_rgba(47,217,244,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">cloud</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Cloud Computing &amp; DevOps</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Automate deployments, orchestrate Kubernetes clusters, and scale enterprise infrastructure seamlessly on AWS/GCP.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] to-[#3b82f6] font-semibold">4 Months</span>
<a className="text-label-lg text-tertiary flex items-center gap-1 group-hover:text-primary group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>

<div className="group bg-surface-container/75 border border-secondary/25 hover:border-secondary p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(192,193,255,0.3)] hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec4899] via-[#8B5CF6] to-[#2fd9f4] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899]/25 to-[#8B5CF6]/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform">
<span className="material-symbols-outlined text-[24px]">auto_awesome</span>
</div>
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">Emerging Technologies</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Experiment at the frontier of computer vision, generative AI tools, and specialized decentralized protocols.</p>
</div>
<div className="pt-6 mt-6 border-t border-surface-variant/30 flex items-center justify-between">
<span className="text-code-sm text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#8B5CF6] font-semibold">3 Months</span>
<a className="text-label-lg text-secondary flex items-center gap-1 group-hover:text-primary group-hover:translate-x-1 transition-all" data-path="explore-programs" href="#get-started">Explore Track <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</div>
</div>
</div></section>

<section id="approach" className="py-24 px-6 lg:px-12 relative overflow-hidden"><div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/25 to-[#2fd9f4]/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-6 space-y-6">
<span className="text-label-md font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] to-[#8B5CF6]">A DIFFERENT APPROACH</span>
<h2 className="text-headline-lg font-headline font-bold leading-tight">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Your Ambition. Your Learning Journey.</span>
</h2>
<p className="text-body-lg text-on-surface-variant leading-relaxed">
          Discover the Pay After Placement model and understand its eligibility requirements, payment conditions, and terms before making your decision. We align our success with yours.
        </p>
<div className="pt-4">
<a className="px-space-md.5 py-3.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] text-on-primary font-label-lg hover:shadow-[0_0_30px_rgba(47,217,244,0.4)] transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] inline-flex items-center gap-space-sm font-semibold" data-path="why-karka" href="#approach">
            Understand the Model <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-6 bg-surface-container/70 border border-primary/30 p-8 rounded-2xl backdrop-blur-xl relative shadow-[0_0_35px_rgba(139,92,246,0.15)]">
<div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#8B5CF6] before:via-[#2fd9f4] before:to-[#ec4899]">
<div className="relative flex items-start gap-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] text-on-primary font-bold flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(139,92,246,0.6)] text-code-sm border border-white/20">01</div>
<div>
<h3 className="text-headline-sm font-bold text-on-surface">Explore Your Program</h3>
<p className="text-body-md text-on-surface-variant mt-1">Select your preferred technical track and assess baseline readiness with our intake advisors.</p>
</div>
</div>
<div className="relative flex items-start gap-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2fd9f4] to-[#009fb4] text-on-tertiary-container font-bold flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(47,217,244,0.6)] text-code-sm border border-white/20">02</div>
<div>
<h3 className="text-headline-sm font-bold text-on-surface">Understand the Terms</h3>
<p className="text-body-md text-on-surface-variant mt-1">Review transparent PAP criteria with zero upfront tuition fees until you land a qualifying tech role.</p>
</div>
</div>
<div className="relative flex items-start gap-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#c0c1ff] text-on-primary font-bold flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)] text-code-sm border border-white/20">03</div>
<div>
<h3 className="text-headline-sm font-bold text-on-surface">Develop Practical Skills</h3>
<p className="text-body-md text-on-surface-variant mt-1">Immerse in intensive peer programming, code reviews, and mentorship cycles.</p>
</div>
</div>
<div className="relative flex items-start gap-6">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8B5CF6] text-on-primary font-bold flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(236,72,153,0.6)] text-code-sm border border-white/20">04</div>
<div>
<h3 className="text-headline-sm font-bold text-on-surface">Review the Placement Process</h3>
<p className="text-body-md text-on-surface-variant mt-1">Mock interviews, resume profiling, and direct introductions to our hiring partner network.</p>
</div>
</div>
</div>
</div>
</div></section>

<section id="projects" className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden">


<div className="max-w-7xl mx-auto space-y-16 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-4 max-w-2xl">
<span className="text-label-md text-secondary tracking-widest uppercase">BUILT THROUGH EXPERIENCE</span>
<h2 className="text-headline-lg font-headline font-bold text-on-surface">Ideas Into Reality.</h2>
<p className="text-body-lg text-on-surface-variant">Explore how technology concepts can become practical applications and meaningful projects built by our learners.</p>
</div>
<a className="text-label-lg text-primary hover:text-tertiary transition-colors flex items-center gap-1" data-path="projects" href="#projects">View Full Portfolio <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container/80 border border-secondary/20 hover:border-secondary rounded-xl overflow-hidden backdrop-blur-md transition-all group">
<div className="w-full h-48 bg-cover bg-center relative" data-alt="A futuristic software interface showing neural network visualization with neon purple and cyan nodes connected across a dark indigo workspace grid." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1CCKmP8ZjR2I1eheuXOsfWqKKAOI-KBLl_dfMFKQ4Z7SIlt3g0KvHBnJzdO4yUY6Egq3kCQE6ivLv7rk7VJb8pYJ9MoEDRczLpLPtI0ZC5kBx36fEec2Brsq20FDe2XyAtDN6qtGvNoBM7F74FTKiz8FJa2-C6gkks6nLIUgaY8qQRLjGdq4x5z-8aqRqIkHW5CaNa9eg5cv_7yBCsAQzFz2OiBYmfA_khsjX1Zxig1KeUExzom_h')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-code-sm text-secondary font-mono">AI / LLM</span>
</div>
<div className="p-6 space-y-4">
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">Intelligent Applications</h3>
<p className="text-body-md text-on-surface-variant">Multi-modal generative agent orchestrating live data streams and providing real-time synthesis.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">Python</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">FastAPI</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">React</span>
</div>
</div>
</div>

<div className="bg-surface-container/80 border border-primary/20 hover:border-primary rounded-xl overflow-hidden backdrop-blur-md transition-all group">
<div className="w-full h-48 bg-cover bg-center relative" data-alt="An advanced data analytics dashboard with glowing charts, neon histograms, and trend forecasting lines on dark blue glassmorphism panels." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh27vnX8X72BZsTXHyUx5GKoZkzf_G1ePgiFxT0vdkrhMrURpYZVoBWYiMKuqpPJMXU8J60NyAIoqMrO0UXljGAZ8EJA12gsGAK1QMdPib9mYc9e6IJkQc2Ln_g84RlF-coGCbh2H4F5r-z32Z-8sXriX7i_IAAFXcxlPILcvnYCK8bTSho6mKkLzWIlQ1cm6InkTOEsZ1nZBM9SetmyJgH5547vkYM9da7D7yd1DZ1B8MGRwjGT-Q')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-code-sm text-primary font-mono">DATA &amp; ML</span>
</div>
<div className="p-6 space-y-4">
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Data-Driven Solutions</h3>
<p className="text-body-md text-on-surface-variant">Predictive telemetry engine analyzing millions of log entries to detect anomalies instantly.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">Pandas</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">PyTorch</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">Grafana</span>
</div>
</div>
</div>

<div className="bg-surface-container/80 border border-tertiary/20 hover:border-tertiary rounded-xl overflow-hidden backdrop-blur-md transition-all group">
<div className="w-full h-48 bg-cover bg-center relative" data-alt="A sleek high-performance SaaS web application workspace with modular component layouts and glowing cyan accents." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxk39NEW0gBtMRNApVJHq2Fmr0T-RpQN2ZG0-T6T54oIO64qI15OFs_s59KFgZxHfsfapXvIKzbBo783u8g_h97fn6zFgux1TmJwgomHI69eq5z70Dr5pKOoTO5M9Vykxtfc-F8QTM27OrhXhoGvTbNvZFXeg_JjAUd8ECo_4YO7BP2GIlggm-mXzI2zhU1wi8e1XmsPCRbumaPo0eXyVcz_7IrAznDkqxclGIy_k9_rvddwwURrRq')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-code-sm text-tertiary font-mono">FULL-STACK</span>
</div>
<div className="p-6 space-y-4">
<h3 className="text-headline-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Full-Stack Experiences</h3>
<p className="text-body-md text-on-surface-variant">Distributed real-time collaborative workspace with zero-latency synchronization.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">TypeScript</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">Next.js</span>
<span className="px-2.5 py-1 rounded bg-surface text-code-sm text-on-surface-variant">Redis</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="why-karka" className="py-24 px-6 lg:px-12 relative"><div className="max-w-7xl mx-auto space-y-16">
<div className="text-center max-w-3xl mx-auto space-y-4">
<span className="text-label-md font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8B5CF6] to-[#ec4899]">THE NEXUS ADVANTAGE</span>
<h2 className="text-headline-lg font-headline font-bold text-on-surface">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Designed for the Next Generation.</span>
</h2>
<p className="text-body-lg text-on-surface-variant">We built an academy model that mirrors top-tier engineering environments rather than traditional classrooms.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container/60 border border-primary/25 hover:border-primary/50 p-8 rounded-xl backdrop-blur-md flex gap-6 items-start transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
<span className="text-headline-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">01</span>
<div className="space-y-2">
<h3 className="text-headline-sm font-bold text-on-surface">Learn by Doing</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Write production code from day one. Absorb theory through direct implementation and peer code reviews.</p>
</div>
</div>
<div className="bg-surface-container/60 border border-tertiary/25 hover:border-tertiary/50 p-8 rounded-xl backdrop-blur-md flex gap-6 items-start transition-all hover:shadow-[0_0_30px_rgba(47,217,244,0.2)]">
<span className="text-headline-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#2fd9f4] via-[#009fb4] to-[#6366F1] drop-shadow-[0_0_15px_rgba(47,217,244,0.4)]">02</span>
<div className="space-y-2">
<h3 className="text-headline-sm font-bold text-on-surface">Develop Practical Skills</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Master modern toolchains, git workflows, CI/CD pipelines, and agile software development practices.</p>
</div>
</div>
<div className="bg-surface-container/60 border border-secondary/25 hover:border-secondary/50 p-8 rounded-xl backdrop-blur-md flex gap-6 items-start transition-all hover:shadow-[0_0_30px_rgba(192,193,255,0.2)]">
<span className="text-headline-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] via-[#c0c1ff] to-[#ec4899] drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">03</span>
<div className="space-y-2">
<h3 className="text-headline-sm font-bold text-on-surface">Explore Emerging Technology</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Stay ahead of the curve with curriculum updated continuously to include generative AI and cloud-native standards.</p>
</div>
</div>
<div className="bg-surface-container/60 border border-primary/25 hover:border-primary/50 p-8 rounded-xl backdrop-blur-md flex gap-6 items-start transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
<span className="text-headline-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ec4899] via-[#8B5CF6] to-[#2fd9f4] drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">04</span>
<div className="space-y-2">
<h3 className="text-headline-sm font-bold text-on-surface">Build Toward Your Goals</h3>
<p className="text-body-md text-on-surface-variant leading-relaxed">Receive personalized mentorship and career coaching tailored precisely to your ambitions.</p>
</div>
</div>
</div>
</div></section>

<section id="placements" className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden">
<div className="max-w-7xl mx-auto space-y-16">
<div className="text-center max-w-3xl mx-auto space-y-4">
<span className="text-label-md text-tertiary tracking-widest uppercase">CAREER ACCELERATION</span>
<h2 className="text-headline-lg font-headline font-bold text-on-surface">Prepare for What's Next.</h2>
<p className="text-body-lg text-on-surface-variant">A structured pathway from foundational skill development to executive-ready technical confidence.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
<div className="bg-surface-container/80 border border-primary/20 p-6 rounded-xl backdrop-blur-md space-y-4">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
<h3 className="text-headline-sm font-bold text-on-surface">Skill Foundation</h3>
<p className="text-body-sm text-on-surface-variant">Deep dive into logic, algorithms, and core language structures.</p>
</div>
<div className="bg-surface-container/80 border border-tertiary/20 p-6 rounded-xl backdrop-blur-md space-y-4">
<div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary font-bold">2</div>
<h3 className="text-headline-sm font-bold text-on-surface">Project Execution</h3>
<p className="text-body-sm text-on-surface-variant">Build complex production-grade software in collaborative teams.</p>
</div>
<div className="bg-surface-container/80 border border-secondary/20 p-6 rounded-xl backdrop-blur-md space-y-4">
<div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">3</div>
<h3 className="text-headline-sm font-bold text-on-surface">Technical Confidence</h3>
<p className="text-body-sm text-on-surface-variant">Simulated system design interviews and rigorous code reviews.</p>
</div>
<div className="bg-surface-container/80 border border-primary/20 p-6 rounded-xl backdrop-blur-md space-y-4">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
<h3 className="text-headline-sm font-bold text-on-surface">Career Placement</h3>
<p className="text-body-sm text-on-surface-variant">Direct matching with top tech companies and hiring partners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 relative" id="get-started"><div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-[#2fd9f4]/15 via-[#8B5CF6]/20 to-[#ec4899]/15 blur-[150px] rounded-full pointer-events-none"></div>


<div className="max-w-4xl mx-auto bg-surface-container/90 border border-primary/30 p-8 lg:p-12 rounded-2xl backdrop-blur-xl shadow-[0_0_60px_rgba(139,92,246,0.25)] relative overflow-hidden z-10">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#2fd9f4] to-[#ec4899]"></div>
<div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
<span className="text-label-md font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] to-[#8B5CF6]">TAKE THE FIRST STEP</span>
<h2 className="text-headline-lg font-headline font-bold text-on-surface">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Your Next Chapter Starts Here.</span>
</h2>
<p className="text-body-md text-on-surface-variant">Tell us what you want to learn and take the first step toward your technology goals.</p>
</div>
<form className="space-y-6" onSubmit={onSubmit} noValidate={false}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Full Name</label>
<input className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md" name="name" placeholder="Alex Turner" required type="text" />
</div>
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Email Address</label>
<input className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md" name="email" placeholder="alex@example.com" required type="email" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Phone Number</label>
<input className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md" name="phone" placeholder="+1 (555) 019-2834" required type="tel" />
</div>
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Program of Interest</label>
<select name="program" className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md">
<option>AI &amp; Machine Learning</option>
<option>Data Science &amp; Analytics</option>
<option>Full-Stack Development</option>
<option>Python Programming</option>
<option>Cloud Computing &amp; DevOps</option>
<option>Emerging Technologies</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Current Education Level / Background</label>
<input className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md" name="education" placeholder="e.g. Computer Science Graduate / Working Professional" type="text" />
</div>
<div className="space-y-2">
<label className="text-label-lg text-on-surface">Optional Message</label>
<textarea className="w-full bg-surface border border-outline-variant/40 focus:border-tertiary text-on-surface rounded-xl px-4 py-3 outline-none transition-colors text-body-md" name="message" placeholder="Tell us about your background and career goals..." rows={4} />
</div>
<div className="pt-4 text-center">
<button className="w-full md:w-auto px-space-xl py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] text-on-primary font-label-lg hover:shadow-[0_0_30px_rgba(47,217,244,0.5)] hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center gap-space-sm mx-auto font-semibold" type="submit">
            Start My Journey <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
</button>
</div>
{status && <p role="status" className="text-center text-body-sm text-tertiary">{status}</p>}</form>
</div></section>

<section className="py-24 px-6 lg:px-12 bg-surface-container-low" id="faqs"><div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 via-[#2fd9f4]/15 to-[#ec4899]/20 pointer-events-none blur-3xl"></div>
<div className="max-w-5xl mx-auto bg-surface-container/90 border border-primary/40 p-12 lg:p-16 rounded-3xl backdrop-blur-xl text-center space-y-8 shadow-[0_0_60px_rgba(139,92,246,0.35)] relative z-10 overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#2fd9f4] to-[#ec4899]"></div>
<span className="text-label-md font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8B5CF6] to-[#ec4899]">JOIN THE NEXUS REVOLUTION</span>
<h2 className="text-headline-xl font-headline font-bold text-on-surface leading-tight">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d0bcff]">Your Future Starts With </span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8B5CF6] to-[#ec4899]">What You Build.</span>
</h2>
<p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Take command of your career trajectory today. Master elite technical skills and build meaningful projects with expert guidance.</p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-4">
<a className="px-space-lg.5 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#2fd9f4] text-on-primary font-label-lg hover:shadow-[0_0_35px_rgba(47,217,244,0.5)] hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center gap-space-sm font-semibold" data-path="programs" href="#programs">
          Explore Programs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="px-space-lg.5 py-4 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-label-lg hover:border-tertiary hover:shadow-[0_0_20px_rgba(47,217,244,0.2)] transition-all" href="#get-started">
          Contact Karka
        </a>
</div>
</div></section>

<section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-[#070816]">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-tertiary/15 pointer-events-none"></div>


<div className="max-w-5xl mx-auto bg-surface-container/90 border border-primary/30 p-12 lg:p-16 rounded-3xl backdrop-blur-xl text-center space-y-8 shadow-[0_0_50px_rgba(139,92,246,0.25)] relative z-10">
<span className="text-label-md text-tertiary tracking-widest uppercase">JOIN THE NEXUS REVOLUTION</span>
<h2 className="text-headline-xl font-headline font-bold text-on-surface">Your Future Starts With What You Build.</h2>
<p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Take command of your career trajectory today. Master elite technical skills and build meaningful projects with expert guidance.</p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-4">
<a className="px-space-lg.5 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-on-primary font-label-lg hover:opacity-95 transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center gap-space-sm" data-path="programs" href="#programs">
          Explore Programs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="px-space-lg.5 py-4 rounded-xl bg-surface border border-outline-variant/40 text-on-surface font-label-lg hover:border-tertiary transition-all" href="#get-started">
          Contact Karka
        </a>
</div>
</div>
</section>

</div></main><footer className="w-full bg-surface-container-low pt-16 pb-12 border-t border-surface-variant/30"><div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12"><div className="space-y-space-md lg:col-span-4"><div className="flex items-center gap-space-sm"><div className="flex items-center gap-3"><div className="relative px-2.5 py-1.5 rounded-xl bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.2)]"><svg className="w-9 h-7" fill="none" viewBox="0 0 76 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#8B5CF6" fillOpacity="0.2" height="15" rx="2.5" stroke="#8B5CF6" strokeWidth="2.2" width="18" x="3" y="14"></rect><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="8" x2="16" y1="10" y2="10"></line><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="12" x2="12" y1="10" y2="14"></line><rect fill="#8B5CF6" fillOpacity="0.2" height="15" rx="2.5" stroke="#8B5CF6" strokeWidth="2.2" width="18" x="55" y="14"></rect><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="60" x2="68" y1="10" y2="10"></line><line stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2" x1="64" x2="64" y1="10" y2="14"></line><circle cx="38" cy="11" fill="#22D3EE" fillOpacity="0.25" r="5.5" stroke="#22D3EE" strokeWidth="2.4"></circle><path d="M27 38 C27 27, 32 22, 38 22 C44 22, 49 27, 49 38" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2.4"></path><path d="M33 30 V38 M43 30 V38" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2"></path><path d="M12 36 C12 43, 24 45, 38 45 C52 45, 64 43, 64 36" stroke="#8B5CF6" strokeDasharray="1 2.5" strokeLinecap="round" strokeWidth="2"></path><circle cx="14" cy="42" fill="#22D3EE" r="2"></circle><path d="M14 42 C18 45, 23 44, 28 43" stroke="#22D3EE" strokeLinecap="round" strokeWidth="1.4"></path></svg></div><div className="flex flex-col"><span className="text-headline-sm font-headline font-bold tracking-tight leading-none inline-flex items-center gap-1.5"><span className="text-on-surface font-extrabold">KARKA</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary font-bold">NEXUS</span></span><span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary mt-1">AI &amp; TECH ACADEMY</span></div></div></div><p className="text-body-sm text-on-surface-variant">The next-generation technical academy and AI-powered intelligence platform building elite engineers for tomorrow's technological landscape.</p></div><div className="lg:col-span-2"><h4 className="text-label-lg text-on-surface mb-4">Quick Links</h4><ul className="space-y-2 text-body-sm text-on-surface-variant"><li className=""><a className="hover:text-primary transition-colors" data-path="programs" href="#programs">Programs</a></li><li className=""><a className="hover:text-primary transition-colors" data-path="projects" href="#projects">Projects</a></li><li className=""><a className="hover:text-primary transition-colors" data-path="why-karka" href="#why-karka">Why Karka</a></li><li className=""><a className="hover:text-primary transition-colors" data-path="placements" href="#placements">Placements</a></li></ul></div><div className="lg:col-span-2"><h4 className="text-label-lg text-on-surface mb-4">Resources</h4><ul className="space-y-2 text-body-sm text-on-surface-variant"><li className=""><a className="hover:text-primary transition-colors" data-path="faqs" href="#faqs">FAQs</a></li><li className=""><a className="hover:text-primary transition-colors" data-path="explore-programs" href="#programs">Explore Curriculum</a></li><li className=""><a className="hover:text-primary transition-colors" data-path="get-started" href="#">Student Portal</a></li></ul></div><div className="lg:col-span-2"><h4 className="text-label-lg text-on-surface mb-4">Academy HQ</h4><ul className="space-y-3 text-body-sm text-on-surface-variant"><li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">location_on</span><span className="">Nagercoil, Tamil Nadu, India</span></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">call</span><a className="hover:text-tertiary transition-colors" href="tel:+919487530243">+91 94875 30243</a></li></ul></div><div className="lg:col-span-2"><h4 className="text-label-lg text-on-surface mb-4">Connect</h4><div className="flex gap-space-md text-on-surface-variant"><a className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:text-primary hover:bg-surface-bright transition-all" href="#"><span className="material-symbols-outlined text-[20px]">code</span></a><a className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:text-primary hover:bg-surface-bright transition-all" href="#"><span className="material-symbols-outlined text-[20px]">terminal</span></a><a className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center hover:text-primary hover:bg-surface-bright transition-all" href="#"><span className="material-symbols-outlined text-[20px]">forum</span></a></div></div></div><div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-surface-variant/20 flex flex-col sm:flex-row items-center justify-between text-body-sm text-on-surface-variant"><p className="">© 2024 Karka Nexus. All rights reserved.</p><div className="flex gap-6 mt-4 sm:mt-0"><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></div></div></footer>


    </div>
  );
}
