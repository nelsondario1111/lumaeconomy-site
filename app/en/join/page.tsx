// app/en/join/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function JoinPage() {
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
              "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.18), transparent 60%)",
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
            <span className="text-yellow-400/60">Join the Circle</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
            Join the early LUMA circle
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            We&apos;re inviting a small group of humans to help shape, test, and
            embody the LUMA Economy in real life — before anything becomes
            “official.” If you feel a yes in your body, this page is for you.
          </p>
        </div>
      </section>

      {/* =========================================
          WHO WE'RE CALLING IN
      ========================================= */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-4">
             <h2 className="text-3xl font-serif text-slate-200">
              Who we&apos;re calling in
            </h2>
            <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
              You don&apos;t have to be perfect, sorted, or “abundant” to join.
              You just need a real desire to live in a more loving, honest
              economy — and a willingness to experiment together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/80 transition">Luminaries</h3>
              <p className="text-slate-400 leading-relaxed">
                People offering services, care, or creativity (healers,
                designers, coaches, facilitators, developers, artists, etc.) who
                want to weave LUMA into how they serve.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/80 transition">Circle & space holders</h3>
              <p className="text-slate-400 leading-relaxed">
                Humans who love hosting gatherings, circles, or events and want
                a way to honour the invisible work that makes community
                possible.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/80 transition">Stewards & organisers</h3>
              <p className="text-slate-400 leading-relaxed">
                People who naturally think about systems, agreements, and
                long-term care for a project — willing to help LUMA stay clear,
                grounded, and human.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:bg-white/[0.04] transition duration-500">
              <h3 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-yellow-200/80 transition">Curious allies</h3>
              <p className="text-slate-400 leading-relaxed">
                You might not know how you want to participate yet, but you
                feel resonance with the field and want to stay close as it
                forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT IT MEANS TO JOIN
      ========================================= */}
      <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif text-slate-200">
            What it actually means to join now
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed">
                This is not a polished platform or a finished app. This is the{" "}
                <strong className="text-white font-medium">Founding Luminary phase</strong>. Joining now means:
              </p>

              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <span className="text-yellow-400/60 mt-1">✦</span>
                  <span className="leading-relaxed">You&apos;ll be invited into early conversations, circles, and experiments.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-yellow-400/60 mt-1">✦</span>
                  <span className="leading-relaxed">You can propose real exchanges and projects that use LUMA as a reciprocity layer.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-yellow-400/60 mt-1">✦</span>
                  <span className="leading-relaxed">You&apos;ll help us feel what works, what doesn&apos;t, and what needs to be re-written, slowly and honestly.</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 rounded-2xl border border-white/5 bg-[#0B0F1F] p-8 flex items-center justify-center text-center">
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                <span className="block mb-2 text-yellow-500/50 text-xl">⚠</span>
                LUMA is <strong>not</strong> an investment product, a security, or
                legal/financial advice. It is a symbolic mutual-credit system and a
                cultural experiment in reciprocity. <br/><br/>
                There is no financial obligation and no promise of profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTEREST FORM
      ========================================= */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-200 mb-4">
              Share your interest
            </h2>
            <p className="text-slate-400 leading-relaxed">
              This simple form helps us understand who is in the field and how you
              might like to participate. We&apos;ll follow up with next steps once
              we&apos;re ready for the next wave of conversations.
            </p>
          </div>

          <form className="space-y-8 backdrop-blur-sm rounded-3xl p-1 md:p-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium text-slate-300 ml-1">Where are you based? (city / country)</label>
              <input
                id="location"
                name="location"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300"
                placeholder="Toronto, Canada · Quito, Ecuador · Online, etc."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium text-slate-300 ml-1">How do you most resonate with LUMA right now?</label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300"
                  defaultValue=""
                >
                  <option value="" disabled>Choose one that fits best</option>
                  <option value="luminary">I want to offer my services through LUMA</option>
                  <option value="circle-host">I host circles / events / spaces</option>
                  <option value="steward">I'm drawn to stewardship / structure / governance</option>
                  <option value="partner">I'm curious about partnership with an existing project</option>
                  <option value="curious">I'm just curious and want to stay close</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="gifts" className="text-sm font-medium text-slate-300 ml-1">What are some of your gifts, skills, or resources? (optional)</label>
              <textarea
                id="gifts"
                name="gifts"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300 resize-none"
                placeholder="For example: healing, design, web development, space-holding, finance, content, community weaving, etc."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="why" className="text-sm font-medium text-slate-300 ml-1">Why does LUMA resonate with you? (optional)</label>
              <textarea
                id="why"
                name="why"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F1F] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition duration-300 resize-none"
                placeholder="Share anything you feel called to say about money, reciprocity, community, or this moment in your life."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full px-8 py-4 text-base bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition duration-300 font-medium shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)] transform hover:-translate-y-0.5"
            >
              I&apos;d like to be part of this
            </button>

            <p className="text-xs text-center text-slate-500">
              This form does not create any obligation on either side. It simply
              lets us know you&apos;re here.
            </p>
          </form>
        </div>
      </section>

      {/* =========================================
          FOOTER LINKS
      ========================================= */}
      <section className="px-6 py-12 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="/en"
            className="text-sm text-slate-400 hover:text-white transition duration-300"
          >
            ← Back to LUMA Home
          </Link>
          <span className="text-slate-700 hidden md:inline">|</span>
          <Link
            href="/en/how-it-works"
            className="text-sm text-slate-400 hover:text-white transition duration-300"
          >
            Read How LUMA Works →
          </Link>
        </div>
      </section>
    </main>
  );
}