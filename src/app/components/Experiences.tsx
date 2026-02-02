'use client'

import { experiences } from '../../contents/experience'
import { FaBriefcase, FaTools, FaCalendarAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'

export default function Experience() {
  const hoverTransition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  }

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
              transition={hoverTransition}
            >
              {/* Role */}
              <motion.h3
                className="text-xl font-semibold mb-1 text-gray-800 dark:text-white"
                whileHover={{ x: 6 }}
                transition={hoverTransition}
              >
                {exp.role}
              </motion.h3>

              {/* Company */}
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-3">
                <FaBriefcase className="mr-2 text-primary" />
                {exp.company}
              </p>

              {/* Description */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {exp.description}
              </motion.p>

              {/* Duration & Technologies */}
              <motion.div
                className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {/* Duration */}
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.08 }}
                  transition={hoverTransition}
                >
                  <FaCalendarAlt className="mr-2 text-primary" />
                  {exp.duration}
                </motion.span>

                {/* Technologies */}
                <div className="flex items-center gap-2 flex-wrap">
                  <FaTools className="text-primary" />
                  {exp.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
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
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Professional Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
