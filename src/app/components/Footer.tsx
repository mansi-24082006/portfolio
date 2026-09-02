'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiX } from 'react-icons/si'

export default function Footer() {
  const socialActions = [
    { href: 'https://github.com/mansi-tech99', icon: <FaGithub />, title: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2', icon: <FaLinkedin />, title: 'LinkedIn' },
    { href: 'https://leetcode.com/u/mansivag2006/', icon: <SiLeetcode />, title: 'LeetCode' },
    { href: 'https://x.com/VaghasiyaM2408?t=BMQhXdF6LLxuXpLAh8-tuw&s=09', icon: <SiX />, title: 'X (Twitter)' },
    { href: 'mailto:vaghasiyamansi80@gmail.com', icon: <FaEnvelope />, title: 'Mail' }
  ]

  const navLinks = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects-section', label: 'Projects' },
    { href: '/#timeline', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <footer className="relative z-30 bg-white/50 dark:bg-[#0f172a]/70 border-t border-black/5 dark:border-white/5 pt-16 pb-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-black/5 dark:border-white/5">

          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-4 py-2 transition-all hover:border-blue-500 hover:shadow-lg"
            >
              <span className="font-mono text-blue-600 dark:text-blue-400 text-lg">
                {"<"}
              </span>

              <span className="font-semibold text-slate-900 dark:text-white">
                Mansi
              </span>

              <span className="font-mono text-blue-600 dark:text-blue-400 text-lg">
                {"/>"}__
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Designing type-safe Frontends, fast Socket backends, and modular AI integrations. Creating developer solutions engineered for speed and aesthetic clean details.
            </p>


          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-550 dark:text-slate-400">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Connect With Me
            </h3>

            <div className="flex flex-wrap gap-2">
              {socialActions.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-550 dark:text-slate-400 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/20 transition-all"
                  title={soc.title}
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            <p className="text-[11px] text-slate-400">
              Drop an email to start collaborative projects or talk details.
            </p>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-450 dark:text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Mansi Vaghasiya. Built with Next.js 15, Tailwind, and Framer Motion.
          </p>

          <div className="flex gap-4">
            <span className="hover:underline select-none">Terms of use</span>
            <span className="hover:underline select-none">Privacy principles</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
