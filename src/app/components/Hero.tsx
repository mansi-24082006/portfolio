'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiLeetcode, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si'
import { FolderGit, ArrowDownToLine, Mail, Sparkles, Cpu, Layers, Globe } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import TypedText from './TypedText' // Assuming this component exists in your folder

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Floating background canvas stars logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let stars: Array<{ x: number; y: number; r: number; vx: number; vy: number; baseOpacity: number }> = []

    const init = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || 650
      stars = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        baseOpacity: Math.random() * 0.5 + 0.3
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(star => {
        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37, 99, 235, ${star.baseOpacity * (Math.sin(Date.now() * 0.001 + star.x) * 0.3 + 0.7)})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', init)
    init()
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', init)
    }
  }, [])

  const socialLinks = [
    { href: 'https://github.com/mansi-24082006', icon: <FaGithub />, label: 'GitHub', color: 'hover:text-white hover:bg-slate-800 hover:border-slate-700' },
    { href: 'https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2', icon: <FaLinkedin />, label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/50' },
    { href: 'https://leetcode.com/u/mansivag2006/', icon: <SiLeetcode />, label: 'LeetCode', color: 'hover:text-amber-500 hover:bg-amber-900/30 hover:border-amber-500/50' },
    { href: 'mailto:vaghasiyamansi80@gmail.com', icon: <FaEnvelope />, label: 'Email', color: 'hover:text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-500/50' }
  ]

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden border-b border-black/5 dark:border-white/5 bg-[#030712]">

      {/* Floating Canvas Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Abstract Background Glows for Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-900/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT: INTRO TEXT */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              Available for new opportunities
            </motion.div>

            {/* Large Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.1] text-white mb-4 drop-shadow-md"
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Mansi Vaghasiya</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-5"
            >
              Building AI-Powered Web Experiences
            </motion.h2>

            {/* Rotating Typed list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-md sm:text-lg md:text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2 h-8"
            >
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              <TypedText
                phrases={[
                  'Software Engineer',
                  'MERN Stack Specialist',
                  'Next.js & TypeScript Developer',
                  'Real-Time App Architect',
                  'Open Source Contributor'
                ]}
              />
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-8 text-center lg:text-left font-light"
            >
              I engineer scalable, high-performance web products. Specializing in real-time Node backends, seamless front-end layouts, and clean system architecture that solves real-world problems.
            </motion.p>

            {/* Premium CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              {/* Primary Action */}
              <button
                onClick={() => handleScrollTo('projects-section')}
                className="pointer-cursor group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FolderGit className="w-4.5 h-4.5 relative z-10" />
                <span className="relative z-10">Explore Work</span>
              </button>

              {/* Secondary Action: Resume */}
              <a
                href="https://drive.google.com/file/d/1MSGQV0Nuu2yGTIaMCy-Cq2Ua4e0shgRC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-cursor group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 font-bold text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <ArrowDownToLine className="w-4.5 h-4.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>

              {/* Tertiary Action: Hire Me */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="pointer-cursor group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400/50 text-cyan-400 font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,211,238,0)] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Mail className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Social icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-cursor p-3 rounded-xl text-lg text-slate-400 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/50"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

          </div>

          {/* RIGHT CONTENT: PREMIUM GLASSMORPHIC DASHBOARD */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full max-w-lg mx-auto relative mt-10 lg:mt-0 perspective-1000">

            {/* Huge Glowing Orb behind dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-500/20 blur-[70px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ rotateX: 10, rotateY: -15, opacity: 0, scale: 0.9 }}
              animate={{ rotateX: 0, rotateY: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
              className="relative w-full rounded-2xl bg-[#0f172a]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-8 overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500"
            >
              {/* Glass glare effect */}
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">System Architect</h3>
                    <p className="text-xs text-slate-400 font-mono">ID: Mansi-2408</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                </div>
              </div>

              {/* Core Technologies Grid */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-purple-400" /> Full Stack Development</span>
                    <span className="text-cyan-400 font-mono">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -skew-x-12" />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-blue-400" /> API & Backend Systems</span>
                    <span className="text-blue-400 font-mono">70%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full relative"
                    />
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-3 font-mono uppercase tracking-wider">Current Stack</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
                    { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
                    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
                    { icon: <SiMongodb className="text-emerald-500" />, name: 'MongoDB' },
                    { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 cursor-default transition-colors"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Decorative Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 lg:-right-8 bg-[#0f172a]/80 backdrop-blur-xl border border-cyan-500/30 px-4 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.15)] z-30 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-100 tracking-wide">CE 7th Sem</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}