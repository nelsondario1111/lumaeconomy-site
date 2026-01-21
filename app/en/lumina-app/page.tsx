// app/en/lumina-app/page.tsx

import Link from "next/link";

const feedItems = [
  {
    type: "Offer",
    title: "Somatic healing session",
    details: "90 minutes · Toronto Healing Circle",
    tags: ["Healing", "Deep", "Established"],
  },
  {
    type: "Need",
    title: "Brand story & narrative weaving",
    details: "120 minutes · Regenerative Creatives",
    tags: ["Design", "Intensive", "Senior"],
  },
  {
    type: "Offer",
    title: "Community garden stewardship",
    details: "60 minutes · Parkdale Commons",
    tags: ["Admin", "Light", "Emerging"],
  },
];

const ledgerRows = [
  {
    title: "Breathwork exchange with Leo",
    time: "Yesterday · 90 LUMA",
    delta: "+90",
    note: "Commons +4.5",
  },
  {
    title: "UX strategy for Sol Circle",
    time: "3 days ago · 120 LUMA",
    delta: "-120",
    note: "Commons +6",
  },
  {
    title: "Circle facilitation",
    time: "Last week · 60 LUMA",
    delta: "+60",
    note: "Commons +3",
  },
];

export default function LuminaAppPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#120f1e] via-[#0b0a16] to-[#05050d] text-slate-200 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(248,200,132,0.15),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(232,163,84,0.12),transparent_45%)]" />

      <section className="px-6 pt-20 pb-12 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto space-y-6">
          <Link
            href="/en"
            className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-300 transition"
          >
            ← Back to LUMA
          </Link>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-200/80">Lumina app prototype</p>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-100">
              The living exchange experience for Luminaries
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl">
              Lumina is a mutual-credit service exchange where every Luminary can offer and receive without
              being blocked by a negative balance. Exchanges blend time-based $LUMA and fiat, while keeping
              reciprocity, sovereignty, and transparency visible.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">1 LUMA ≈ 1 minute</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Hybrid pricing enabled</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Commons contribution 3–10%</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">The Field</p>
                <h2 className="text-2xl md:text-3xl font-serif text-slate-100">Home &amp; feed</h2>
              </div>
              <div className="flex gap-2 text-xs">
                {["All Circles", "Toronto Healing", "Regenerative Creatives"].map((circle) => (
                  <button
                    key={circle}
                    type="button"
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 hover:text-white hover:bg-white/10 transition"
                  >
                    {circle}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-slate-400">
              Browse living offers and needs from Luminaries. Filter by circles to see what is moving in
              your local or thematic constellation.
            </p>
            <div className="grid gap-4">
              {feedItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-yellow-200/80">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-500">Active now</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-slate-100 font-serif">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.details}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Luminaries</p>
              <h3 className="text-xl font-serif text-slate-100">Profiles centered on gifts &amp; needs</h3>
              <p className="text-sm text-slate-400">
                Every profile shares gifts, needs, and reputation notes with qualitative feedback so trust
                grows beyond star ratings.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-100">Sage Amani</p>
                  <p className="text-xs text-slate-500">Toronto · Somatic healer</p>
                </div>
                <span className="text-xs text-yellow-200/80">Reputation: luminous, steady</span>
              </div>
              <div className="grid gap-3 text-xs text-slate-400">
                <div>
                  <p className="uppercase tracking-[0.2em] text-slate-500">Gifts</p>
                  <p>Trauma-informed breathwork · Somatic integration · Ceremony facilitation</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.2em] text-slate-500">Needs</p>
                  <p>Brand storytelling · Gentle admin support · Studio time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Crucial flow</p>
            <h2 className="text-2xl md:text-3xl font-serif text-slate-100">The exchange journey</h2>
            <p className="text-slate-400 max-w-3xl">
              Lumina keeps the exchange simple: agree, record the mini-contract, and confirm completion. The
              ledger updates automatically, keeping the mutual-credit balance across the network at zero.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "1. Negotiation",
                body: "Message to agree on service, timing, and energy exchange. Lumina ensures clarity before you begin.",
              },
              {
                title: "2. Mini-contract",
                body: "Record the agreement with hybrid pricing, tiers, and commons contribution.",
              },
              {
                title: "3. Completion",
                body: "Receiver confirms. Ledger updates with positive and negative balances, no lockouts.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3"
              >
                <h3 className="font-serif text-lg text-slate-100">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-serif text-slate-100">Mini-contract form</h3>
                <p className="text-sm text-slate-400">
                  Hybrid pricing keeps exchanges flexible. Commons contributions are voluntary and visible.
                </p>
              </div>
              <span className="text-xs text-slate-500">Default commons: 5%</span>
            </div>

            <form className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                Service type
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100">
                  <option>Healing</option>
                  <option>Design</option>
                  <option>Admin</option>
                  <option>Coaching</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Time duration
                <input
                  type="text"
                  defaultValue="90 minutes"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Intensity band
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100">
                  <option>LIGHT · 1.0x</option>
                  <option>DEEP · 1.5x</option>
                  <option>INTENSIVE · 2.0x</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Skill tier
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100">
                  <option>Emerging</option>
                  <option>Established</option>
                  <option>Senior</option>
                </select>
              </label>
              <div className="space-y-2 text-sm text-slate-300">
                Exchange value
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    defaultValue="135 LUMA"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100"
                  />
                  <input
                    type="text"
                    defaultValue="$120 CAD"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100"
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                Commons contribution
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>3%</span>
                    <span>10%</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    defaultValue="5"
                    className="w-full accent-yellow-300"
                  />
                  <label className="flex items-center gap-2 text-xs text-slate-400">
                    <input type="checkbox" defaultChecked className="accent-yellow-300" />
                    Send 5% to the Commons Treasury
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Wallet</p>
              <h2 className="text-2xl font-serif text-slate-100">$LUMA balance</h2>
              <p className="text-sm text-slate-400">
                Balances can be positive or negative without blocking exchanges. Negative simply means a
                commitment to give back later.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-slate-500">Current balance</p>
              <p className="text-3xl font-serif text-yellow-200/90">-45 LUMA</p>
              <p className="text-xs text-slate-500">Commons treasury contributed: 18 LUMA</p>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center justify-between">
                <span>Hybrid balance snapshot</span>
                <span className="text-slate-300">$240 CAD · 135 LUMA in flow</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-yellow-300/70 to-yellow-400/40" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Ledger</p>
              <h2 className="text-2xl font-serif text-slate-100">Transaction history</h2>
              <p className="text-sm text-slate-400">
                Transparent records show exchanges and the portion redirected to the Commons Treasury.
              </p>
            </div>
            <div className="space-y-3">
              {ledgerRows.map((row) => (
                <div
                  key={row.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-slate-100">{row.title}</p>
                    <p className="text-xs text-slate-500">{row.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-yellow-200/90">{row.delta} LUMA</p>
                    <p className="text-xs text-slate-500">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Lumina AI</p>
            <h2 className="text-2xl md:text-3xl font-serif text-slate-100">
              Companion for pricing and clarity
            </h2>
            <p className="text-sm text-slate-400">
              Ask Lumina for guidance, and the assistant recommends exchange values using:
              <span className="block text-yellow-200/80 mt-2">
                Price ≈ Time (minutes) × Skill Tier Multiplier × Intensity Factor
              </span>
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-300/20 border border-yellow-300/40 px-5 py-2 text-sm text-yellow-100 hover:bg-yellow-300/30 transition"
            >
              Open Lumina chat
              <span aria-hidden="true">✦</span>
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-white/5 p-4 text-slate-300">
                <p className="text-xs text-slate-500">You</p>
                How should I price a 90-minute deep healing session as an established practitioner?
              </div>
              <div className="rounded-2xl bg-yellow-400/10 p-4 text-slate-100">
                <p className="text-xs text-yellow-200/80">Lumina</p>
                90 minutes × 1.2 (Established) × 1.5 (Deep) ≈ 162 LUMA. You can blend with fiat, e.g., 120
                LUMA + $90 CAD.
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Lumina always keeps the final decision with the humans in the exchange.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500">
          <p>Phase 2 prototype · Off-chain mutual-credit ledger</p>
          <Link href="/en/join" className="text-slate-300 hover:text-white transition">
            Join the early circle →
          </Link>
        </div>
      </footer>

      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-yellow-300 text-slate-900 px-5 py-3 text-sm font-medium shadow-[0_10px_25px_rgba(251,191,36,0.3)] hover:bg-yellow-200 transition"
      >
        Lumina AI
      </button>
    </main>
  );
}
