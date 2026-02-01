
import React from 'react';

export const FinalStatement: React.FC = () => {
  return (
    <section className="py-64 relative overflow-hidden">
      {/* Background Depth Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>
      
      <div className="reveal flex flex-col items-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16 group">
          <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
            <span className="text-[12px] font-black uppercase tracking-[1em] text-white">Consolidated Mandate</span>
          </div>
          
          <h2 className="text-4xl md:text-[86px] font-black text-white leading-[0.9] tracking-tighter">
            "Email powers B2B. <br/> WhatsApp powers B2C. <br/>
            <span className="purple-gradient-text italic underline decoration-white/10 underline-offset-8">Automation powers everything.</span>"
          </h2>
          
          <div className="pt-20">
            <div className="inline-block px-12 py-1 rounded-sm border border-white/10 glass-morphism text-white/40 text-[13px] font-bold tracking-[0.4em] uppercase hover:text-white hover:border-white/40 transition-all cursor-default">
              Operational Absolute
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
