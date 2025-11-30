// app/en/use-cases/page.tsx

import Link from "next/link";

export default function UseCasesPage() {
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
            <span className="text-yellow-400/60">Use Cases</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
            Real life, <br className="hidden md:block" /> woven with light
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            LUMA is meant to live in **real** lives — in sessions, projects,
            circles, and neighborhoods. These examples show how different people
            and groups can weave LUMA into what they already do.
          </p>
        </div>
      </section>

      {/* =========================================
          1. SOLO PRACTITIONERS
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="font-serif text-5xl text-white/5 leading-none block mb-4">01</span>
              <h2 className="text-3xl font-serif text-slate-200 mb-4">
                Solo practitioners &amp; small studios
              </h2>
              <p className="text-slate-400 leading-relaxed">
                You&apos;re a healer, coach, designer, developer, teacher, artist,
                or space-holder. You already charge in money — but there are people
                you&apos;d love to help who can&apos;t always pay full price in
                cash.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Partial LUMA sessions</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You keep your normal prices, but allow a portion (say 20–40%)
                of your work to be paid in LUMA. The rest is paid in your local
                currency as usual.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Sliding-scale support</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clients who are in transition (new business, healing, burnout)
                can use LUMA to access you now, while planning to give back more
                to the field later when they are stronger.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Collaborative packages</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You join forces with another Luminary (e.g. healer + designer +
                finance coach) and offer a combined package, each receiving
                LUMA + money for your part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CIRCLES & HUBS
      ========================================= */}
      <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="font-serif text-5xl text-white/5 leading-none block mb-4">02</span>
              <h2 className="text-3xl font-serif text-slate-200 mb-4">
                Circles, hubs &amp; community spaces
              </h2>
              <p className="text-slate-400 leading-relaxed">
                You host gatherings, circles, or events — maybe from your living
                room, a rented studio, or a shared venue. You want to recognize the
                invisible work that makes community possible.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 transition hover:border-white/10">
              <h3 className="font-serif text-xl text-slate-200 mb-3">Hosting & logistics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                The host receives LUMA for opening their space, handling
                logistics, and holding the field. Attendees might contribute a
                mix of money (to cover hard costs) and LUMA (for community
                value).
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 transition hover:border-white/10">
              <h3 className="font-serif text-xl text-slate-200 mb-3">Roles behind the scenes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                People who help with sound, tech setup, communications,
                co-facilitation, or translation can receive LUMA, even if
                they&apos;re not &quot;on the invoice&quot;.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 transition hover:border-white/10 md:col-span-2">
              <h3 className="font-serif text-xl text-slate-200 mb-3">Multi-circle ecosystems</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Over time, multiple circles in the same city or online network
                can share members and support. A person who gives a lot of
                energy in a women&apos;s circle might receive support from a
                tech circle or a finance group, using LUMA as the bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. PROJECTS & MICRO-BUSINESSES
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="font-serif text-5xl text-white/5 leading-none block mb-4">03</span>
              <h2 className="text-3xl font-serif text-slate-200 mb-4">
                Projects &amp; micro-businesses
              </h2>
              <p className="text-slate-400 leading-relaxed">
                You&apos;re building something that needs many skills: design,
                copy, tech, operations, community management. You
                don&apos;t want to burn through cash before the project even
                launches.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">LUMA core team</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Early collaborators agree to contribute a set number of hours
                per month in exchange for LUMA, plus clear agreements about
                when/if money or equity may enter later.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Prototype without debt</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You can test an offer, create a landing page, or run a pilot
                program with LUMA as the main reciprocity unit, reducing the
                need to borrow money just to begin.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Hybrid launches</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                When the project begins to earn fiat, part of the revenue can
                be used to repay earlier contributions — not directly as LUMA
                &quot;redemption,&quot; but as a thank-you decided by the
                humans involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. EVENTS & RETREATS
      ========================================= */}
      <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="font-serif text-5xl text-white/5 leading-none block mb-4">04</span>
              <h2 className="text-3xl font-serif text-slate-200 mb-4">
                Events, retreats &amp; intensives
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Retreats and events involve many moving pieces — facilitation,
                logistics, food, space, transportation, marketing, and more. LUMA
                helps track the real human effort behind the scenes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 transition hover:border-white/10">
              <h3 className="font-serif text-xl text-slate-200 mb-3">Before the event</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Organizers, designers, marketers, and support staff can receive
                LUMA for time spent planning, promoting, and preparing,
                alongside any money that is possible to pay.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 transition hover:border-white/10">
              <h3 className="font-serif text-xl text-slate-200 mb-3">During and after</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Facilitators and volunteers receive LUMA for holding space and
                caring for participants. After the event, LUMA can connect
                people into ongoing support circles instead of dropping contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. DIGITAL COLLABS
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <span className="font-serif text-5xl text-white/5 leading-none block mb-4">05</span>
              <h2 className="text-3xl font-serif text-slate-200 mb-4">
                Remote &amp; digital collaborations
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Many of the people who will use LUMA will never meet physically.
                They&apos;ll collaborate across cities and countries, sharing
                knowledge, design, and tech.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Online task swaps</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                &quot;I help you set up your newsletter system, you help me with
                Spanish copywriting&quot; — tracked in LUMA so we don&apos;t
                lose the thread of who contributed what.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Study groups</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                People meet weekly to learn a tool, language, or modality.
                Facilitators receive LUMA; participants may earn LUMA by
                co-teaching or supporting others.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-yellow-100/90 mb-3 group-hover:text-yellow-400 transition">Open-source style</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Contributors to a shared resource (content library, tech tool,
                curriculum) earn LUMA as a recognition of their time and care,
                independent of any future monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CULTURE & FREQUENCY
      ========================================= */}
      <section className="px-6 py-24 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif text-slate-200">
            Underneath all these examples: frequency and culture
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            LUMA is not only a ledger — it&apos;s a culture of{" "}
            <strong className="text-white font-medium">honouring, reciprocity, and sovereignty</strong>. Every use
            case is an invitation to ask:
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center text-sm text-yellow-100/80">
             <div className="px-6 py-3 rounded-full border border-yellow-500/20 bg-yellow-500/[0.05]">How can we make invisible work visible?</div>
             <div className="px-6 py-3 rounded-full border border-yellow-500/20 bg-yellow-500/[0.05]">How can we allow generosity without burnout?</div>
             <div className="px-6 py-3 rounded-full border border-yellow-500/20 bg-yellow-500/[0.05]">How can we give from love, not fear?</div>
          </div>

          <p className="text-sm text-slate-500 max-w-2xl mx-auto pt-6">
            The specific numbers and contracts will evolve. The core intention
            stays: to build a living field where humans feel{" "}
            <em className="text-slate-400 not-italic">resourced, seen, and connected</em>.
          </p>
        </div>
      </section>

      {/* =========================================
          CTA + BACK
      ========================================= */}
      <section className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-yellow-500/20 bg-yellow-400/[0.03] p-8 md:p-12 flex flex-col md:flex-row items-center md:justify-between gap-8 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-yellow-100 mb-2">
              See the mechanics or jump in with us
            </h2>
            <p className="text-slate-400 max-w-md leading-relaxed">
              You can read more about the underlying system, or simply join the
              early circle and we&apos;ll explore concrete use cases together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/en/how-it-works"
              className="rounded-full px-8 py-3.5 text-center border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white transition duration-300"
            >
              How LUMA Works
            </Link>
            <Link
              href="/en/join"
              className="group relative rounded-full px-8 py-3.5 text-center bg-yellow-400/10 border border-yellow-400/40 text-yellow-100 hover:bg-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 shadow-[0_0_20px_-10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_35px_-5px_rgba(250,204,21,0.5)]"
            >
              <span className="font-medium tracking-wide">Join the Early Circle</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}