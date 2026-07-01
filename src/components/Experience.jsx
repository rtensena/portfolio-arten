import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import F1Car from './F1Car'

const experienceData = [
  {
    date: 'Nov 2023 – Dec 2023',
    title: 'Junior Web Programmer',
    org: 'Web Development Bootcamp',
    desc: [
      'Completed a structured web development training program and earned a Junior Web Programmer certification from BNSP (Badan Nasional Sertifikasi Profesi).',
      'Designed and managed a MySQL database, then built a full-stack book management website using HTML, CSS, JavaScript, and SQL as the capstone project.',
      'Applied best practices in code documentation and debugging to deliver a functional, bug-tested application.'
    ]
  },
  {
    date: 'Jul 2024 – Sep 2024',
    title: 'IT & Communication Intern',
    org: 'Web Development at BPSDM Kementerian Pekerjaan Umum dan Perumahan Rakyat',
    desc: [
      'Developed a responsive web-based Room Booking Information System (SIPAR) using PHP, HTML, CSS, and JavaScript, contributing to the digitalization of the room reservation process.',
      'Designed and implemented key features including user authentication (login & registration), room search functionality, and a user-friendly responsive interface to enhance usability.',
      'Collaborated in requirements analysis, system testing, and debugging, while producing technical documentation to support system quality and future maintenance.'
    ]
  },
  {
    date: 'Dec 2025 – Jun 2026',
    title: 'Pranata Komputer Intern (Staff IT)',
    org: 'Pranata Komputer Intern – Sekretariat Jenderal Kementerian Hukum, DKI Jakarta (Maganghub Batch III)',
    desc: [
      'Designed and built automated data extraction scripts using Python to pull procurement planning data directly from SIRUP (Sistem Informasi Rencana Umum Pengadaan), significantly accelerating a process that was previously performed manually.',
      'Analyzed asset and operational data for Biro BMN (Barang Milik Negara), producing structured reports and interactive dashboards to support data-driven decision-making within the bureau.',
      'Developed and maintained internal web-based modules for Biro BMN (Barang Milik Negara), including master data management systems and a consultation system, ensuring each module was functional, well-structured, and aligned with user requirements before deployment.'
    ]
  }
]

export function Experience() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"]
  })
  
  // Smooth out the raw scroll progress with physical spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    mass: 0.5,
    restDelta: 0.001
  })

  // Map the smoothed progress to the track height
  const trackHeight = useTransform(
    smoothProgress,
    [0, 0.1, 0.25, 0.4, 0.55, 0.75, 0.9, 1],
    ["0%", "15%", "15%", "48%", "48%", "82%", "82%", "100%"]
  )

  return (
    <section className="max-w-6xl mx-auto px-gutter pt-8 md:pt-12 pb-16 md:pb-20 overflow-hidden" id="experience">
      <div className="flex flex-col gap-10">
        
        {/* Journey Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(192,193,255,0.8)]" />
            <span className="font-label-mono text-xs uppercase tracking-[0.2em] text-primary">Career Track</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-headline-xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <span className="material-symbols-outlined relative text-white bg-white/5 p-4 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md text-4xl transform -rotate-6">sports_motorsports</span>
            </div>
            <span className="text-center sm:text-left">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Experience</span>
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto" 
          />
        </div>

        {/* F1 Alternating Track (Chicane) Container */}
        <div ref={trackRef} className="relative mt-8 md:mt-12 w-full max-w-5xl mx-auto">
          
          {/* Central Dim Track (Asphalt) */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-1.5 bg-white/10 rounded-full" />
          
          {/* Glowing Neon Track & F1 Car Tip */}
          <motion.div 
            className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 w-1.5 bg-gradient-to-b from-transparent via-[#FF8700] to-[#FF4500] origin-top rounded-full z-0"
            style={{ height: trackHeight }}
          >
            {/* The "F1 Car" (3D Model) */}
            <F1Car />
            {/* Motion blur tail */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-16 w-1.5 bg-[#FF8700] blur-sm" />
          </motion.div>

          {/* List of Checkpoint Cards */}
          <div className="flex flex-col gap-8 md:gap-10 relative z-10 py-6 md:py-8">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-20 md:pl-0 pr-4 md:pr-0`}>
                  
                  {/* Mobile Track Connector */}
                  <div className="absolute top-8 left-[34px] w-6 h-0.5 bg-gradient-to-r from-[#FF8700]/50 to-transparent md:hidden" />
                  
                  {/* Desktop Track Connector */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, margin: "-10% 0px" }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-1/2 w-12 origin-right bg-gradient-to-l' : 'left-1/2 w-12 origin-left bg-gradient-to-r'} h-0.5 from-[#FF8700]/80 to-transparent z-0`} 
                  />

                  {/* Checkpoint Dot / Pit Stop */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-10% 0px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute top-6 md:top-1/2 md:-translate-y-1/2 left-[23px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0e17] border-2 border-[#FF8700]/30 z-20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-[#FF8700] rounded-full shadow-[0_0_10px_rgba(255,135,0,1)] animate-pulse" />
                  </motion.div>

                  {/* Card Container */}
                  <motion.div 
                    className={`glass-panel p-5 md:p-6 rounded-2xl border border-white/5 hover:border-[#FF8700]/40 transition-colors w-full md:w-[44%] relative group z-10 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                    initial={{ opacity: 0, x: isEven ? -80 : 80, skewX: isEven ? 10 : -10, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, skewX: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-10% 0px" }}
                    transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
                  >
                    <span className="font-label-mono text-[9px] md:text-[10px] uppercase tracking-widest text-tertiary mb-2 block">
                      {item.date}
                    </span>
                    <h3 className="font-headline-md text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-[#FF8700] transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="font-body-md text-xs md:text-sm font-semibold text-white/50 mb-4">
                      {item.org}
                    </h4>
                    <ul className="font-body-md text-xs md:text-sm leading-relaxed text-white/80 list-disc list-outside ml-4 space-y-2">
                      {item.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
