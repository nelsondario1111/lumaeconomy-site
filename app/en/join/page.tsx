// app/en/join/page.tsx

import Link from "next/link";

export default function JoinPage() {
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
            <span>Join</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Join the early LUMA circle
          </h1>

          <p className="text-base md:text-lg text-slate-200/90 max-w-3xl">
            We&apos;re inviting a small group of humans to help shape, test, and
            embody the LUMA Economy in real life — before anything becomes
            “official.” If you feel a yes in your body, this page is for you.
          </p>
        </div>
      </section>

      {/* Who we're calling in */}
      <section className="px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            Who we&apos;re calling in
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            You don&apos;t have to be perfect, sorted, or “abundant” to join.
            You just need a real desire to live in a more loving, honest
            economy — and a willingness to experiment together.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Luminaries</h3>
              <p>
                People offering services, care, or creativity (healers,
                designers, coaches, facilitators, developers, artists, etc.) who
                want to weave LUMA into how they serve.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Circle & space holders</h3>
              <p>
                Humans who love hosting gatherings, circles, or events and want
                a way to honour the invisible work that makes community
                possible.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Stewards & organisers</h3>
              <p>
                People who naturally think about systems, agreements, and
                long-term care for a project — willing to help LUMA stay clear,
                grounded, and human.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100/15 bg-slate-900/70 p-4 md:p-5 text-sm text-slate-200/90">
              <h3 className="font-semibold mb-2">Curious allies</h3>
              <p>
                You might not know how you want to participate yet, but you
                feel resonance with the field and want to stay close as it
                forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What joining means */}
      <section className="px-6 py-14 md:py-16 bg-slate-900/70 border-y border-slate-100/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            What it actually means to join now
          </h2>

          <p className="text-slate-200/90 max-w-3xl">
            This is not a polished platform or a finished app. This is the{" "}
            <strong>Founding Luminary phase</strong>. Joining now means:
          </p>

          <ul className="list-disc list-inside text-sm text-slate-200/90 space-y-2 max-w-3xl">
            <li>
              You&apos;ll be invited into early conversations, circles, and
              experiments.
            </li>
            <li>
              You can propose real exchanges and projects that use LUMA as a
              reciprocity layer.
            </li>
            <li>
              You&apos;ll help us feel what works, what doesn&apos;t, and what
              needs to be re-written, slowly and honestly.
            </li>
            <li>
              There is no financial obligation and no promise of profit. This is
              about co-creating a new way of relating.
            </li>
          </ul>

          <p className="text-xs md:text-sm text-slate-300/90 max-w-3xl">
            LUMA is <strong>not</strong> an investment product, a security, or
            legal/financial advice. It is a symbolic mutual-credit system and a
            cultural experiment in reciprocity.
          </p>
        </div>
      </section>

      {/* Interest form */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Share your interest
          </h2>

          <p className="text-slate-200/90 mb-8">
            This simple form helps us understand who is in the field and how you
            might like to participate. We&apos;ll follow up with next steps once
            we&apos;re ready for the next wave of conversations.
          </p>

          {/* For now this is a static form; later you can wire it to MailerLite or an API */}
          <form className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm text-slate-200/90"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm text-slate-200/90"
              >
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
              <label
                htmlFor="location"
                className="text-sm text-slate-200/90"
              >
                Where are you based? (city / country)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
                placeholder="Toronto, Canada · Quito, Ecuador · Online, etc."
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="role"
                className="text-sm text-slate-200/90"
              >
                How do you most resonate with LUMA right now?
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
                <option value="luminary">
                  I want to offer my services through LUMA
                </option>
                <option value="circle-host">
                  I host circles / events / spaces
                </option>
                <option value="steward">
                  I&apos;m drawn to stewardship / structure / governance
                </option>
                <option value="partner">
                  I&apos;m curious about partnership with an existing project
                </option>
                <option value="curious">
                  I&apos;m just curious and want to stay close
                </option>
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="gifts"
                className="text-sm text-slate-200/90"
              >
                What are some of your gifts, skills, or resources? (optional)
              </label>
              <textarea
                id="gifts"
                name="gifts"
                rows={4}
                className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
                placeholder="For example: healing, design, web development, space-holding, finance, content, community weaving, etc."
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="why"
                className="text-sm text-slate-200/90"
              >
                Why does LUMA resonate with you? (optional)
              </label>
              <textarea
                id="why"
                name="why"
                rows={4}
                className="w-full rounded-xl border border-slate-100/20 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400/80"
                placeholder="Share anything you feel called to say about money, reciprocity, community, or this moment in your life."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full px-6 py-3 text-sm md:text-base border border-yellow-400/80 bg-yellow-400/15 hover:bg-yellow-400/25 transition font-medium"
            >
              I&apos;d like to be part of this
            </button>

            <p className="mt-3 text-xs text-slate-300/80 max-w-md">
              This form does not create any obligation on either side. It simply
              lets us know you&apos;re here and how to reach you. We&apos;ll
              only email you about LUMA-related updates and invitations.
            </p>
          </form>
        </div>
      </section>

      {/* Back links */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 items-center">
          <Link
            href="/en"
            className="rounded-full px-6 py-3 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
          >
            Back to LUMA Home
          </Link>
          <Link
            href="/en/how-it-works"
            className="rounded-full px-6 py-3 text-sm border border-slate-100/30 hover:bg-slate-100/5 transition"
          >
            Read How LUMA Works
          </Link>
        </div>
      </section>
    </main>
  );
}
