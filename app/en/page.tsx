// app/en/page.tsx

import Link from "next/link";

export default function LumaHomePageEn() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-24 border-b border-slate-100/10">
        {/* Ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.24), transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-slate-300/80 mb-3">
            Toronto · Global · Pre-release field
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            LUMA — A Living Economy of Light
          </h1>

          <p className="text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto mb-8">
            A community-powered way to exchange services, care, and creativity
            using a symbolic unit of time instead of money — so we can honour
            reciprocity without turning everything into a bill.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <Link
              href="/en/join"
              className="rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition font-medium"
            >
              Join the Early Circle
            </Link>

            <Link
              href="/en/how-it-works"
              className="rounded-full px-6 py-3 text-sm md:text-base border border-slate-100/25 hover:bg-slate-100/5 transition"
            >
              Understand How LUMA Works
            </Link>
          </div>

          <p className="text-xs md:text-sm text-slate-300/80">
            Official home of the LUMA Economy · Currently in early co-creation
            with a small circle of Luminaries.
          </p>
        </div>
      </section>

      {/* What is LUMA */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            What is LUMA?
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            LUMA is a <strong>living economy of light</strong> where people
            exchange value through services, aligned offerings, and simple
            “Light Contracts.” Instead of pricing everything only in dollars, we
            track reciprocity using a symbolic unit of time and presence we call{" "}
            <strong>LUMA</strong>.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">LUMA as frequency</h3>
              <p>
                A reminder that what we&apos;re really exchanging is{" "}
                <em>attention, care, and presence</em>. LUMA honours the energy
                behind the action, not just the outcome.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">LUMA as community</h3>
              <p>
                A network of humans, circles, and projects who want to weave
                more reciprocity, trust, and honesty into how they work and
                support each other.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">LUMA as a system</h3>
              <p>
                A mutual-credit ledger of time and presence, with simple roles
                and agreements. Built to stay lightweight, human, and
                legally-simple, not to become another heavy financial product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Why LUMA, and why now?
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            Many of us feel that the old money system doesn&apos;t fully match
            how our hearts want to give and receive. We see people over-giving,
            under-charging, burning out, or feeling invisible — especially in
            healing, creative, and community work.
          </p>

          <p className="text-slate-200/90 max-w-3xl">
            LUMA doesn&apos;t try to replace local currencies or solve
            everything. It simply offers a{" "}
            <strong>second layer of recognition</strong> — a way to say “this
            mattered” when money is too tight, too slow, or too small to hold
            the whole story.
          </p>
        </div>
      </section>

      {/* How it works at a glance */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                How LUMA works, in one glance
              </h2>
              <p className="text-slate-200/90 max-w-3xl">
                Underneath everything is a simple idea:{" "}
                <strong>1 LUMA ≈ 1 minute</strong> of present, loving service.
                LUMA is not money; it&apos;s a soft record of who has poured
                into the field.
              </p>
            </div>

            <Link
              href="/en/how-it-works"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
            >
              See the full flow
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-200/90">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4">
              <h3 className="font-semibold mb-1">1 · Name the exchange</h3>
              <p>Two or more people agree what they&apos;re doing together.</p>
            </div>
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4">
              <h3 className="font-semibold mb-1">2 · Set a Light Contract</h3>
              <p>
                They write a short, clear agreement and attach a LUMA amount
                (and any fiat if needed).
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4">
              <h3 className="font-semibold mb-1">3 · Do the work</h3>
              <p>Sessions, design, hosting, support – whatever is being shared.</p>
            </div>
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4">
              <h3 className="font-semibold mb-1">4 · Record completion</h3>
              <p>
                The giver receives +LUMA, the receiver −LUMA. Over time, a map
                of reciprocity appears.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases teaser */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                A few ways people might use LUMA
              </h2>
              <p className="text-slate-200/90 max-w-3xl">
                These are not promises, just examples. LUMA becomes real when
                real humans use it in ways that feel honest and alive.
              </p>
            </div>

            <Link
              href="/en/use-cases"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
            >
              Explore more use cases
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-200/90">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-2">
                Healers, coaches &amp; guides
              </h3>
              <p>
                Blend money and LUMA in your sessions so people in transition
                can still receive support, while your contribution is honoured.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-2">
                Designers, developers &amp; creatives
              </h3>
              <p>
                Co-create brands, websites, content, and systems for projects
                you believe in, without needing all the cash upfront.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-2">
                Circles, hubs &amp; community spaces
              </h3>
              <p>
                Track the invisible labour of hosting, coordination, and care so
                your community doesn&apos;t quietly burn out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join section with anchor */}
      <section id="join" className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Join the early LUMA circle
            </h2>
            <p className="text-slate-200/90">
              We&apos;re in the early, tender phase of this experiment. Before
              any big launch, we&apos;re gathering a small group of Luminaries
              to test LUMA gently in real life — sessions, circles, projects,
              and day-to-day exchanges.
            </p>
            <p className="text-slate-200/90">
              If you feel resonance — even if you&apos;re not sure how you&apos;d
              participate yet — you&apos;re welcome to step closer.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/en/join"
                className="rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition font-medium"
              >
                I&apos;d like to join / stay close
              </Link>
              <Link
                href="/en/whitepaper"
                className="rounded-full px-6 py-3 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
              >
                Read the whitepaper overview
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-xs md:text-sm text-slate-200/90 space-y-2">
            <p className="font-semibold">
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
    </main>
  );
}
