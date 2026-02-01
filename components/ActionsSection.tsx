
import React from 'react';

export const ActionsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-32 space-y-24">
      <div className="reveal space-y-10">
        <div className="inline-block px-5 py-2 glass-morphism-light rounded-full mb-4">
          <span className="text-[12px] font-black text-purple-600 uppercase tracking-[0.4em]">Next Steps</span>
        </div>
        <h3 className="text-[60px] md:text-[110px] font-black text-black tracking-tighter leading-[0.85] select-none">
          Deploy the <br className="hidden md:block"/> Solution.
        </h3>
        <p className="text-slate-500 max-w-3xl mx-auto text-[24px] font-light leading-snug px-6">
          Systemic growth isn't a strategy—it's an infrastructure decision. Join the automated elite.
        </p>
      </div>
      
      <div className="reveal stagger-1 flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl px-6">
        <button className="magnetic-btn group relative w-full md:w-auto px-16 py-9 bg-black text-white font-black text-[15px] tracking-[0.35em] uppercase rounded-full shadow-2xl overflow-hidden">
          <span className="relative z-10">Audit Pipeline</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 ml-4 inline-block group-hover:translate-x-2 transition-transform">→</span>
        </button>
        
        <button className="magnetic-btn w-full md:w-auto px-16 py-9 bg-white border-2 border-black/5 text-black font-black text-[15px] tracking-[0.35em] uppercase rounded-full hover:bg-slate-50 shadow-xl transition-all">
          Book Demo
        </button>
        
        <button className="magnetic-btn w-full md:w-auto px-16 py-9 bg-transparent border-2 border-black/10 text-black font-black text-[15px] tracking-[0.35em] uppercase rounded-full hover:border-black/20 hover:bg-black/5 transition-all">
          System Tour
        </button>
      </div>
      
      <div className="reveal stagger-2 mt-48 w-full overflow-hidden opacity-5 pointer-events-none">
        <span className="text-[180px] md:text-[380px] font-black tracking-tighter text-black leading-none inline-block whitespace-nowrap animate-[marquee_60s_linear_infinite]">
          SYSTEMIC GROWTH • UNIFIED ENGINE • SCALE • AUTONOMOUS LOGIC • REVENUE SECURITY • 
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
