'use client'

import { projects } from '../../contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../../utils/animations'

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-14 text-center text-gray-900 dark:text-white"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group flex flex-col bg-white dark:bg-dark/60 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* Project Image */}
              <div className="relative h-[200px] mb-5 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1000px) 100vw, (max-width: 1500px) 50vw, 33vw"
                />
              </div>

              {/* Title */}
              <motion.h3
                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Links */}
              <motion.div
                className="mt-auto flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  Code
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-4 w-4" />
                  Live Demo
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
