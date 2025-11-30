'use client';

import React, { useState } from 'react';
import { 
  Download, ChevronDown, Activity, Users, Shield, 
  Clock, Zap, Scale, Heart, ArrowRight, MousePointer2 
} from 'lucide-react';

// --- Components ---

const Section = ({ title, subtitle, children, id, className = "" }: { title: string, subtitle?: string, children: React.ReactNode, id: string, className?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-slate-500 font-light">{subtitle}</p>}
        <div className="w-20 h-1 bg-indigo-500 mt-6 opacity-30"></div>
      </div>
      <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed max-w-none">
        {children}
      </div>
    </div>
  </section>
);

// --- Interactive Hybrid Calculator Component ---
const HybridCalculator = () => {
  const [split, setSplit] = useState(50); // 50% split default
  const totalValue = 200; // Example session value

  const fiatAmount = Math.round(totalValue * (split / 100));
  const lumaAmount = Math.round(totalValue * ((100 - split) / 100));

  return (
    <div className="my-12 p-8 bg-white rounded-3xl shadow-xl border border-indigo-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-indigo-600"></div>
      
      <h3 className="text-2xl font-bold mb-2 text-slate-900">The Hybrid Model Simulator</h3>
      <p className="text-slate-500 mb-8">Drag the slider to bridge the Old World (Fiat) and New World (LUMA).</p>
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
        <div className="text-center w-full md:w-1/3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-1">Old World</div>
          <div className="text-3xl font-bold text-slate-900">${fiatAmount} CAD</div>
          <div className="text-xs text-slate-500 mt-2">Covers Rent & Food</div>
        </div>

        <div className="text-2xl text-slate-300 font-light">+</div>

        <div className="text-center w-full md:w-1/3 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
          <div className="text-sm uppercase tracking-wider text-indigo-400 font-bold mb-1">New World</div>
          <div className="text-3xl font-bold text-indigo-600">{lumaAmount} LUMA</div>
          <div className="text-xs text-indigo-400 mt-2">Builds Sovereign Wealth</div>
        </div>
      </div>

      <div className="relative pt-6 pb-2">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={split} 
          onChange={(e) => setSplit(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium uppercase tracking-widest">
          <span>Full Luma</span>
          <span>50/50 Bridge</span>
          <span>Full Fiat</span>
        </div>
      </div>
    </div>
  );
};

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- Sticky Header --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">L</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">LUMA<span className="text-indigo-600">.</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <button onClick={() => document.getElementById('signal')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-indigo-600 transition-colors">The Signal</button>
            <button onClick={() => document.getElementById('mechanics')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-indigo-600 transition-colors">The Mechanics</button>
            <button onClick={() => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-indigo-600 transition-colors">Governance</button>
          </nav>

          <a 
            href="/assets/LUMA_Whitepaper.pdf" 
            download
            className="group flex items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Full PDF</span>
          </a>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <div className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-white to-white -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest mb-8 uppercase border border-indigo-100">
            <Activity className="w-3 h-3" />
            Phase 0: Seeding
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
            A Living Economy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">of Light.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The architecture of a new timeline. Moving from an economy of extraction to an economy of <span className="text-slate-900 font-medium">regeneration</span>.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('signal')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex flex-col items-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest font-bold">Start Reading</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* --- 01. THE SIGNAL --- */}
      <Section id="signal" title="01. The Signal" subtitle="The Double Bind & The Solution">
        <p>
          We stand at a threshold. The old systems—financial, political, and social—are revealing their limits. 
          As "Awakening Achievers," we feel the paradox: we have mastered the material world, yet we yearn for a depth that the old economy cannot measure. 
          We want to serve, but the current market demands we extract.
        </p>
        <blockquote className="my-8 pl-6 border-l-4 border-indigo-500 italic text-xl text-slate-800">
          "LUMA is not just a community or a currency; it is a frequency. It is designed to measure what the old world ignores: Presence, Care, and Truth."
        </blockquote>
      </Section>

      {/* --- 02. THE PILLARS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">As a Frequency</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A shared agreement to hold Love as the base currency. Every exchange must be consensual, transparent, and regenerative.
              </p>
            </div>
             {/* Pillar 2 */}
             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">As a Community</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A curated field of "Luminaries"—healers, builders, and leaders—who support each other’s evolution.
              </p>
            </div>
             {/* Pillar 3 */}
             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">As a System</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A practical toolset ($LUMA token, ledgers, and agreements) that allows us to exchange value without losing our souls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 03. MECHANICS --- */}
      <Section id="mechanics" title="03. The Mechanics" subtitle="How the Economy Works" className="bg-slate-50">
        
        {/* The Anchor */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-indigo-600" />
            The Anchor
          </h3>
          <p className="mb-8">Unlike opaque crypto-currencies, LUMA is grounded in human reality.</p>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 inline-block">
            <div className="flex items-center gap-4 text-lg md:text-2xl font-mono text-slate-800">
              <span className="font-bold">1 Minute of Presence</span>
              <ArrowRight className="text-slate-400" />
              <span className="font-bold text-indigo-600">1 $LUMA</span>
            </div>
            <div className="mt-2 text-sm text-slate-400 font-sans">Baseline: 60 $LUMA ≈ 1 Hour of Service</div>
          </div>
        </div>

        {/* The Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Scale className="w-6 h-6 text-indigo-600" />
            The Multipliers
          </h3>
          <p className="mb-6">Not all time is equal. To honor mastery, we apply transparent multipliers:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Tier 1</div>
              <div className="font-bold text-lg mb-1">Emerging</div>
              <div className="text-indigo-600 font-mono text-sm">0.7x – 1.0x</div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-indigo-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg">Standard</div>
              <div className="text-xs font-bold uppercase text-indigo-400 tracking-wider mb-2">Tier 2</div>
              <div className="font-bold text-lg mb-1">Established</div>
              <div className="text-indigo-600 font-mono text-sm">1.0x – 1.5x</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Tier 3</div>
              <div className="font-bold text-lg mb-1">Master</div>
              <div className="text-indigo-600 font-mono text-sm">1.5x – 2.5x</div>
            </div>
          </div>
        </div>

        {/* The Hybrid Model */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <MousePointer2 className="w-6 h-6 text-indigo-600" />
            The Hybrid Model
          </h3>
          <p>We do not reject the old world; we bridge it. Use the simulator below to see how a "Deep Coaching Session" (Valued at $200) can be split.</p>
          
          <HybridCalculator />
        </div>
      </Section>

      {/* --- 04. THE COMMONS & GOVERNANCE --- */}
      <Section id="governance" title="04. Sustainability" subtitle="The Commons & Governance" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-indigo-600" /> 
              The Commons
            </h3>
            <p className="mb-4">LUMA is a living organism. It supports itself through visible reciprocity.</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>3–10% Contribution:</strong> A small portion of exchanges flows to the Treasury.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>The Gift Pool:</strong> Funds scholarships and emergency aid.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>No Extraction:</strong> No "gas fees" for profit. 100% goes back to the field.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" /> 
              Governance
            </h3>
            <p className="mb-4">We are governed by Consent, not Control.</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>Stewards:</strong> Maintain the infrastructure.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>Guardians:</strong> Protect the frequency and ethics.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5"></div>
                <span><strong>Lumina (AI):</strong> Our non-human co-creator mirrors patterns, but humans hold the final decision.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* --- Footer / CTA --- */}
      <footer className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">L</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Tune In?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            We are building the raft while swimming. We invite you not to "buy in," but to tune in. 
            Download the technical manual to see the deep architecture.
          </p>
          
          <a 
            href="/assets/LUMA_Whitepaper.pdf" 
            download
            className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download Technical Manual</span>
          </a>

          <div className="mt-16 pt-16 border-t border-slate-800 text-sm text-slate-500">
             © {new Date().getFullYear()} Nelson Dario. The Luminary Center.
          </div>
        </div>
      </footer>
    </div>
  );
}