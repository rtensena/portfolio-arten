import { motion } from 'framer-motion'

const f1MarqueeItems = [
  { pos: '01', text: "LET'S TALK", badge: 'CONTACT' },
  { pos: '02', text: "BASED IN YOGYAKARTA", badge: 'LOCATION' },
  { pos: '03', text: "OPEN TO OPPORTUNITIES", badge: 'STATUS' },
  { pos: '04', text: "TECH GENERALIST", badge: 'ROLE' },
  { pos: '05', text: "ALWAYS LEARNING", badge: 'MINDSET' }
]

export function Contact() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#07090d] bg-subtle-grid">
      
      {/* F1 Sprint Leaderboard Ticker Ribbon - Elegant */}
      <div className="absolute top-16 md:top-24 left-0 w-[110%] -translate-x-[5%] -rotate-2 bg-[#050505] py-2 z-40 border-y border-white/10 shadow-2xl overflow-hidden flex">
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@700;900&family=Barlow+Condensed:wght@600;700&display=swap');
          
          .font-bebas { font-family: 'Bebas Neue', sans-serif; }
          .font-orbitron { font-family: 'Orbitron', sans-serif; }
          .font-barlow { font-family: 'Barlow Condensed', sans-serif; }
          
          .animate-f1-ticker {
            display: flex;
            width: max-content;
            animation: f1-ticker 35s linear infinite;
          }
          @keyframes f1-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />

        <div className="animate-f1-ticker">
          {/* Duplicate the array to make the infinite scroll seamless */}
          {[...f1MarqueeItems, ...f1MarqueeItems, ...f1MarqueeItems, ...f1MarqueeItems, ...f1MarqueeItems].map((item, i) => {
            return (
              <div key={i} className="flex items-stretch bg-[#11131a] border-l-[3px] border-[#E10600] h-10 shrink-0 mx-2 md:mx-3 rounded-r-md overflow-hidden">
                {/* Position Block */}
                <div className="flex items-center justify-center px-3 md:px-4 bg-white/5">
                  <span className="font-orbitron text-white/40 text-sm font-bold italic tracking-wider">
                    {item.pos}
                  </span>
                </div>
                
                {/* Main Text */}
                <div className="flex items-center px-4 md:px-6">
                  <span className="font-bebas text-white/90 text-[22px] tracking-[0.1em] pt-1">
                    {item.text}
                  </span>
                </div>
                
                {/* Badge */}
                <div className="flex items-center pr-4 md:pr-5">
                  <span className="font-barlow text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#E10600]">
                    // {item.badge}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Giant Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none">
        <span className="font-headline-xl text-[24vw] font-black leading-none text-white opacity-[0.02] tracking-tighter whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      {/* Main Centered Content */}
      <motion.div 
        className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-gutter mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-headline-xl text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold text-center leading-[1.1] mb-14 bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#808080] drop-shadow-lg max-w-4xl">
          Let's build<br className="hidden sm:block" /> something.
        </h2>

        {/* Button Group 1 */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
          <a href="mailto:winalfann@gmail.com" className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#10141d] border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ '--hover-color': '#8083ff' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(128,131,255,0.4)] pointer-events-none" />
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">mail</span>
            <span className="font-label-mono text-sm uppercase tracking-widest text-on-surface group-hover:text-white transition-colors duration-300 relative z-10">Send Email</span>
          </a>
          <a href="/media/cv.pdf" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#10141d] border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ '--hover-color': '#571bc1' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(87,27,193,0.4)] pointer-events-none" />
            <span className="material-symbols-outlined text-xl text-secondary group-hover:scale-110 transition-transform duration-300 relative z-10">download</span>
            <span className="font-label-mono text-sm uppercase tracking-widest text-on-surface group-hover:text-white transition-colors duration-300 relative z-10">Download CV</span>
          </a>
        </div>

        {/* Button Group 2 */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/winalfan-artensena-pamuji-51aa18285/" target="_blank" rel="noreferrer" className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#10141d]/80 border border-white/5 hover:border-[#0077B5]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ '--hover-color': '#0077B5' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,119,181,0.3)] pointer-events-none" />
            <svg className="w-[18px] h-[18px] fill-current text-on-surface-variant group-hover:text-[#0077B5] transition-colors duration-300 relative z-10" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors duration-300 relative z-10">LinkedIn</span>
          </a>
          <a href="https://github.com/rtensena" target="_blank" rel="noreferrer" className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#10141d]/80 border border-white/5 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ '--hover-color': '#ffffff' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none" />
            <svg className="w-[18px] h-[18px] fill-current text-on-surface-variant group-hover:text-white transition-colors duration-300 relative z-10" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors duration-300 relative z-10">GitHub</span>
          </a>
          <a href="https://instagram.com/winalfann" target="_blank" rel="noreferrer" className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#10141d]/80 border border-white/5 hover:border-[#E1306C]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ '--hover-color': '#E1306C' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(225,48,108,0.3)] pointer-events-none" />
            <svg className="w-[18px] h-[18px] fill-current text-on-surface-variant group-hover:text-[#E1306C] transition-colors duration-300 relative z-10" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors duration-300 relative z-10">winalfann</span>
          </a>
        </div>
      </motion.div>

      {/* Integrated Footer Row */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-transparent">
        {/* Copyright */}
        <div className="font-label-mono text-[11px] uppercase tracking-[0.15em] text-white/40 text-center md:text-left order-3 md:order-1">
          © 2026 <span className="text-white/80">Winalfan Artensena Pamuji</span>. All rights reserved.
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#10141d] border border-white/10 order-2">
          <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(47,217,244,0.6)]"></div>
          <span className="font-label-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest">Available for new projects</span>
        </div>

        {/* Back to Top */}
        <button onClick={() => scrollTo('home')} className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#10141d] border border-white/10 hover:border-tertiary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden order-1 md:order-3" style={{ '--hover-color': '#2fd9f4' }}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: 'var(--hover-color)' }} />
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(47,217,244,0.3)] pointer-events-none" />
          <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-tertiary group-hover:-translate-y-0.5 transition-all duration-300 relative z-10">arrow_upward</span>
        </button>
      </div>

    </section>
  )
}
