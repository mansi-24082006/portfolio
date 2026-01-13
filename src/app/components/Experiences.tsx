'use client'

import { experiences } from '../../contents/experience'
import { FaBriefcase, FaTools, FaCalendarAlt } from 'react-icons/fa'
import { motion, Variants } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'

export default function Experience() {
  // ✅ Correctly typed transition (FIX)
  const hoverTransition = {
    type: 'spring' as const,
    stiffness: 300,
  }

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUp as Variants}
          initial="initial"
          animate="animate"
        >
          Experience
        </motion.h2>

        {/* Experience Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer as Variants}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp as Variants}
              whileHover={{ scale: 1.03 }}
              transition={hoverTransition}
            >
              {/* Role */}
              <motion.h3
                className="text-xl font-semibold mb-1"
                whileHover={{ x: 5 }}
                transition={hoverTransition}
              >
                {exp.role}
              </motion.h3>

              {/* Company */}
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-3">
                <FaBriefcase className="mr-2" />
                {exp.company}
              </p>

              {/* Description */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {exp.description}
              </motion.p>

              {/* Duration & Technologies */}
              <motion.div
                className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={hoverTransition}
                >
                  <FaCalendarAlt className="mr-2" />
                  {exp.duration}
                </motion.span>

                <div className="flex items-center gap-2 flex-wrap">
                  <FaTools />
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="inline-block bg-primary text-white px-8 py-3 rounded-lg">
              Professional Journey
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
