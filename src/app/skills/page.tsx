'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTailwindcss, SiExpress,
  SiJsonwebtokens, SiPostman,
  SiMongodb, SiMongoose, SiMysql,
  SiGithub, SiRender, SiVercel
} from 'react-icons/si'

/* ===================== DATA ===================== */

const categories = {
  Frontend: [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80 },
    { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 78 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 75 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 72 },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 70 },
    { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#d63aff', level: 65 },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 75 },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 68 },
    { name: 'Mongoose', icon: SiMongoose, color: '#880000', level: 66 },
    { name: 'MySQL', icon: SiMysql, color: '#00758F', level: 64 },
  ],
  Tools: [
    { name: 'Git', icon: FaGit, color: '#F05032', level: 80 },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 78 },
    { name: 'Render', icon: SiRender, color: '#46E3B7', level: 70 },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 75 },
  ],
} as const

type CategoryKey = keyof typeof categories

/* ===================== ANIMATIONS ===================== */

const containerAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -10 },
}

const cardAnim = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

/* ===================== COMPONENT ===================== */

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>('Frontend')

  return (
    <section className="py-1 flex justify-center">
      <div className="max-w-6xl w-full px-5 mb-20 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <p className="text-gray-400 mb-12">
          Select a category to explore my technical expertise.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {(Object.keys(categories) as CategoryKey[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-400 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="flex justify-center gap-5 flex-wrap"
            variants={containerAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {categories[active].map((skill, i) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={i}
                  variants={cardAnim}
                  whileHover={{ scale: 1.05 }}
                  className="relative group w-[155px] aspect-[4/5] flex items-center justify-center overflow-hidden rounded-3xl p-[1.5px]"
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear' as const,
                    }}
                    style={{
                      background: `conic-gradient(
                        from 0deg,
                        transparent 65%,
                        ${skill.color} 85%,
                        transparent 100%
                      )`,
                    }}
                  />

                  {/* Card */}
                  <div className="relative z-10 w-full h-full bg-[#0b1224] rounded-[15px] flex flex-col items-center justify-center gap-2 border border-white/5 px-3">
                    <Icon
                      className="text-5xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />

                    <p className="text-gray-300 text-sm tracking-widest uppercase">
                      {skill.name}
                    </p>

                    <span className="text-xs text-gray-400">
                      {skill.level}%
                    </span>

                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
