import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const portfolioTabs = [
  { id: 'web', label: 'web dev' },
  { id: 'design', label: 'ui/ux' },
  { id: 'data', label: 'data/ml' }
]

const portfolioData = {
  web: [
    {
      title: 'sipastiku.',
      tags: ['PHP', 'MySQL', 'CodeIgniter'],
      description: "Asset management & interactive dashboard for Indonesia's Ministry of Law.",
      longDescription: "Sipastiku is a comprehensive internal asset management system designed specifically for the Ministry of Law and Human Rights in Indonesia. It features robust master data management, interactive analytical dashboards, and a streamlined consultation module to ensure optimal tracking and utilization of organizational assets. Please note: Because this is an internal ministry website, I do not have access to it and it cannot be distributed publicly.",
      thumbnail: '/media/projects/sipastiku 1.JPEG',
      images: [
        '/media/projects/sipastiku 1.JPEG',
        '/media/projects/sipastiku 2.jpg',
        '/media/projects/sipastiku 3.jpg'
      ],
      href: '#',
      media: {
        label: 'View Internship Certificate',
        url: '/media/projects/sertifikat-maganghub.jpg',
        type: 'image'
      }
    },
    {
      title: 'sipar.',
      tags: ['PHP', 'Booking System'],
      description: 'Room booking and asset management system for the Ministry of Public Works.',
      longDescription: 'SIPAR is a responsive room booking and asset management system built during an intensive internship at the Ministry of Public Works and Housing. It simplifies the process of reserving meeting rooms, tracking hardware assets, and generating usage reports across multiple departments.',
      thumbnail: '/media/projects/sipar 1.png',
      images: [
        '/media/projects/sipar 1.png',
        '/media/projects/sipar 2.png'
      ],
      href: '#',
      media: {
        label: 'View Certificate',
        url: '/media/projects/sertif-sipar.jpg',
        type: 'image'
      }
    },
    {
      title: 'unibookstore.',
      tags: ['Javascript', 'E-Commerce'],
      description: 'Full-stack online bookstore with shopping cart and admin inventory.',
      longDescription: 'Developed as a capstone project for BNSP certification, Unibookstore is a complete full-stack e-commerce platform. It features a dynamic product catalog, a seamless shopping cart experience, secure transaction handling, and an admin panel for inventory management.',
      thumbnail: '/media/projects/unibookstore 1.png',
      images: [
        '/media/projects/unibookstore 1.png',
        '/media/projects/unibookstore 2.png',
        '/media/projects/unibookstore 3.png'
      ],
      href: '#',
      media: {
        label: 'View Certificate',
        url: '/media/projects/sertif-unibookstore.jpg',
        type: 'image'
      }
    },
    {
      title: 'yogyakarta gis.',
      tags: ['PHP', 'JavaScript', 'GIS Map'],
      description: 'Geographic Information System mapping tourist destinations across Yogyakarta.',
      longDescription: "Developed as part of a Global Positioning System (GPS) coursework project, this web-based Geographic Information System helps users discover and explore tourist destinations across the Special Region of Yogyakarta. The platform features an interactive tourism map that pinpoints attraction locations alongside detailed information, including descriptions and brief historical background for each destination. By consolidating tourism data into a single interface, it enables users to plan their visits conveniently and efficiently.",
      thumbnail: '/media/projects/sig 1.png',
      images: [
        '/media/projects/sig 1.png',
        '/media/projects/sig 2.png',
        '/media/projects/sig 3.png',
        '/media/projects/sig 4.png'
      ],
      href: '#'
    }
  ],
  design: [
    {
      title: 'greencycle.',
      tags: ['Figma', 'UI/UX'],
      description: 'Mobile app prototype for waste management and environmental awareness.',
      longDescription: 'GreenCycle is an innovative mobile app prototype focused on modern waste management and environmental awareness. The project involved extensive UX research, creating intuitive user flows, developing wireframes, and designing polished high-fidelity user interfaces in Figma.',
      thumbnail: '/media/projects/GreenCycle 1.png',
      images: [
        '/media/projects/GreenCycle 1.png',
        '/media/projects/GreenCycle 2.png',
        '/media/projects/GreenCycle 3.png'
      ],
      href: '#'
    }
  ],
  data: [
    {
      title: 'javavision.',
      tags: ['YOLOv8', 'Computer Vision'],
      description: 'End-to-end Javanese script object detection pipeline with 98.8% mAP.',
      longDescription: 'An end-to-end computer vision project focused on preserving cultural heritage. Using YOLOv8, this pipeline detects and classifies Javanese script characters. It achieved an impressive 98.8% mean Average Precision (mAP) on a custom, self-annotated dataset comprising over 2,800 images.',
      thumbnail: '/media/projects/aksarajawa 1.png',
      images: [
        '/media/projects/aksarajawa 1.png',
        '/media/projects/aksarajawa 2.png',
        '/media/projects/aksarajawa 3.png'
      ],
      href: '#'
    },
    {
      title: 'sirup-auto.',
      tags: ['Python', 'Automation'],
      description: 'Automated data extraction pipeline replacing manual procurement collection.',
      longDescription: 'A data engineering and automation tool built to streamline procurement data collection. By integrating directly with the SIRUP (Sistem Informasi Rencana Umum Pengadaan) database, it eliminates hours of manual data entry for the Ministry of Law, providing clean, formatted data ready for analysis.',
      thumbnail: '/media/projects/automation data 1.png',
      images: [
        '/media/projects/automation data 1.png',
        '/media/projects/automation data 2.png'
      ],
      href: '#'
    }
  ]
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05 } }
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('web')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const projects = portfolioData[activeTab]

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <section className="max-w-container-max mx-auto px-gutter min-h-[100dvh] flex flex-col justify-center py-16 md:py-20" id="portfolio">
      <div className="flex flex-col gap-6 md:gap-8 relative">
        
        {/* Gen Z Massive Headline - Scaled Down */}
        <div className="text-center relative flex items-center justify-center h-16 md:h-24">
          <h2 
            className="absolute font-headline-xl text-[10vw] md:text-[6vw] font-black leading-none uppercase tracking-tighter opacity-10 whitespace-nowrap pointer-events-none select-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}
          >
            SELECTED WORKS
          </h2>
          <h3 className="relative font-headline-md text-3xl md:text-4xl lg:text-5xl font-bold text-white lowercase tracking-tight flex items-center gap-2">
            projects <span className="text-tertiary animate-pulse text-2xl">✦</span>
          </h3>
        </div>

        {/* Brutalist Pill Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex gap-2 p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            {portfolioTabs.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  className="relative px-5 py-2 rounded-full font-label-mono text-[10px] sm:text-xs uppercase tracking-widest transition-colors"
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 font-bold ${isActive ? 'text-black' : 'text-white/50 hover:text-white'}`}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Masonry-style Grid (using CSS Grid) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {projects.map((project, index) => {
              // Modern Bento Grid Logic
              let gridClass = ''
              if (projects.length === 4) {
                if (index === 0) gridClass = 'md:col-span-8 h-[350px] md:h-[400px]'
                else if (index === 1) gridClass = 'md:col-span-4 h-[350px] md:h-[400px]'
                else if (index === 2) gridClass = 'md:col-span-4 h-[350px] md:h-[400px]'
                else gridClass = 'md:col-span-8 h-[350px] md:h-[400px]'
              } else if (projects.length === 3) {
                if (index === 0) gridClass = 'md:col-span-8 md:row-span-2 h-[400px] md:h-[550px]'
                else gridClass = 'md:col-span-4 md:row-span-1 h-[250px] md:h-[263px]'
              } else if (projects.length === 2) {
                if (index === 0) gridClass = 'md:col-span-7 h-[350px] md:h-[500px]'
                else gridClass = 'md:col-span-5 h-[350px] md:h-[500px]'
              } else {
                gridClass = 'md:col-span-12 h-[350px] md:h-[550px]'
              }

              return (
                <motion.div
                  key={project.title}
                  className={`relative group rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors duration-500 ${gridClass}`}
                  initial={{ opacity: 0, y: 100, scale: 0.85, rotateX: -40 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -100, rotateX: 40 }}
                  viewport={{ once: false, margin: "-10% 0px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 20 
                  }}
                  style={{ perspective: 1500 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Background Image with Cinematic Hover Zoom & Object Top */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={project.thumbnail} className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-40" alt={project.title} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/60 to-transparent" />
                  </div>

                  {/* Aesthetic Content Overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-mono text-[9px] uppercase tracking-[0.1em] text-white/90">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-headline-xl text-3xl md:text-5xl font-black text-white mb-3 tracking-tighter lowercase flex items-center justify-between drop-shadow-lg">
                        {project.title}
                        <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1] shadow-xl">
                          <span className="material-symbols-outlined text-sm md:text-base -rotate-45 group-hover:rotate-0 transition-transform duration-500">arrow_forward</span>
                        </span>
                      </h3>

                      <p className="font-body-md text-white/60 line-clamp-2 max-w-xl text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Dark Cinematic Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Glass Box */}
            <motion.div
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-white/[0.02] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header / Nav */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#05070b]/50 backdrop-blur-2xl shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              
              {/* Body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-12 bg-gradient-to-b from-transparent to-[#05070b]">
                
                {/* Hero Title inside Modal */}
                <div className="pb-6 border-b border-white/10">
                  <h3 className="font-headline-xl text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter lowercase">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-mono text-[10px] uppercase tracking-widest text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Text & Actions layout FIRST */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-2">
                  <div className="flex-1">
                    <h4 className="font-headline-sm text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Project Overview</h4>
                    <p className="font-body-lg text-white/80 leading-relaxed text-base md:text-lg">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  <div className="md:w-64 flex flex-col gap-3 shrink-0">
                    <a href={selectedProject.href} className="group relative px-5 py-4 rounded-xl bg-white text-black font-label-mono text-xs uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-between overflow-hidden shadow-lg">
                      <span className="relative z-10 font-bold">Launch Project</span>
                      <span className="material-symbols-outlined text-sm relative z-10 group-hover:translate-x-1 transition-transform">east</span>
                    </a>
                    {selectedProject.media && (
                      <a href={selectedProject.media.url} target="_blank" rel="noreferrer" className="group px-5 py-4 rounded-xl bg-[#0a0e17] text-white font-label-mono text-xs uppercase tracking-widest hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between shadow-lg">
                        {selectedProject.media.label}
                        <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">visibility</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Massive Images Grid Redesigned */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {selectedProject.images?.map((img, i) => {
                    let imgClass = "rounded-2xl overflow-hidden border border-white/5 bg-[#0a0e17] flex items-center justify-center p-2 md:p-4"
                    if (i === 0) imgClass += " md:col-span-3 min-h-[300px] md:min-h-[500px]" // Hero image
                    else imgClass += " min-h-[200px] md:min-h-[250px]" // Secondary images
                    
                    return (
                      <div key={i} className={imgClass}>
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} frame ${i+1}`} 
                          className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700 rounded-xl" 
                          loading="lazy" 
                        />
                      </div>
                    )
                  })}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
