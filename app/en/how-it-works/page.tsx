// app/en/how-it-works/page.tsx

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero / Breadcrumb */}
      <section className="relative px-6 py-20 md:py-24 border-b border-slate-100/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.20), transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto">
          <div className="text-xs md:text-sm text-slate-300/80 mb-4 flex flex-wrap gap-2">
            <Link
              href="/en"
              className="underline underline-offset-2 hover:opacity-80"
            >
              LUMA Home
            </Link>
            <span>›</span>
            <span>How LUMA Works</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            How LUMA works (step by step)
          </h1>

          <p className="text-base md:text-lg text-slate-200/90 max-w-3xl">
            LUMA is designed to be simple enough to explain to a friend in five
            minutes, and strong enough to support real collaboration over
            months and years. This page walks you through the core mechanics.
          </p>
        </div>
      </section>

      {/* Big picture */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            The big picture in one view
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            At its heart, LUMA is a{" "}
            <strong>mutual-credit ledger of time and presence</strong>. Instead
            of asking “How much money can I charge?”, we start from “How much
            care, focus, and skill is being shared?” and track that using LUMA
            as a symbolic unit.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5">
              <h3 className="font-semibold mb-2">LUMA Lane</h3>
              <p className="text-sm text-slate-200/90 mb-3">
                The non-monetary lane. Here we track LUMA balances (
                <strong>+LUMA</strong> when you give, <strong>−LUMA</strong>{" "}
                when you receive). No money moves; we&apos;re just keeping a
                gentle tally of give/receive across time.
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-slate-300/90 space-y-1">
                <li>Symbolic unit, not a currency.</li>
                <li>Used to record reciprocity, not to speculate.</li>
                <li>Backed by trust and community, not banks.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5">
              <h3 className="font-semibold mb-2">Fiat Lane (optional)</h3>
              <p className="text-sm text-slate-200/90 mb-3">
                When people need or prefer money in a given exchange, they can
                still use regular payment tools (e.g. bank transfer, Stripe,
                PayPal). LUMA does not hold funds or act as a bank; it simply
                records the non-monetary side of the relationship.
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-slate-300/90 space-y-1">
                <li>Each member chooses how much to keep in fiat.</li>
                <li>
                  Mixed-light contracts (part LUMA, part money) are possible.
                </li>
                <li>
                  The system stays simple and legally lightweight by not being a
                  custodian.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Light Contract flow */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            The core unit: a Light Contract
          </h2>

          <p className="text-slate-200/90 max-w-3xl mb-6">
            A <strong>Light Contract</strong> is a simple, voluntary agreement
            between two or more people. It doesn&apos;t need legal language; it
            needs clarity and consent. Think of it as “we put into words what
            we&apos;re doing for each other.”
          </p>

          <ol className="space-y-4">
            <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-1">1. Name the exchange</h3>
              <p className="text-sm text-slate-200/90">
                What is being shared? For example: “4 QHHT practice sessions,”
                “Branding package for your business,” or “Hosting 3 community
                circles in my space.”
              </p>
            </li>

            <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-1">
                2. Agree the scope and timeline
              </h3>
              <p className="text-sm text-slate-200/90">
                Clarify what&apos;s included, what&apos;s not, and over what
                period of time. This can be a couple of bullet points or a
                short paragraph — enough so everyone feels anchored.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-1">
                3. Attach a LUMA amount (and money if needed)
              </h3>
              <p className="text-sm text-slate-200/90">
                Using the baseline of <strong>1 LUMA ≈ 1 minute</strong> of
                present, loving service, both sides agree on a LUMA value (and,
                optionally, any money that will also change hands).
              </p>
            </li>

            <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
              <h3 className="font-semibold mb-1">4. Record completion</h3>
              <p className="text-sm text-slate-200/90">
                When the exchange is complete, the giver receives{" "}
                <strong>+LUMA</strong>, the receiver <strong>−LUMA</strong>.
                Over time, this creates a living map of contribution and
                support across the community.
              </p>
            </li>
          </ol>

          <p className="mt-6 text-xs md:text-sm text-slate-300/90 max-w-3xl">
            LUMA is <strong>not money</strong>, not pegged to any currency, and
            not redeemable for cash by the platform. It exists to honour
            reciprocity and make invisible support visible, not to introduce a
            new investment asset.
          </p>
        </div>
      </section>

      {/* Example story */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            A simple example: three people, many wins
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            Imagine three Luminaries: Ana (healer), Leo (designer), and Fanny
            (holistic financial coach).
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Step 1 — Healing</h3>
              <p>
                Ana gives Leo a series of energy sessions worth{" "}
                <strong>180 LUMA</strong> (about 3 hours of deep work). Leo
                receives support, Ana receives +180 LUMA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Step 2 — Branding</h3>
              <p>
                Later, Ana needs a full brand refresh. Leo offers a package
                valued at <strong>600 LUMA</strong>. Ana uses her previously
                earned LUMA plus some additional capacity, and now Leo holds
                more +LUMA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Step 3 — Finance</h3>
              <p>
                Fanny helps both of them review 10 years of taxes and set up a
                simple, holistic money system in their lives. She receives LUMA
                from each, plus some fiat for governmental work. Everyone&apos;s
                life gets lighter.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300/90 max-w-3xl">
            No one needed to come up with all the cash at once. Support moved
            where it was needed, and LUMA kept a soft, visible record of who
            has poured into the field — without turning their relationships into
            invoices.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-t border-slate-100/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Who LUMA is especially for
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <ul className="list-disc list-inside space-y-2">
                <li>Healers, coaches, facilitators, and guides.</li>
                <li>Designers, developers, and creative technologists.</li>
                <li>People holding space for community — circles, hubs, events.</li>
                <li>
                  Small businesses and projects that want to weave more reciprocity
                  into their ecosystem.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <p className="mb-2 font-semibold">LUMA is not for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>High-frequency trading or speculative investing.</li>
                <li>People looking for legal/financial guarantees or returns.</li>
                <li>Replacing your local currency or tax obligations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Back */}
      <section className="px-6 py-12 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              Ready to experience LUMA, not just understand it?
            </h2>
            <p className="text-sm text-slate-200/90 max-w-md">
              Join the early Luminary circle and help us test, refine, and
              embody this living economy in real life.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/en#join"
              className="rounded-full px-6 py-3 text-sm border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition"
            >
              Join the Early Circle
            </Link>
            <Link
              href="/en"
              className="rounded-full px-6 py-3 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
            >
              Back to LUMA Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
