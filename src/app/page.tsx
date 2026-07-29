'use client'

import { motion } from 'framer-motion'
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import ProjectsShowcase from "./components/ProjectsShowcase"
import Timeline from "./components/Timeline"
import SkillsGrid from "./components/SkillsGrid"
import AchievementsShowcase from "./components/AchievementsShowcase"
import CodingProfiles from "./components/CodingProfiles"
import FAQ from "./components/FAQ"
import ContactForm from "./components/ContactForm"

export default function Home() {
  // Configured high-fidelity viewport animations helper
  const scrollReveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-90px' },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } // premium ease-out bezier
  }

  return (
    <div className="relative space-y-4">
      {/* 1. Hero / Intro with canvas visual backdrop (No initial delay block scroll to keep Hero interactive) */}
      <Hero />

      {/* 2. Key numeric statistics counters */}
      <motion.div {...scrollReveal}>
        <Stats />
      </motion.div>

      {/* 3. Story about Mansi and GTU education overview */}
      <motion.div {...scrollReveal}>
        <About />
      </motion.div>

      {/* 4. Portfolio projects showcase (Featured cases + other grid) */}
      <motion.div {...scrollReveal}>
        <ProjectsShowcase />
      </motion.div>

      {/* 5. Career Internships educational milestones flow details */}
      <motion.div {...scrollReveal}>
        <Timeline />
      </motion.div>

      {/* 6. Professional skill tags switch dashboard */}
      <motion.div {...scrollReveal}>
        <SkillsGrid />
      </motion.div>

      {/* 7. Achievements certified badges */}
      <motion.div {...scrollReveal}>
        <AchievementsShowcase />
      </motion.div>

      {/* 8. Code practices profiles metrics (LeetCode/GitHub indicators) */}
      <motion.div {...scrollReveal}>
        <CodingProfiles />
      </motion.div>

      {/* 9. FAQ quick accordion toggle cards */}
      <motion.div {...scrollReveal}>
        <FAQ />
      </motion.div>

      {/* 10. Modern contact message box */}
      <motion.div {...scrollReveal}>
        <ContactForm />
      </motion.div>
    </div>
  )
}
