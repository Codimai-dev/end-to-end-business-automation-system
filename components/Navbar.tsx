
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center bg-black/40 backdrop-blur-2xl border-b border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-black text-black text-xs shadow-lg group-hover:shadow-white/20 transition-all">U</div>
          <span className="font-bold text-[14px] tracking-tight text-white group-hover:text-purple-400 transition-colors">UNIFIED PLATFORM</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[12px] font-semibold text-white/40">
          <a href="#how" className="hover:text-white transition-all hover:tracking-wider">PROCESS</a>
          <a href="#lifecycle" className="hover:text-white transition-all hover:tracking-wider">LIFECYCLE</a>
          <a href="#comparison" className="hover:text-white transition-all hover:tracking-wider">COMPARISON</a>
          <button className="px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-[11px] tracking-wider uppercase magnetic-btn shadow-xl active:scale-95 transition-all">
            AUDIT PIPELINE
          </button>
        </div>
      </div>
    </nav>
  );
};
