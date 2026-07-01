import { useEffect, useRef } from 'react'
import anime from 'animejs'

export function About() {
  const containerRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Enter animation
            anime({
              targets: '.anime-item',
              translateY: [50, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              delay: anime.stagger(150),
              duration: 1000,
              easing: 'easeOutElastic(1, .8)'
            })
            
            // Typing animation for subtitle
            if (subtitleRef.current) {
              const text = subtitleRef.current.getAttribute('data-text') || subtitleRef.current.innerText
              subtitleRef.current.setAttribute('data-text', text)
              const obj = { length: 0 }
              anime({
                targets: obj,
                length: text.length,
                round: 1,
                easing: 'linear',
                delay: 400,
                duration: text.length * 40,
                update: function() {
                  if (subtitleRef.current) {
                    subtitleRef.current.innerHTML = text.substring(0, obj.length) + "<span class='animate-pulse'>|</span>"
                  }
                },
                complete: function() {
                  if (subtitleRef.current) {
                    subtitleRef.current.innerHTML = text
                  }
                }
              })
            }
          } else {
            // Reset when leaving viewport (Two-way scroll)
            anime.set('.anime-item', { opacity: 0, translateY: 50, scale: 0.9 })
            if (subtitleRef.current) {
              subtitleRef.current.innerHTML = ''
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseEnter = (e) => {
    anime({
      targets: e.currentTarget,
      translateY: -10,
      scale: 1.03,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      duration: 400,
      easing: 'easeOutExpo'
    })
  }

  const handleMouseLeave = (e) => {
    anime({
      targets: e.currentTarget,
      translateY: 0,
      scale: 1,
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      duration: 400,
      easing: 'easeOutExpo'
    })
  }

  return (
    <section className="relative max-w-6xl mx-auto px-gutter pt-24 pb-16 md:pb-24 overflow-hidden" id="about">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={containerRef}
        className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
      >
        {/* Left Section - Title */}
        <div className="w-full lg:w-1/3">
          <div className="anime-item opacity-0 sticky top-32">
            <h2 className="font-headline-lg text-4xl md:text-5xl font-bold text-white mb-5 flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
                <span className="material-symbols-outlined relative text-primary text-4xl md:text-5xl">person</span>
              </div>
              About Me
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary via-tertiary to-transparent rounded-full mb-6" />
            <p ref={subtitleRef} className="font-label-mono text-sm uppercase tracking-widest text-white/50 h-5">
              Discover who I am and what I do.
            </p>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="anime-item opacity-0 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
            
            <p className="font-body-lg text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Informatics graduate with a strong interest in <span className="text-white font-semibold">Web Development</span>, <span className="text-white font-semibold">Quality Assurance</span>, and <span className="text-white font-semibold">Data Analysis</span>. Experienced in building scalable web systems, automating data workflows, and ensuring software quality through structured testing.
            </p>
            <p className="font-body-lg text-lg md:text-xl text-white/80 leading-relaxed font-light mt-6">
              Aspiring Web Developer & QA Engineer with a <span className="text-tertiary font-medium">data-driven mindset</span>, focused on creating reliable and impactful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'build',
                color: 'text-tertiary',
                borderColor: 'group-hover:border-tertiary/40',
                glowColor: 'group-hover:shadow-[0_0_30px_rgba(47,217,244,0.15)]',
                value: '6+',
                label: 'Projects Completed'
              },
              {
                icon: 'school',
                color: 'text-primary',
                borderColor: 'group-hover:border-primary/40',
                glowColor: 'group-hover:shadow-[0_0_30px_rgba(192,193,255,0.15)]',
                value: '3.52',
                subValue: '/4.00 GPA',
                label: 'Academic Excellence'
              },
              {
                icon: 'analytics',
                color: 'text-secondary',
                borderColor: 'group-hover:border-secondary/40',
                glowColor: 'group-hover:shadow-[0_0_30px_rgba(208,188,255,0.15)]',
                value: '98.8%',
                label: 'Thesis model accuracy: YOLOv8 for Javanese Script Character Detection in Digital Images'
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`anime-item opacity-0 glass-panel p-6 rounded-2xl border border-white/5 relative group overflow-hidden ${stat.borderColor} ${stat.glowColor} cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                <span className={`material-symbols-outlined ${stat.color} text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300`}>{stat.icon}</span>
                <h3 className="font-headline-md text-3xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.subValue && <span className="text-lg text-white/50 font-medium">{stat.subValue}</span>}
                </h3>
                <p className="font-label-mono text-xs uppercase tracking-wider text-white/50 leading-relaxed mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
