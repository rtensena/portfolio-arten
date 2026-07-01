import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lanyard from './Lanyard'
import Dither from './Dither'

const heroVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
}

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <motion.section
      className="relative max-w-container-max mx-auto px-gutter min-h-[100dvh] flex items-end lg:items-center py-section-gap"
      id="home"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 pointer-events-none overflow-hidden">
        <Dither
          waveColor={[0.5176470588235295, 0.6470588235294118, 0.8549019607843137]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={10}
          waveAmplitude={0.2}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 hidden lg:block overflow-visible">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} frontImage="/profile.jpg" lanyardWidth={1.0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10 pointer-events-none">
        <motion.div
          className="space-y-6 max-w-2xl pointer-events-auto"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="font-label-mono text-sm uppercase tracking-[0.24em] text-tertiary">Portfolio</p>
          <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile leading-tight max-w-3xl">
            Winalfan Artensena Pamuji
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Design. Code. Optimize. Repeat.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Engineering digital experiences with precision and logic. Where code meets creativity and data drives decisions.
          </p>
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-primary font-label-mono uppercase tracking-[0.15em] transition-opacity duration-300 hover:text-secondary">
            Scroll to About
            <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </a>
        </motion.div>

        <div className="relative flex justify-center items-start lg:mt-12 h-full min-h-[300px]">
        </div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-center text-on-surface-variant cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="animate-scroll-arrow material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
        <p className="font-label-mono uppercase tracking-[0.22em] text-xs">Scroll down</p>
      </motion.div>
    </motion.section>
  )
}
