// app/en/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function LumaHomePageEn() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-yellow-500/30">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative px-6 py-24 md:py-32 border-b border-white/5 overflow-hidden">
        
        {/* Ambient Breathing Light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 animate-pulse"
          style={{
            background:
              "radial-gradient(circle at 50% -10%, rgba(250,204,21,0.15), transparent 70%)",
            animationDuration: "4s", // Inline style to slow it down slightly if tailwind config isn't tweaked
          }}
        />

        {/* Subtle Texture (Optional - adds tactile feel) */}
        <div className="absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Top Metadata */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-slate-500 font-medium">
              Toronto · Global · Pre-release field
            </p>

            <p className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] text-slate-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
              Mutual-credit · Community economy · Human-paced
            </p>
          </div>

          {/* Sigil & Title */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative">
              {/* Glow behind sigil */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"></div>
              <Image
                src="/luma-sigil.svg"
                alt="LUMA sigil"
                width={72}
                height={72}
                className="relative drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] opacity-95"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 pb-2">
              LUMA — A Living Economy of Light
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A community-powered way to exchange services, care, and creativity
            using a symbolic unit of time alongside money — so we can honour
            reciprocity without turning everything into a bill.
          </p>

          {/* Glass Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/en/join"
              className="group relative rounded-full px-8 py-3.5 text-sm md:text-base bg-yellow-400/10 border border-yellow-400/40 text-yellow-100 hover:bg-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 shadow-[0_0_20px_-10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_-5px_rgba(250,204,21,0.5)]"
            >
              <span className="relative z-10 font-medium tracking-wide">Join the Early Circle</span>
            </Link>

            <Link
              href="/en/how-it-works"
              className="rounded-full px-8 py-3.5 text-sm md:text-base border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              See how it works
            </Link>
          </div>

          <p className="text-xs text-slate-600 max-w-md mx-auto italic">
            Official home of the LUMA Economy. <br className="md:hidden"/>
            Currently in early co-creation with a small circle of Luminaries.
          </p>
        </div>
      </section>

      {/* =========================================
          WHAT IS LUMA?
      ========================================= */}
      <section id="what-is-luma" className="px-6 py-20 relative">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-100">
              What is LUMA?
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              LUMA is a <strong className="text-slate-200 font-medium">living economy of light</strong> where people
              exchange value through services, aligned offerings, and simple
              “Light Contracts.” Instead of pricing everything only in dollars, we
              track reciprocity using a symbolic unit of time and presence we call{" "}
              <strong className="text-yellow-200/90 font-medium">LUMA</strong>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/90 transition">LUMA as frequency</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A reminder that what we&apos;re really exchanging is{" "}
                <em className="text-slate-300 not-italic">attention, care, and presence</em>. LUMA honours the energy
                behind the action, not just the outcome.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/90 transition">LUMA as community</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A network of humans, circles, and projects who want to weave
                more reciprocity, trust, and honesty into how they work and
                support each other.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/90 transition">LUMA as a system</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A mutual-credit ledger of time and presence, with simple roles
                and agreements. Built to stay lightweight, human, and
                legally-simple, not to become another heavy financial product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY NOW?
      ========================================= */}
      <section
        id="why-now"
        className="px-6 py-20 bg-gradient-to-b from-white/[0.02] to-transparent border-y border-white/5"
      >
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-200">
            Why LUMA, and why now?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p className="text-slate-400 leading-relaxed">
              Many of us feel that the old money system doesn&apos;t fully match
              how our hearts want to give and receive. We see people over-giving,
              under-charging, burning out, or feeling invisible — especially in
              healing, creative, and community work.
            </p>

            <p className="text-slate-400 leading-relaxed">
              LUMA doesn&apos;t try to replace local currencies or solve
              everything. It simply offers a{" "}
              <strong className="text-slate-200 font-medium">gentle second layer of recognition</strong> — a way to say
              “this mattered” when money is too tight, too slow, or too small to
              hold the whole story.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          HOW IT WORKS
      ========================================= */}
      <section id="how-it-works-summary" className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-serif text-slate-200 mb-4">
                How LUMA works, in one glance
              </h2>
              <p className="text-slate-400">
                Underneath everything is a simple idea:{" "}
                <strong className="text-yellow-400/80 font-normal">1 LUMA ≈ 1 minute</strong> of present, loving service.
                LUMA is not money; it&apos;s a soft record of who has poured
                into the field.
              </p>
            </div>

            <Link
              href="/en/how-it-works"
              aria-label="Read the full explanation of how LUMA works"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              See the full flow →
            </Link>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: "Name the exchange", desc: "Two or more people agree what they're doing together." },
              { title: "Set a Light Contract", desc: "They write a short, clear agreement and attach a LUMA amount." },
              { title: "Do the work", desc: "Sessions, design, hosting, support – whatever is being shared." },
              { title: "Record completion", desc: "The giver receives +LUMA, the receiver −LUMA. Reciprocity maps appear." }
            ].map((step, index) => (
              <div key={index} className="relative rounded-2xl border border-white/5 bg-[#0B0F1F] p-5 hover:border-white/10 transition">
                <span className="absolute top-5 right-5 text-xs font-serif text-white/10 text-4xl leading-none -z-0">
                  {index + 1}
                </span>
                <h3 className="font-serif text-lg text-slate-200 mb-2 relative z-10">{index + 1} · {step.title}</h3>
                <p className="text-sm text-slate-500 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          USE CASES
      ========================================= */}
      <section
        id="use-cases-teaser"
        className="px-6 py-20 bg-white/[0.02] border-y border-white/5"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-slate-200 mb-3">
                A few ways people might use LUMA
              </h2>
              <p className="text-slate-400 max-w-3xl">
                These are not promises, just examples. LUMA becomes real when
                real humans use it in ways that feel honest and alive.
              </p>
            </div>

            <Link
              href="/en/use-cases"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              Explore use cases
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-white/5 bg-[#020617] p-6">
              <h3 className="font-serif text-lg text-slate-200 mb-3">
                Healers, coaches &amp; guides
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Blend money and LUMA in your sessions so people in transition
                can still receive support, while your contribution is honoured.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#020617] p-6">
              <h3 className="font-serif text-lg text-slate-200 mb-3">
                Designers &amp; creatives
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Co-create brands, websites, content, and systems for projects
                you believe in, without needing all the cash upfront.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#020617] p-6">
              <h3 className="font-serif text-lg text-slate-200 mb-3">
                Circles &amp; communities
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Track the invisible labour of hosting, coordination, and care so
                your community doesn&apos;t quietly burn out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          JOIN / CTA
      ========================================= */}
      <section id="join" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[2fr_1.2fr] items-start">
          
          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-100">
              Join the early LUMA circle
            </h2>
            <div className="space-y-4 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                We&apos;re in the early, tender phase of this experiment. Before
                any big launch, we&apos;re gathering a small group of Luminaries
                to test LUMA gently in real life — sessions, circles, projects,
                and day-to-day exchanges.
              </p>
              <p>
                If you feel resonance — even if you&apos;re not sure how you&apos;d
                participate yet — you&apos;re welcome to step closer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/en/join"
                className="rounded-full px-8 py-4 text-sm md:text-base bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition font-medium shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)]"
              >
                I&apos;d like to join / stay close
              </Link>
              <Link
                href="/en/whitepaper"
                className="rounded-full px-8 py-4 text-sm border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition"
              >
                Read the whitepaper
              </Link>
            </div>
          </div>

          {/* Disclaimer Side */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 text-xs md:text-sm text-slate-400 space-y-4 backdrop-blur-md">
            <p className="font-serif text-slate-200 text-base">
              A note about money, risk, and safety
            </p>
            <p>
              LUMA is not a bank, not an investment product, and not a promise
              of returns. It&apos;s a symbolic mutual-credit system and a
              cultural field. You remain responsible for your own financial and
              legal decisions.
            </p>
            <p>
              Any future technical or legal implementations will be designed
              carefully, in conversation with professionals and the community.
              For now, we&apos;re focused on living the values in small, honest
              ways.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER NOTE
      ========================================= */}
      <footer className="px-6 pb-12">
        <div className="max-w-5xl mx-auto text-center border-t border-white/5 pt-10">
          <p className="text-[11px] md:text-xs text-slate-500 tracking-wide uppercase">
            LUMA is an evolving field. This page reflects our understanding right
            now, not the final form. Thank you for reading with an open heart.
          </p>
        </div>
      </footer>
    </main>
  );
}