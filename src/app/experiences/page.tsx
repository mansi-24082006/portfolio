'use client'

import { useState } from 'react'
import {
  achievements,
  certifications,
} from '../../contents/experience'

import {
  FaBriefcase,
  FaTools,
  FaCalendarAlt,
  FaTrophy,
  FaCertificate,
} from 'react-icons/fa'

import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
} from '../../utils/animations'

const tabs = [ 'Achievements', 'Certifications']

export default function Experiences() {
  const [activeTab, setActiveTab] = useState('Achievements')

  return (
    <div className="container max-w-7xl mx-auto py-4">

      {/* ================= TABS ================= */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <AnimatePresence mode="wait">

        {/* ================= EXPERIENCE =================
        {activeTab === 'Experience' && (
          <motion.section
            key="experience"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <motion.article
                  key={index}
                  className="bg-white dark:bg-dark/50 rounded-xl shadow-md"
                  variants={fadeInUp}
                  {...cardHoverSmall}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-1">
                      {exp.role}
                    </h2>

                    <p className="text-sm text-secondary mb-3 flex items-center gap-2">
                      <FaBriefcase />
                      {exp.company}
                    </p>

                    <p className="text-secondary mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-secondary">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        {exp.duration}
                      </div>

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
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        )} */}

        {/* ================= ACHIEVEMENTS ================= */}
      {activeTab === 'Achievements' && (
  <motion.section
    key="achievements"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    exit={{ opacity: 0, y: 20 }}
    className="py-10" // Standard Tailwind spacing
  >
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          {/* Image Container */}
          <div className="w-full h-70 bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover" // object-cover fills the space nicely
              />
            ) : (
              <FaTrophy className="text-primary text-5xl" />
            )}
          </div>

          {/* Content Wrapper */}
          <div className="p-6 flex flex-col flex-grow text-center">
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
              {item.description}
            </p>

            {/* Year - Pushed to bottom */}
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {item.year}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
)}

        {/* ================= CERTIFICATIONS ================= */}
        {activeTab === 'Certifications' && (
          <motion.section
            key="certifications"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md flex flex-col"
                  variants={fadeInUp}
                  {...cardHoverSmall}
                >
                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FaCertificate className="text-primary" />
                      <h3 className="font-semibold">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-secondary mb-1">
                      {cert.issuer}
                    </p>

                    <span className="text-xs text-secondary">
                      {cert.year}
                    </span>
                  </div>

                  {/* Button */}
                  {cert.certificateFile && (
                    <a
                      href={cert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto mx-auto flex items-center justify-center w-[150px] h-[40px] text-sm font-medium text-gray-800 bg-blue-200 rounded-xl hover:opacity-90 transition"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

      </AnimatePresence>
    </div>
  )
}
