
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 relative">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass-morphism text-white/80 text-[11px] font-bold tracking-[0.25em] uppercase mb-12 shadow-2xl border-white/20 hover:border-purple-500/50 transition-all duration-700 cursor-default group overflow-hidden">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span className="group-hover:text-white transition-colors">Infrastructure Level: Optimized</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      <h1 className="reveal stagger-1 text-[68px] md:text-[124px] font-black leading-[0.82] tracking-tighter mb-14 select-none">
        <span className="text-reveal block">Complete Business</span>
        <span className="purple-gradient-text block">Automation Platform</span>
      </h1>
      
      <div className="max-w-4xl space-y-14">
        <p className="reveal stagger-2 text-2xl md:text-4xl font-light text-white/70 leading-tight tracking-tight px-4 max-w-3xl mx-auto italic">
          Revenue leaks when your <span className="text-white font-semibold">CRM, email, and billing</span> systems operate in silos.
        </p>
        
        <div className="reveal stagger-3 max-w-3xl mx-auto space-y-10">
          <p className="text-[19px] md:text-[22px] text-slate-400 leading-relaxed font-light">
            We build the connective tissue between your departments—automating every manual handoff from capture to delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 opacity-60">
            {['Unified Data', 'Autonomous Logic', 'Real-time Flow'].map((tag, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:shadow-[0_0_15px_#8b5cf6] transition-all"></div>
                <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.35em] group-hover:text-white transition-colors">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="mt-24 animate-bounce opacity-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};
