import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'

const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact']
const firstIntroLine = 'Welcome to my'
const secondIntroLine = 'Portfolio Website'
const introBadge = 'Rten'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showIntro, setShowIntro] = useState(true)
  const [introCompleted, setIntroCompleted] = useState(false)
  const [displayNavbar, setDisplayNavbar] = useState(false)
  const [showIcons, setShowIcons] = useState(false)
  const [typedFirstLine, setTypedFirstLine] = useState('')
  const [typedSecondLine, setTypedSecondLine] = useState('')
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    
    setShowIcons(true)

    let firstIndex = 0
    let secondIndex = 0
    let badgeTimeout = 0
    let secondLineDelay = 0
    let secondLineInterval = 0

    const typeSpeed = 70
    const firstLineInterval = window.setInterval(() => {
      if (firstIndex >= firstIntroLine.length) {
        window.clearInterval(firstLineInterval)
        secondLineDelay = window.setTimeout(() => {
          secondLineInterval = window.setInterval(() => {
            if (secondIndex >= secondIntroLine.length) {
              window.clearInterval(secondLineInterval)
              setShowBadge(true)
              badgeTimeout = window.setTimeout(() => {
                setShowIntro(false)
                setIntroCompleted(true)
                setDisplayNavbar(true)
              }, 1500)
              return
            }
            setTypedSecondLine(secondIntroLine.slice(0, secondIndex + 1))
            secondIndex += 1
          }, typeSpeed)
        }, 420)
        return
      }
      setTypedFirstLine(firstIntroLine.slice(0, firstIndex + 1))
      firstIndex += 1
    }, typeSpeed)

    return () => {
      window.clearInterval(firstLineInterval)
      window.clearInterval(secondLineInterval)
      window.clearTimeout(secondLineDelay)
      window.clearTimeout(badgeTimeout)
    }
  }, [])

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting)
        if (visibleSections.length > 0) {
          const activeEntry = visibleSections.reduce((first, next) =>
            first.intersectionRatio > next.intersectionRatio ? first : next
          )
          setActiveSection(activeEntry.target.id)
        }
      },
      {
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative bg-surface-container-lowest text-on-surface font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Navbar activeSection={activeSection} visible={displayNavbar} />
      <AnimatePresence>
        {showIntro && (
          <motion.section
            className="intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="intro-icon-row"
              initial={{ opacity: 0, y: 24 }}
              animate={showIcons ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <span className="intro-icon">&lt;/&gt;</span>
              <span className="intro-icon">👤</span>
              <span className="intro-icon">🌍</span>
            </motion.div>

            <div className="intro-text-block">
              <motion.h1
                className="intro-heading intro-line intro-line-small"
                initial={{ opacity: 0, y: 18 }}
                animate={typedFirstLine ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {typedFirstLine}
                <span className="intro-cursor" aria-hidden="true" />
              </motion.h1>

              <motion.h2
                className="intro-heading intro-line intro-line-large"
                initial={{ opacity: 0, y: 18 }}
                animate={typedSecondLine ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              >
                {typedSecondLine}
                {typedSecondLine && <span className="intro-cursor" aria-hidden="true" />}
              </motion.h2>
            </div>

            <AnimatePresence>
              {showBadge && (
                <motion.div
                  className="intro-badge"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                >
                  {introBadge}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>
      <motion.div
        className={`${showIntro ? 'pointer-events-none' : 'pointer-events-auto'} transition-opacity duration-500`}
        initial={{ opacity: 0, y: 24 }}
        animate={introCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </motion.div>
    </div>
  )
}
