
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DefinitionSection } from './components/DefinitionSection';
import { SystemWorkflow } from './components/SystemWorkflow';
import { LifecycleSection } from './components/LifecycleSection';
import { ContrastSection } from './components/ContrastSection';
import { AudienceSection } from './components/AudienceSection';
import { FinalStatement } from './components/FinalStatement';
import { ActionsSection } from './components/ActionsSection';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Dark Theme: Hero */}
      <section className="relative bg-[#000000] overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 grid-bg-dark opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>
        <main className="max-w-[1200px] mx-auto w-full px-6 md:px-8 relative z-10">
          <Hero />
        </main>
      </section>

      {/* Light Theme: Problem */}
      <section className="relative bg-[#ffffff] py-40 border-y border-black/5">
        <div className="absolute inset-0 grid-bg-light"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <ProblemSection />
        </main>
      </section>

      {/* Dark Theme: Definition */}
      <section className="relative bg-[#000000] py-48">
        <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <DefinitionSection />
        </main>
      </section>

      {/* Light Theme: Workflow */}
      <section className="relative bg-[#ffffff] py-48 border-y border-black/5">
        <div className="absolute inset-0 grid-bg-light"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <SystemWorkflow />
        </main>
      </section>

      {/* Dark Theme: Lifecycle */}
      <section className="relative bg-[#000000] py-48 overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <LifecycleSection />
        </main>
      </section>

      {/* Light Theme: Contrast */}
      <section className="relative bg-[#ffffff] py-48 border-y border-black/5">
        <div className="absolute inset-0 grid-bg-light"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <ContrastSection />
        </main>
      </section>

      {/* Dark Theme: Audience & Statement */}
      <section className="relative bg-[#000000] py-48">
        <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <AudienceSection />
          <div className="mt-48">
            <FinalStatement />
          </div>
        </main>
      </section>

      {/* Light Theme: Actions */}
      <section className="relative bg-[#ffffff] py-64 border-t border-black/5">
        <div className="absolute inset-0 grid-bg-light"></div>
        <main className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <ActionsSection />
        </main>
      </section>
      
      <footer className="py-32 border-t border-black/5 text-center bg-[#ffffff] relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-12">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-500 cursor-default hover:scale-110">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center font-black text-white text-[14px] shadow-2xl">U</div>
            <span className="font-bold text-[16px] tracking-tight text-black">UNIFIED PLATFORM</span>
          </div>
          <div className="space-y-4">
            <p className="text-slate-400 text-[14px] tracking-wide max-w-sm mx-auto leading-relaxed">
              &copy; {new Date().getFullYear()} Complete Business Automation Platform. Engineering systemic scalability for the global enterprise.
            </p>
            <div className="flex gap-8 justify-center text-[11px] font-bold text-slate-300 uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
