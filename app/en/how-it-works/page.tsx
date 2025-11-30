// app/en/how-it-works/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    // CHANGE: Main background uses the same deep void gradient as Home
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#020617] text-slate-200 selection:bg-yellow-500/30 relative overflow-hidden">
      
      {/* Background Star Drift (Consistent with Home) */}
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
          {/* Breadcrumb */}
          <div className="text-xs tracking-widest uppercase text-slate-500 mb-6 flex items-center justify-center md:justify-start gap-3">
            <Link
              href="/en"
              className="hover:text-yellow-400 transition-colors duration-300 border-b border-transparent hover:border-yellow-400/50 pb-0.5"
            >
              LUMA Home
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-yellow-400/60">How it works</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
            The Flow of Light
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            LUMA is designed to be simple enough to explain to a friend in five
            minutes, and strong enough to support real collaboration over
            months and years. Here is the mechanics of the heart.
          </p>
        </div>
      </section>

      {/* =========================================
          THE BIG PICTURE
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-slate-200">
              The big picture in one view
            </h2>
            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
              At its heart, LUMA is a{" "}
              <strong className="text-white font-medium">mutual-credit ledger of time and presence</strong>. Instead
              of asking “How much money can I charge?”, we start from “How much
              care, focus, and skill is being shared?” and track that using LUMA
              as a symbolic unit.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* LUMA LANE */}
            <div className="relative group rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-8 backdrop-blur-sm hover:bg-yellow-500/[0.05] transition duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition duration-500">
                 <Image src="/luma-sigil.svg" width={40} height={40} alt="" />
              </div>
              
              <h3 className="font-serif text-2xl text-yellow-100 mb-4">LUMA Lane</h3>
              <p className="text-yellow-100/70 mb-6 leading-relaxed">
                The non-monetary lane. Here we track LUMA balances (
                <strong className="text-yellow-400">+LUMA</strong> when you give, <strong className="text-yellow-400">−LUMA</strong>{" "}
                when you receive). No money moves; we&apos;re just keeping a
                gentle tally of give/receive across time.
              </p>
              <ul className="space-y-3 text-sm text-yellow-100/60">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 mt-1.5 shrink-0"></span>
                  Symbolic unit, not a currency.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 mt-1.5 shrink-0"></span>
                  Used to record reciprocity, not to speculate.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 mt-1.5 shrink-0"></span>
                  Backed by trust and community, not banks.
                </li>
              </ul>
            </div>

            {/* FIAT LANE */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-2xl text-slate-200 mb-4">Fiat Lane (optional)</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                When people need or prefer money in a given exchange, they can
                still use regular payment tools (e.g. bank transfer, Stripe). 
                LUMA simply records the non-monetary side of the relationship.
              </p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1.5 shrink-0"></span>
                  Each member chooses how much to keep in fiat.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1.5 shrink-0"></span>
                  Mixed-light contracts (part LUMA, part money) are possible.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1.5 shrink-0"></span>
                  Stays simple and legally lightweight.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LIGHT CONTRACT FLOW
      ========================================= */}
      <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-slate-200 mb-6">
              The core unit: a Light Contract
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A <strong>Light Contract</strong> is a simple, voluntary agreement. 
              It doesn&apos;t need legal language; it needs clarity and consent. 
              Think of it as “putting our intention into words.”
            </p>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="group rounded-2xl border border-white/5 bg-[#0B0F1F] p-6 md:p-8 transition hover:border-white/10">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="font-serif text-5xl text-white/5 group-hover:text-yellow-500/20 transition duration-500 leading-none shrink-0">01</span>
                <div>
                  <h3 className="font-serif text-xl text-slate-200 mb-2">Name the exchange</h3>
                  <p className="text-slate-400 leading-relaxed">
                    What is being shared? For example: “4 QHHT practice sessions,”
                    “Branding package for your business,” or “Hosting 3 community
                    circles in my space.”
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group rounded-2xl border border-white/5 bg-[#0B0F1F] p-6 md:p-8 transition hover:border-white/10">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="font-serif text-5xl text-white/5 group-hover:text-yellow-500/20 transition duration-500 leading-none shrink-0">02</span>
                <div>
                  <h3 className="font-serif text-xl text-slate-200 mb-2">Agree the scope and timeline</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Clarify what&apos;s included, what&apos;s not, and over what
                    period of time. This can be a couple of bullet points or a
                    short paragraph — enough so everyone feels anchored.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group rounded-2xl border border-white/5 bg-[#0B0F1F] p-6 md:p-8 transition hover:border-white/10">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="font-serif text-5xl text-white/5 group-hover:text-yellow-500/20 transition duration-500 leading-none shrink-0">03</span>
                <div>
                  <h3 className="font-serif text-xl text-slate-200 mb-2">Attach a LUMA amount</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Using the baseline of <strong className="text-yellow-400 font-medium">1 LUMA ≈ 1 minute</strong> of
                    present, loving service, both sides agree on a LUMA value (and,
                    optionally, any money that will also change hands).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group rounded-2xl border border-white/5 bg-[#0B0F1F] p-6 md:p-8 transition hover:border-white/10">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <span className="font-serif text-5xl text-white/5 group-hover:text-yellow-500/20 transition duration-500 leading-none shrink-0">04</span>
                <div>
                  <h3 className="font-serif text-xl text-slate-200 mb-2">Record completion</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When the exchange is complete, the giver receives{" "}
                    <strong className="text-green-400/80 font-medium">+LUMA</strong>, the receiver <strong className="text-red-400/80 font-medium">−LUMA</strong>.
                    Over time, this creates a living map of contribution and
                    support across the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="inline-block rounded-full border border-white/5 bg-white/[0.02] px-6 py-2 text-xs md:text-sm text-slate-500">
              LUMA is <strong>not money</strong> and not redeemable for cash. It honours reciprocity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          EXAMPLE STORY
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-4">
             <h2 className="text-3xl font-serif text-slate-200">
              A simple example: three people, many wins
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Imagine three Luminaries: <span className="text-slate-200">Ana</span> (healer), <span className="text-slate-200">Leo</span> (designer), and <span className="text-slate-200">Fanny</span> (holistic financial coach).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-yellow-200/80 mb-4">1 · Healing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ana gives Leo a series of energy sessions worth{" "}
                <strong className="text-slate-200">180 LUMA</strong> (about 3 hours of deep work). Leo
                receives support, Ana receives +180 LUMA.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-yellow-200/80 mb-4">2 · Branding</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Later, Ana needs a full brand refresh. Leo offers a package
                valued at <strong className="text-slate-200">600 LUMA</strong>. Ana uses her previously
                earned LUMA plus some additional capacity, and now Leo holds
                more +LUMA.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-yellow-200/80 mb-4">3 · Finance</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fanny helps both of them review taxes. She receives LUMA
                from each, plus some fiat for governmental work. Everyone&apos;s
                life gets lighter.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 max-w-3xl italic">
            No one needed to come up with all the cash at once. Support moved
            where it was needed, and LUMA kept a soft, visible record of who
            has poured into the field — without turning their relationships into
            invoices.
          </p>
        </div>
      </section>

      {/* =========================================
          WHO IT IS FOR
      ========================================= */}
      <section className="px-6 py-20 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-200 mb-8">
            Who LUMA is especially for
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-[#020617] p-8">
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-yellow-400">✦</span>
                  Healers, coaches, facilitators, and guides.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✦</span>
                  Designers, developers, and creative technologists.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✦</span>
                  People holding space for community — circles, hubs, events.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✦</span>
                  Small businesses and projects that want to weave more reciprocity.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#020617] p-8 opacity-70">
              <p className="mb-4 font-serif text-slate-400 text-lg">LUMA is not for:</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex gap-3">
                  <span>✕</span>
                  High-frequency trading or speculative investing.
                </li>
                <li className="flex gap-3">
                  <span>✕</span>
                  People looking for legal/financial guarantees or returns.
                </li>
                <li className="flex gap-3">
                  <span>✕</span>
                  Replacing your local currency or tax obligations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA + BACK
      ========================================= */}
      <section className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-yellow-500/20 bg-yellow-400/[0.03] p-8 md:p-12 flex flex-col md:flex-row items-center md:justify-between gap-8 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-yellow-100 mb-2">
              Ready to experience LUMA?
            </h2>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Join the early Luminary circle and help us test, refine, and
              embody this living economy in real life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/en/join"
              className="group relative rounded-full px-8 py-3.5 text-center bg-yellow-400/10 border border-yellow-400/40 text-yellow-100 hover:bg-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 shadow-[0_0_20px_-10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_35px_-5px_rgba(250,204,21,0.5)]"
            >
              <span className="font-medium tracking-wide">Join the Early Circle</span>
            </Link>
            <Link
              href="/en"
              className="rounded-full px-8 py-3.5 text-center border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white transition duration-300"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}