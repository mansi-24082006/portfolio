'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Search, FileText } from 'lucide-react'

interface NavbarProps {
  onOpenPalette?: () => void
}

export default function Navbar({ onOpenPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSec, setActiveSec] = useState('hero')

  const menuItems = [
    { href: '/#hero', label: 'Home', id: 'hero' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/#projects-section', label: 'Projects', id: 'projects-section' },
    { href: '/#timeline', label: 'Experience', id: 'timeline' },
    { href: '/#skills', label: 'Skills', id: 'skills' },
    { href: '/#achievements', label: 'Achievements', id: 'achievements' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ]

  // Track window scroll for navbar styling and active sections using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    // Robust active section tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when section is comfortably in view
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSec(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [menuItems])

  // Handle smooth scroll when navigating / page load with hash
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          // Adjust scroll position to account for fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }
    }

    handleHashScroll()
    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [pathname])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800'
        : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">

        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="group inline-flex items-center gap-1.5 rounded-lg border border-transparent px-2 py-1 transition-all hover:border-slate-200 dark:hover:border-slate-800"
          aria-label="Home"
        >
          <span className="font-mono text-blue-600 dark:text-blue-400 text-lg font-bold">
            {"<"}
          </span>
          <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
            Mansi
          </span>
          <span className="font-mono text-blue-600 dark:text-blue-400 text-lg font-bold flex items-center">
            {"/>"}__
          </span>
        </Link>

        {/* Desktop Navbar List Items */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSec === item.id
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md ${isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-x-3 bottom-0 h-[2px] rounded-t-full bg-blue-600 dark:bg-blue-400"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Quick Actions Panel */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              className="group flex items-center gap-2 p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Search className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              <kbd className="hidden sm:inline-block text-[10px] font-mono bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href="https://drive.google.com/file/d/1MSGQV0Nuu2yGTIaMCy-Cq2Ua4e0shgRC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm hover:shadow transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Header Triggers */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={onOpenPalette}
            aria-label="Search"
            className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-screen bg-white/98 dark:bg-[#080c14]/98 backdrop-blur-2xl z-50 lg:hidden flex flex-col"
          >
            {/* Header row in mobile overlay */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-white/5">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-3.5 py-1.5"
              >
                <span className="font-mono text-blue-600 dark:text-blue-400 text-sm font-bold">
                  {"<"}
                </span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">
                  Mansi
                </span>
                <span className="font-mono text-blue-600 dark:text-blue-400 text-sm font-bold">
                  {"/>"}__
                </span>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Centered Large Menu Items */}
            <div className="flex-1 flex flex-col justify-center items-center px-6">
              <ul className="w-full max-w-sm flex flex-col gap-4 text-center">
                {menuItems.map((item, index) => {
                  const isActive = activeSec === item.id
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-2xl font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${isActive
                            ? 'text-blue-600 dark:text-blue-400 scale-105'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </div>

            {/* Bottom Actions Area */}
            <div className="p-8 border-t border-slate-100 dark:border-white/5 flex flex-col gap-4 items-center bg-slate-50/50 dark:bg-slate-950/20">
              <a
                href="https://drive.google.com/file/d/1MSGQV0Nuu2yGTIaMCy-Cq2Ua4e0shgRC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-sm inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Open Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}