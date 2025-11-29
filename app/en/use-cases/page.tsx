// app/en/use-cases/page.tsx

import Link from "next/link";

export default function UseCasesPage() {
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
            <span>Use Cases</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            How people can actually use LUMA
          </h1>

          <p className="text-base md:text-lg text-slate-200/90 max-w-3xl">
            LUMA is meant to live in **real** lives — in sessions, projects,
            circles, and neighborhoods. These examples show how different people
            and groups can weave LUMA into what they already do.
          </p>
        </div>
      </section>

      {/* Solo practitioners */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            1. Solo practitioners and small studios
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            You&apos;re a healer, coach, designer, developer, teacher, artist,
            or space-holder. You already charge in money — but there are people
            you&apos;d love to help who can&apos;t always pay full price in
            cash.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Partial LUMA sessions</h3>
              <p>
                You keep your normal prices, but allow a portion (say 20–40%)
                of your work to be paid in LUMA. The rest is paid in your local
                currency as usual.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Sliding-scale support</h3>
              <p>
                Clients who are in transition (new business, healing, burnout)
                can use LUMA to access you now, while planning to give back more
                to the field later when they are stronger.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Collaborative packages</h3>
              <p>
                You join forces with another Luminary (e.g. healer + designer +
                finance coach) and offer a combined package, each receiving
                LUMA + money for your part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circles & hubs */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            2. Circles, hubs, and community spaces
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            You host gatherings, circles, or events — maybe from your living
            room, a rented studio, or a shared venue. You want to recognize the
            invisible work that makes community possible.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Hosting & logistics</h3>
              <p>
                The host receives LUMA for opening their space, handling
                logistics, and holding the field. Attendees might contribute a
                mix of money (to cover hard costs) and LUMA (for community
                value).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Roles behind the scenes</h3>
              <p>
                People who help with sound, tech setup, communications,
                co-facilitation, or translation can receive LUMA, even if
                they&apos;re not &quot;on the invoice&quot;.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90 md:col-span-2">
              <h3 className="font-semibold mb-2">Multi-circle ecosystems</h3>
              <p>
                Over time, multiple circles in the same city or online network
                can share members and support. A person who gives a lot of
                energy in a women&apos;s circle might receive support from a
                tech circle or a finance group, using LUMA as the bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & micro-businesses */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            3. Projects and micro-businesses
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            You&apos;re building something that needs many skills: design,
            copy, tech, operations, community management, finance, etc. You
            don&apos;t want to burn through cash before the project even
            launches.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Start with a LUMA core team</h3>
              <p>
                Early collaborators agree to contribute a set number of hours
                per month in exchange for LUMA, plus clear agreements about
                when/if money or equity may enter later.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Prototype without debt</h3>
              <p>
                You can test an offer, create a landing page, or run a pilot
                program with LUMA as the main reciprocity unit, reducing the
                need to borrow money just to begin.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Hybrid launches</h3>
              <p>
                When the project begins to earn fiat, part of the revenue can
                be used to repay earlier contributions — not directly as LUMA
                &quot;redemption,&quot; but as a thank-you decided by the
                humans involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & retreats */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            4. Events, retreats, and intensives
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            Retreats and events involve many moving pieces — facilitation,
            logistics, food, space, transportation, marketing, and more. LUMA
            helps track the real human effort behind the scenes.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Before the event</h3>
              <p>
                Organizers, designers, marketers, and support staff can receive
                LUMA for time spent planning, promoting, and preparing,
                alongside any money that is possible to pay.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">During and after</h3>
              <p>
                Facilitators and volunteers receive LUMA for holding space and
                caring for participants. After the event, LUMA can connect
                people into ongoing support circles instead of dropping contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital collaborations */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            5. Remote & digital collaborations
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            Many of the people who will use LUMA will never meet physically.
            They&apos;ll collaborate across cities and countries, sharing
            knowledge, design, and tech.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Online task swaps</h3>
              <p>
                &quot;I help you set up your newsletter system, you help me with
                Spanish copywriting&quot; — tracked in LUMA so we don&apos;t
                lose the thread of who contributed what.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Study & practice groups</h3>
              <p>
                People meet weekly to learn a tool, language, or modality.
                Facilitators receive LUMA; participants may earn LUMA by
                co-teaching or supporting others.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Open-source style projects</h3>
              <p>
                Contributors to a shared resource (content library, tech tool,
                curriculum) earn LUMA as a recognition of their time and care,
                independent of any future monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency / culture */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Underneath all these examples: frequency and culture
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            LUMA is not only a ledger — it&apos;s a culture of{" "}
            <strong>honouring, reciprocity, and sovereignty</strong>. Every use
            case is an invitation to ask:
          </p>

          <ul className="list-disc list-inside text-sm text-slate-200/90 space-y-2 max-w-3xl">
            <li>How can we make the invisible work visible?</li>
            <li>How can we allow generosity without burnout?</li>
            <li>How can we give and receive from love, not fear?</li>
          </ul>

          <p className="text-sm text-slate-300/90 max-w-3xl">
            The specific numbers and contracts will evolve. The core intention
            stays: to build a living field where humans feel{" "}
            <em>resourced, seen, and connected</em>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              See the mechanics or jump in with us
            </h2>
            <p className="text-sm text-slate-200/90 max-w-md">
              You can read more about the underlying system, or simply join the
              early circle and we&apos;ll explore concrete use cases together.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/en/how-it-works"
              className="rounded-full px-6 py-3 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
            >
              How LUMA Works
            </Link>
            <Link
              href="/en#join"
              className="rounded-full px-6 py-3 text-sm border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition"
            >
              Join the Early Circle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
