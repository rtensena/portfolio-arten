import { motion } from 'framer-motion'

const skills = [
  {
    title: 'PROGRAMMING',
    position: 'P1',
    items: [
      { name: 'Python', iconClass: 'devicon-python-plain', iconColor: '#3776AB' },
      { name: 'Java', iconClass: 'devicon-java-plain', iconColor: '#D82C20' },
      { name: 'Dart', iconClass: 'devicon-dart-plain', iconColor: '#0175C2' },
      { name: 'PHP', iconClass: 'devicon-php-plain', iconColor: '#777BB3' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain', iconColor: '#F7DF1E' },
      { name: 'C++', iconClass: 'devicon-cplusplus-plain', iconColor: '#00599C' }
    ]
  },
  {
    title: 'DATA & ML',
    position: 'P2',
    items: [
      { name: 'Python', iconClass: 'devicon-python-plain', iconColor: '#3776AB' },
      { name: 'R', iconClass: 'devicon-r-plain', iconColor: '#276DC3' },
      { name: 'SQL', isMaterial: true, iconClass: 'database', iconColor: '#E38C00' },
      { name: 'MySQL', iconClass: 'devicon-mysql-plain', iconColor: '#00758F' },
      { name: 'Excel/Google Sheets', isMaterial: true, iconClass: 'table_view', iconColor: '#107C41' }
    ]
  },
  {
    title: 'QUALITY ASSURANCE',
    position: 'P3',
    items: [
      { name: 'Manual Testing', isMaterial: true, iconClass: 'rule', iconColor: '#ff7b72' },
      { name: 'Functional & System', isMaterial: true, iconClass: 'fact_check', iconColor: '#79c0ff' },
      { name: 'UAT', isMaterial: true, iconClass: 'verified_user', iconColor: '#2fd9f4' },
      { name: 'Bug Tracking', isMaterial: true, iconClass: 'bug_report', iconColor: '#ff7b72' },
      { name: 'Test Docs', isMaterial: true, iconClass: 'description', iconColor: '#a5d6ff' }
    ]
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    position: 'P4',
    items: [
      { name: 'React', iconClass: 'devicon-react-original', iconColor: '#61DAFB' },
      { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original', iconColor: '#06B6D4' },
      { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain', iconColor: '#7952B3' },
      { name: 'Three.js', iconClass: 'devicon-threejs-original', iconColor: '#FFFFFF' },
      { name: 'Vite', iconClass: 'devicon-vitejs-plain', iconColor: '#646CFF' },
      { name: 'Framer Motion', isMaterial: true, iconClass: 'animation', iconColor: '#E82B96' },
      { name: 'Anime.js', isMaterial: true, iconClass: 'motion_photos_on', iconColor: '#FF4C4D' },
      { name: 'CodeIgniter', iconClass: 'devicon-codeigniter-plain', iconColor: '#EF4223' },
      { name: 'PyTorch', iconClass: 'devicon-pytorch-plain', iconColor: '#EE4C2C' }
    ]
  },
  {
    title: 'TOOLS & TECH',
    position: 'P5',
    items: [
      { name: 'GitHub', iconClass: 'devicon-github-original', iconColor: '#FFFFFF' },
      { name: 'Figma', iconClass: 'devicon-figma-plain', iconColor: '#F24E1E' },
      { name: 'Canva', iconClass: 'devicon-canva-original', iconColor: '#00C4CC' },
      { name: 'GCP', iconClass: 'devicon-googlecloud-plain', iconColor: '#4285F4' },
      { name: 'Colab', isMaterial: true, iconClass: 'science', iconColor: '#F9AB00' },
      { name: 'Postman', isMaterial: true, iconClass: 'api', iconColor: '#FF6C37' }
    ]
  },
  {
    title: 'SOFT SKILLS',
    position: 'P6',
    accent: true,
    items: [
      { name: 'Communication', isMaterial: true, iconClass: 'chat_bubble_outline', iconColor: '#2fd9f4' },
      { name: 'Adaptability', isMaterial: true, iconClass: 'sync', iconColor: '#2fd9f4' },
      { name: 'Responsibility', isMaterial: true, iconClass: 'verified', iconColor: '#2fd9f4' },
      { name: 'Team Collaboration', isMaterial: true, iconClass: 'group', iconColor: '#2fd9f4' },
      { name: 'Continuous Learning', isMaterial: true, iconClass: 'menu_book', iconColor: '#2fd9f4' }
    ]
  }
]

export function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-gutter py-16 md:py-20 relative" id="skills">
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10 items-stretch">
        
        {/* Left Vertical Banner (Desktop) - Full Height */}
        <div className="hidden md:block w-auto flex-shrink-0 relative">
          <motion.div 
            className="h-full bg-[#15151e] border-l-8 border-[#E10600] shadow-2xl rounded-r-xl overflow-hidden group relative"
            initial={{ opacity: 0, y: -150, skewY: -5 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            viewport={{ once: false, margin: "-10% 0px", amount: 0.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
          >
            {/* Hover Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-full transition-all duration-[1.5s] ease-in-out pointer-events-none" />
            
            {/* Sticky Text Container */}
            <div className="sticky top-32 flex flex-row items-center justify-center px-5 lg:px-6 py-12">
              
              <h2 
                className="font-headline-lg text-3xl lg:text-5xl font-black text-white group-hover:text-[#E10600] transition-colors duration-500 uppercase tracking-[0.15em] italic whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                TECH STACK
              </h2>
              
              {/* Divider Line */}
              <div className="w-[2px] h-32 bg-white/10 group-hover:bg-[#E10600]/50 transition-colors duration-500 mx-3 lg:mx-4" />
              
              <p 
                className="font-label-mono text-[10px] lg:text-xs uppercase tracking-[0.25em] text-[#E10600] group-hover:text-white/70 transition-colors duration-500 font-bold whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                SKILLS & TOOLKIT CONFIGURATION
              </p>
              
            </div>
          </motion.div>
        </div>

        {/* Mobile Horizontal Banner (Shown only on small screens) */}
        <motion.div 
          className="md:hidden flex flex-col gap-1 w-full mb-6 group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-stretch shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-[1.5s] ease-in-out pointer-events-none" />
            <div className="bg-[#E10600] w-3 flex-shrink-0" />
            <div className="bg-[#15151e] flex items-center px-4 py-3 border-r-4 border-white/10 flex-1">
              <h2 className="font-headline-lg text-2xl font-black text-white group-hover:text-[#E10600] transition-colors duration-500 uppercase tracking-[0.15em] italic">
                TECH STACK
              </h2>
            </div>
          </div>
          <p className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-[#E10600] group-hover:text-white/70 transition-colors duration-500 font-bold px-4 mt-2">
            Skills & Toolkit Configuration
          </p>
        </motion.div>

        {/* F1 TV Broadcast Starting Grid Layout */}
        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 lg:gap-x-10 pb-12">
          {skills.map((skill, index) => {
            const isLeftColumn = index % 2 === 0
            
            return (
              <motion.div
                key={skill.title}
                className={`relative flex flex-col bg-[#15151e] border-r-4 ${skill.accent ? 'border-[#E10600]' : 'border-white/10'} shadow-xl ${isLeftColumn ? '' : 'lg:mt-12'}`}
                initial={{ opacity: 0, x: isLeftColumn ? -150 : 150, skewX: isLeftColumn ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: false, margin: "-10% 0px", amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 120, damping: 20 }}
              >
                
                {/* Driver/Category Name Row */}
                <div className="flex items-stretch bg-[#1e1e2c]">
                  {/* Position Box */}
                  <div className={`flex items-center justify-center px-4 md:px-5 font-headline-lg text-xl md:text-2xl font-black italic text-white ${skill.position === 'P1' ? 'bg-[#E10600]' : 'bg-white/10'}`}>
                    {skill.position}
                  </div>
                  {/* Name */}
                  <div className="flex items-center px-4 py-3 font-headline-md text-lg md:text-xl font-bold uppercase tracking-wider text-white">
                    {skill.title}
                  </div>
                </div>

                {/* Toolkit/Sponsors Row */}
                <div className="p-4 md:p-5 flex-1 bg-[#15151e]">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <div 
                        key={item.name} 
                        className="flex items-center gap-2 p-1.5 pr-3 bg-black/40 border-l-2 border-white/20 hover:border-white transition-colors duration-200"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          {item.isMaterial ? (
                            <span className="material-symbols-outlined text-[14px]" style={{ color: item.iconColor }}>{item.iconClass}</span>
                          ) : (
                            <i className={`${item.iconClass} text-[14px]`} style={{ color: item.iconColor }}></i>
                          )}
                        </div>
                        <span className="font-label-mono text-[11px] font-bold text-white/80 uppercase tracking-wider">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
