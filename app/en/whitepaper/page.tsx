// app/en/whitepaper/page.tsx

import Link from "next/link";

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero / Breadcrumb */}
      <section className="relative px-6 py-20 md:py-24 border-b border-slate-100/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.22), transparent 60%)",
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
            <span>Whitepaper</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            LUMA Whitepaper · Pre-release Overview
          </h1>

          <p className="text-base md:text-lg text-slate-200/90 max-w-3xl">
            This page gives you a friendly overview of the{" "}
            <strong>LUMA — A Living Economy of Light</strong> whitepaper and a
            way to access the full text when you&apos;re ready to go deeper.
          </p>
        </div>
      </section>

      {/* What the whitepaper is / is not */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            What this whitepaper is (and is not)
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 md:p-5 text-sm text-slate-100/90">
              <h3 className="font-semibold mb-2">This whitepaper is:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  A living document describing the vision and mechanics of the
                  LUMA Economy.
                </li>
                <li>
                  A bridge between metaphysics (frequency, trust, reciprocity)
                  and practical design (ledgers, roles, agreements).
                </li>
                <li>
                  A starting point for builders, stewards, and collaborators who
                  want to work with LUMA.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-4 md:p-5 text-sm text-slate-100/90">
              <h3 className="font-semibold mb-2">This whitepaper is not:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Not legal, financial, or investment advice.</li>
                <li>Not an offer of securities or a promise of returns.</li>
                <li>
                  Not a final, fixed document — it will evolve as the community
                  does.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-300/90 max-w-3xl">
            LUMA is a symbolic mutual-credit system and a cultural experiment in
            reciprocity. Any future regulatory or legal implementations will be
            designed carefully and transparently, with community input.
          </p>
        </div>
      </section>

      {/* High-level structure / TOC */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            High-level structure
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            The full whitepaper is written for humans first — clear language,
            concrete examples, and enough detail for serious collaborators. The
            current pre-release version covers:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Core sections</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>0 — Executive Summary</li>
                <li>1 — The Moment We&apos;re In</li>
                <li>2 — What Is LUMA? (Frequency · Community · System)</li>
                <li>3 — Design Principles &amp; Values</li>
                <li>4 — LUMA Lane &amp; Fiat Lane</li>
                <li>5 — Light Contracts &amp; Use Cases</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Deeper layers</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>6 — Roles: Luminaries, Stewards, Guardians, Hosts</li>
                <li>7 — Mutual Credit &amp; Ledger Design</li>
                <li>8 — Governance &amp; Safety</li>
                <li>9 — Roadmap &amp; Phases</li>
                <li>10 — LUMA AI (Powered by Lumina)</li>
                <li>Appendices — Glossary, Examples, Technical Notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to read / who it's for */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            Who the whitepaper is written for
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">For caring builders</h3>
              <p>
                People who want to build with LUMA — hosts, core team members,
                circle leaders, and project founders who need to understand the
                mechanics behind the poetic language.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">For aligned partners</h3>
              <p>
                Organizations, communities, and potential collaborators who are
                exploring whether LUMA could be integrated into their existing
                ecosystem or used to seed a new one.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300/90 max-w-3xl">
            If you simply want to feel the field and understand the basics,
            the <Link href="/en" className="underline hover:opacity-80">
              Home
            </Link>{" "}
            and{" "}
            <Link
              href="/en/how-it-works"
              className="underline hover:opacity-80"
            >
              How It Works
            </Link>{" "}
            pages might be enough. The whitepaper is for when you want to get
            more technical and precise.
          </p>
        </div>
      </section>

      {/* Download / access CTA */}
      <section className="px-6 py-16 md:py-18 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Access the full whitepaper
          </h2>

          <p className="text-slate-200/90 max-w-3xl mb-6">
            The current version is a living, evolving document. As the LUMA
            field grows, we&apos;ll update it with clearer diagrams, examples,
            and technical notes. For now, you can read the pre-release (v0.x)
            version here:
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            {/* TODO: update href once you have the PDF/Notion link */}
            <a
              href="/files/LUMA-Whitepaper-v0.2.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition font-medium"
            >
              Open Full Whitepaper (PDF)
            </a>
            <span className="text-xs md:text-sm text-slate-300/80">
              Pre-release draft · Not final · For exploration and collaboration.
            </span>
          </div>

          <p className="mt-4 text-xs md:text-sm text-slate-300/80 max-w-3xl">
            If you&apos;re reviewing the whitepaper as a potential partner,
            steward, or technical collaborator and would like to offer feedback
            or questions, you can reach out through the{" "}
            <Link href="/en/join" className="underline hover:opacity-80">
              Join
            </Link>{" "}
            page or directly with the core team.
          </p>
        </div>
      </section>

      {/* Navigation CTAs */}
      <section className="px-6 py-12 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              Ready to go from reading to co-creating?
            </h2>
            <p className="text-sm text-slate-200/90 max-w-md">
              LUMA only becomes real when humans use it. After you&apos;ve read
              what you need, come and meet the field.
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
