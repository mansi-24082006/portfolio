'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'
import CommandPalette from './CommandPalette'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Keyboard } from 'lucide-react'
import Lenis from 'lenis'

export default function ThemeBodyWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme()
    const [paletteOpen, setPaletteOpen] = useState(false)
    const [showConsoleTip, setShowConsoleTip] = useState(true)

    // Setup Lenis smooth scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutExponent
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
        })

        let rafId: number
        function raf(time: number) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
            cancelAnimationFrame(rafId)
        }
    }, [])

    // Tracker for scroll progress bar
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Global listener for Ctrl+K shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                setPaletteOpen(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Auto-hide console shortcut advice badge after some scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowConsoleTip(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`min-h-screen relative transition-colors duration-500 overflow-x-hidden ${theme === 'dark'
            ? 'bg-[#0f172a] text-slate-100 dark'
            : 'bg-white text-slate-900'
            }`}>
            {/* Scroll Progress Bar */}
            <motion.div id="scroll-progress" style={{ scaleX }} />

            {/* Noise Texture Overlays */}
            <div className="noise-overlay" />

            {/* Scientific Background Grid lines */}
            <div className={`absolute inset-0 -z-50 pointer-events-none opacity-20 ${theme === 'dark' ? 'grid-bg dots-bg' : 'light-grid-bg dots-bg'
                }`} />

            {/* Ambient background spotlight glow circles */}
            <div className="hidden lg:block absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-40" />
            <div className="hidden lg:block absolute top-[50%] right-[10%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-40" />
            <div className="hidden lg:block absolute bottom-[10%] left-[15%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-40" />


            {/* Quick Access Keyboard triggers warning badge */}
            {showConsoleTip && (
                <motion.button
                    onClick={() => setPaletteOpen(true)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed bottom-6 right-6 z-40 bg-slate-900/90 text-white dark:bg-white/90 dark:text-slate-900 px-3.5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 border border-slate-700/50 dark:border-white/20 transition-all hover:scale-105 duration-200"
                >
                    <Keyboard className="w-4 h-4 font-bold" />
                    <span>Press <kbd className="bg-slate-700 dark:bg-slate-200 dark:text-slate-900 px-1 py-0.5 rounded ml-0.5">Ctrl+K</kbd> to explore</span>
                </motion.button>
            )}

            {/* Navigation bars templates */}
            {/* Passing setPaletteOpen to open palette from search buttons on Navbar */}
            <Navbar onOpenPalette={() => setPaletteOpen(true)} />

            {/* Main landing sections wrapper */}
            <main className="relative z-10 w-full">
                {children}
            </main>

            {/* Command Palette popup interface component */}
            <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

            {/* Footer component */}
            <Footer />
        </div>
    )
}
