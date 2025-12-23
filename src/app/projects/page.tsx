'use client'

import { projects } from '../../contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../../utils/animations'

export default function Projects() {
  return (
    // min-h-screen ensures the page fills the view. 
    // pt-32 or pt-40 provides space for your fixed Navbar.
    <section className="min-h-screen w-full pt-0 pb-20 px-4 md:px-10">
      <div className="container max-w-7xl mx-auto">
        
        {/* HEADING SECTION */}
        <div className="relative mb-20 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-blue-500">Projects</span>
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of web applications and tools I've built. 
            Each project reflects my journey in mastering modern technologies.
          </motion.p>
        </div>
        
        {/* PROJECTS GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-[#0b1224] rounded-2xl shadow-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden group">
                <motion.div 
                  className="w-full h-full bg-gray-900"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
// Use this className for a clean, modern multi-color look
className="px-3 py-1 bg-indigo-500/10 text-emerald-400 border border-indigo-500/20 rounded-md text-[14px] font-semibold uppercase tracking-wider transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Footer Links */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    Source Code
                  </motion.a>
                  
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}