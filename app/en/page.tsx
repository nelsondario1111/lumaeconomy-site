// app/en/page.tsx

export default function LumaHomePageEn() {
  return (
    <main
      className="min-h-screen flex flex-col bg-slate-950 text-slate-50"
      aria-label="LUMA Economy main content"
    >
      {/* ✧ Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.20), transparent 60%)",
          }}
        />

        <h1 className="text-3xl md:text-5xl font-semibold text-center max-w-3xl leading-tight">
          LUMA — A Living Economy of Light
        </h1>

        <p className="mt-6 max-w-2xl text-center text-base md:text-lg text-slate-200/90">
          A community-powered way to exchange services, care, and creativity
          using a symbolic unit of time instead of money.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#join"
            className="rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80
                       bg-yellow-400/10 hover:bg-yellow-400/20 transition"
          >
            Join the Early Circle
          </a>
          <a
            href="#how-it-works"
            className="rounded-full px-6 py-3 text-sm md:text-base border border-slate-100/20 hover:bg-slate-100/5 transition"
          >
            Understand How LUMA Works
          </a>
        </div>

        <p className="mt-4 text-xs md:text-sm text-slate-300/80">
          Official home of the LUMA Economy · Toronto / Global
        </p>
      </section>

      {/* ✧ What is LUMA */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          What is LUMA?
        </h2>

        <p className="text-center max-w-3xl mx-auto text-slate-200/90">
          LUMA is a <strong>living economy of light</strong> where people
          exchange value through services, aligned offerings, and simple “Light
          Contracts.” Instead of pricing everything only in dollars, we track
          reciprocity using a symbolic unit of time and presence we call{" "}
          <strong>LUMA</strong>.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <div className="rounded-2xl border border-slate-100/15 p-4 md:p-5 bg-slate-900/60">
            <h3 className="font-semibold mb-2">LUMA as a Frequency</h3>
            <p className="text-sm text-slate-200/90">
              A field of trust, care, and sovereignty that invites people to
              give and receive from their higher self, not from fear or
              scarcity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100/15 p-4 md:p-5 bg-slate-900/60">
            <h3 className="font-semibold mb-2">LUMA as a Community</h3>
            <p className="text-sm text-slate-200/90">
              A network of humans, circles, and hubs who support each other
              with services, knowledge, and resources, locally and online.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100/15 p-4 md:p-5 bg-slate-900/60">
            <h3 className="font-semibold mb-2">
              LUMA as an Exchange System
            </h3>
            <p className="text-sm text-slate-200/90">
              A lightweight, mutual-credit system where{" "}
              <strong>1 LUMA ≈ 1 minute of present, loving service</strong> is
              used as a baseline for valuing what we share.
            </p>
          </div>
        </div>

        {/* LUMA is / is not */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 md:p-5">
            <h3 className="font-semibold mb-2">LUMA is:</h3>
            <ul className="space-y-1 text-sm text-slate-100/90 list-disc list-inside">
              <li>A symbolic mutual-credit unit.</li>
              <li>A way to keep track of giving and receiving.</li>
              <li>
                A community-led experiment in a more loving, honest economy.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-4 md:p-5">
            <h3 className="font-semibold mb-2">LUMA is not:</h3>
            <ul className="space-y-1 text-sm text-slate-100/90 list-disc list-inside">
              <li>Not a bank and not a payment processor.</li>
              <li>Not a speculative crypto or investment product.</li>
              <li>Not legal or financial advice.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✧ How it works */}
      <section
        id="how-it-works"
        className="px-6 py-16 md:py-20 bg-slate-900/70 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          How LUMA works (for real humans)
        </h2>

        <p className="text-center max-w-3xl mx-auto text-slate-200/90 mb-10">
          LUMA is meant to be simple enough that your friends and family can
          understand it, and powerful enough to support real collaboration.
          Here&apos;s the basic flow:
        </p>

        <ol className="space-y-6">
          <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
            <h3 className="font-semibold mb-1">
              1. Offer and request support
            </h3>
            <p className="text-sm text-slate-200/90">
              You share what you can offer (sessions, design, mentoring, space,
              tech help…) and what you&apos;re looking for. LUMA helps you
              discover natural matches inside the community.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
            <h3 className="font-semibold mb-1">
              2. Agree a Light Contract
            </h3>
            <p className="text-sm text-slate-200/90">
              Two or more people agree on a simple scope:{" "}
              <em>what</em> is being shared and a <strong>LUMA amount</strong>{" "}
              (or a mix of LUMA + money if needed). This can be as simple as a
              message, a short written note, or a template.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-100/15 bg-slate-950/80 p-4 md:p-5">
            <h3 className="font-semibold mb-1">
              3. Record the exchange
            </h3>
            <p className="text-sm text-slate-200/90">
              When the exchange is complete, one side receives{" "}
              <strong>+LUMA</strong>, the other <strong>−LUMA</strong>. Over
              time, this keeps a gentle tally of who has given and received
              within the community, without turning everything into dollar
              transactions.
            </p>
          </li>
        </ol>

        <p className="mt-8 text-xs md:text-sm text-slate-300/90 text-center max-w-3xl mx-auto">
          LUMA is <strong>not money</strong>, not pegged to any currency, and
          not redeemable for cash by the platform. It exists to balance
          give/receive across time, not to set prices or promise financial
          returns.
        </p>
      </section>

      {/* ✧ Join the early circle */}
      <section
        id="join"
        className="px-6 py-20 md:py-24 max-w-3xl mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Join the early circle
        </h2>

        <p className="text-center text-slate-200/90 mb-8">
          We&apos;re currently weaving the{" "}
          <strong>Founding Luminary Circle</strong> — a small group of humans
          who will help test, feel, and embody LUMA in real life.
        </p>

        {/* Simple form for now; you can wire it to MailerLite later */}
        <form className="space-y-4 max-w-xl mx-auto">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-slate-200/90">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-slate-200/90">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="role" className="text-sm text-slate-200/90">
              How would you like to use LUMA?
            </label>
            <select
              id="role"
              name="role"
              className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
              defaultValue=""
            >
              <option value="" disabled>
                Choose one that fits best
              </option>
              <option value="offer-services">Offer my services</option>
              <option value="circle-hub">Join as a circle / hub</option>
              <option value="partnership">Explore partnership</option>
              <option value="curious">Just curious, want to learn</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm text-slate-200/90">
              Anything you&apos;d like to share? (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
              placeholder="Tell us a bit about you, your gifts, or your interest in LUMA."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80
                       bg-yellow-400/15 hover:bg-yellow-400/25 transition font-medium"
          >
            I&apos;m in
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-300/80 text-center max-w-md mx-auto">
          We&apos;ll only use your email to share LUMA updates and invitations.
          No spam, no selling your data.
        </p>
      </section>

      {/* ✧ Footer */}
      <footer className="px-6 py-8 border-t border-slate-100/15 text-xs md:text-sm text-slate-300/80">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-2">
          <div>
            <div className="font-semibold">LUMA Economy</div>
            <div>A Living Economy of Light</div>
          </div>
          <div className="text-center md:text-right">
            <div>Stewarded by Nelson Dario &amp; friends</div>
            <div>
              Learn more at{" "}
              <a
                href="https://nelsondario.com"
                className="underline hover:opacity-80"
                target="_blank"
                rel="noreferrer"
              >
                NelsonDario.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
