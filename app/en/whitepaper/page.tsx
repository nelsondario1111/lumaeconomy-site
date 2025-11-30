// app/en/whitepaper/page.tsx

import Link from "next/link";

export default function WhitepaperPage() {
  return (
    // CHANGE: Main background uses the deep void gradient
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#020617] text-slate-200 selection:bg-yellow-500/30 relative overflow-hidden">
      
      {/* Background Star Drift */}
      <div className="pointer-events-none absolute inset-0 -z-20 mix-blend-overlay opacity-[0.15] animate-drift bg-[url('/noise.png')]"></div>

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative px-6 py-24 md:py-32 border-b border-white/5">
        
        {/* Breathing Light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.15), transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="text-xs tracking-widest uppercase text-slate-500 mb-6 flex items-center justify-center md:justify-start gap-3">
            <Link
              href="/en"
              className="hover:text-yellow-400 transition-colors duration-300 border-b border-transparent hover:border-yellow-400/50 pb-0.5"
            >
              LUMA Home
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-yellow-400/60">Whitepaper</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
            The Architecture of Light
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            This page gives you a friendly overview of the{" "}
            <strong className="text-slate-200 font-medium">LUMA Whitepaper</strong> and a
            way to access the full text when you&apos;re ready to go deeper.
          </p>
        </div>
      </section>

      {/* =========================================
          WHAT IT IS / IS NOT
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif text-slate-200">
            What this whitepaper is (and is not)
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* IS */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-emerald-200/90 mb-4 flex items-center gap-2">
                <span className="text-emerald-400">✓</span> This whitepaper is:
              </h3>
              <ul className="space-y-4 text-slate-300/90 text-sm leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1.5 shrink-0"></span>
                  A living document describing the vision and mechanics of the LUMA Economy.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1.5 shrink-0"></span>
                  A bridge between metaphysics (frequency, trust) and practical design (ledgers, agreements).
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1.5 shrink-0"></span>
                  A starting point for builders, stewards, and collaborators.
                </li>
              </ul>
            </div>

            {/* IS NOT */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-rose-200/90 mb-4 flex items-center gap-2">
                <span className="text-rose-400">✕</span> This whitepaper is not:
              </h3>
              <ul className="space-y-4 text-slate-300/90 text-sm leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50 mt-1.5 shrink-0"></span>
                  Not legal, financial, or investment advice.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50 mt-1.5 shrink-0"></span>
                  Not an offer of securities or a promise of returns.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50 mt-1.5 shrink-0"></span>
                  Not a final, fixed document — it will evolve as the community does.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STRUCTURE / TOC
      ========================================= */}
      <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-4">
             <h2 className="text-3xl font-serif text-slate-200">
              High-level structure
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              The full whitepaper is written for humans first — clear language,
              concrete examples, and enough detail for serious collaborators. The
              current pre-release version covers:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8">
              <h3 className="font-serif text-xl text-slate-200 mb-6 border-b border-white/5 pb-4">Core sections</h3>
              <ul className="space-y-3 text-slate-400 font-light">
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">00</span> Executive Summary</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">01</span> The Moment We&apos;re In</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">02</span> What Is LUMA?</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">03</span> Design Principles &amp; Values</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">04</span> LUMA Lane &amp; Fiat Lane</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">05</span> Light Contracts &amp; Use Cases</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 opacity-90">
              <h3 className="font-serif text-xl text-slate-200 mb-6 border-b border-white/5 pb-4">Deeper layers</h3>
              <ul className="space-y-3 text-slate-400 font-light">
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">06</span> Roles: Luminaries, Stewards, Guardians</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">07</span> Mutual Credit &amp; Ledger Design</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">08</span> Governance &amp; Safety</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">09</span> Roadmap &amp; Phases</li>
                <li className="flex gap-3"><span className="text-slate-600 font-mono text-xs pt-1">10</span> LUMA AI (Powered by Lumina)</li>
                <li className="flex gap-3 italic text-slate-500">Appendices — Glossary, Examples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHO IT IS FOR
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif text-slate-200">
            Who the whitepaper is written for
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">For caring builders</h3>
              <p className="text-slate-400 leading-relaxed">
                People who want to build with LUMA — hosts, core team members,
                circle leaders, and project founders who need to understand the
                mechanics behind the poetic language.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">For aligned partners</h3>
              <p className="text-slate-400 leading-relaxed">
                Organizations, communities, and potential collaborators who are
                exploring whether LUMA could be integrated into their existing
                ecosystem or used to seed a new one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DOWNLOAD / CTA
      ========================================= */}
      <section className="px-6 py-20 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif text-slate-200">
            Access the full whitepaper
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The current version is a living, evolving document. As the LUMA
            field grows, we&apos;ll update it with clearer diagrams, examples,
            and technical notes.
          </p>

          <div className="flex flex-col items-center gap-4 pt-4">
            <a
              href="/files/LUMA-Whitepaper-v0.2.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-8 py-4 text-base bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition duration-300 font-medium shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)] transform hover:-translate-y-0.5"
            >
              Open Full Whitepaper (PDF)
            </a>
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Pre-release draft v0.2
            </span>
          </div>

           <p className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto">
            If you&apos;re reviewing this as a potential partner or collaborator 
            and have questions, please reach out via the{" "}
            <Link href="/en/join" className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-4 hover:decoration-white transition">
              Join
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* =========================================
          FOOTER LINKS
      ========================================= */}
      <section className="px-6 py-12 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="/en"
            className="text-sm text-slate-400 hover:text-white transition duration-300"
          >
            ← Back to LUMA Home
          </Link>
          <span className="text-slate-700 hidden md:inline">|</span>
          <Link
            href="/en/how-it-works"
            className="text-sm text-slate-400 hover:text-white transition duration-300"
          >
            See How LUMA Works →
          </Link>
        </div>
      </section>
    </main>
  );
}