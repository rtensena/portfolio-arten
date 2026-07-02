import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'portfolio', label: 'work' },
  { id: 'contact', label: 'hit me up' }
]

export function Navbar({ activeSection, visible = true }) {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
      setIsAtBottom(scrolledToBottom)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHidden = !visible || activeSection === 'contact' || isAtBottom
  const isSmall = isScrolled

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[98%] z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isHidden ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'
    } ${
      isSmall ? 'max-w-4xl' : 'max-w-[1400px]'
    }`}>
      <div className={`w-full bg-[#0a0e17]/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isSmall ? 'px-5 sm:px-6 py-2' : 'px-6 sm:px-10 py-3.5'
      }`}>
        
        {/* Logo */}
        <a className="font-headline-md font-bold text-white hover:text-tertiary transition-colors tracking-tighter text-xl ml-2 flex items-center gap-1.5" href="#home">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(47,217,244,0.6)]"></span>
          arten.
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-5 py-2 font-label-mono text-xs tracking-widest transition-colors duration-300 z-10 block"
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={`relative z-10 uppercase transition-colors duration-300 ${isActive ? 'text-white font-semibold drop-shadow-md' : 'text-white/40 hover:text-white/80'}`}>
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* CTA / Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            className="hidden md:flex relative group items-center justify-center px-5 py-2 rounded-full font-label-mono text-xs uppercase tracking-widest bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 overflow-hidden"
            href="#contact"
          >
            <span className="relative z-10 font-bold">Lets Talk</span>
          </a>
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300" aria-label="Open menu">
            <span className="material-symbols-outlined text-sm">segment</span>
          </button>
        </div>

      </div>
    </nav>
  )
}
