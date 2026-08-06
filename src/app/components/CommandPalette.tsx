'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Terminal, Moon, Sun, ArrowRight, X, Sparkles, FileText, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../../contents/projects'
import { RESUME_URL } from '../../contents/extraData'
import { useRouter } from 'next/navigation'

interface CommandPaletteProps {
    isOpen: boolean
    onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
    const { theme, toggleTheme } = useTheme()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    // Basic links mapping
    const navItems = [
        { label: 'Navigate to Home', action: () => handleScroll('hero'), category: 'Navigation' },
        { label: 'Navigate to About Me', action: () => handleScroll('about'), category: 'Navigation' },
        { label: 'Navigate to Projects', action: () => handleScroll('projects-section'), category: 'Navigation' },
        { label: 'Navigate to Career Timeline', action: () => handleScroll('timeline'), category: 'Navigation' },
        { label: 'Navigate to Technical Skills', action: () => handleScroll('skills'), category: 'Navigation' },
        { label: 'Navigate to Achievements', action: () => handleScroll('achievements'), category: 'Navigation' },
        { label: 'Navigate to FAQ Accordions', action: () => handleScroll('faq'), category: 'Navigation' },
        { label: 'Navigate to Contact Form', action: () => handleScroll('contact'), category: 'Navigation' },
        { label: 'Toggle Dark / Light Theme', action: () => { toggleTheme(); onClose(); }, category: 'Preferences' },
        { label: 'Download Resume Portfolio', action: () => { window.open(RESUME_URL, '_blank'); onClose(); }, category: 'Actions' }
    ]

    // Map projects as actionable search items
    const projectItems = projects.map(p => ({
        label: `Project: ${p.title} (${p.technologies.slice(0, 3).join(', ')})`,
        action: () => {
            // Trigger scroll to project list or open its case study
            handleScroll(`project-card-${p.title.replace(/\s+/g, '-').toLowerCase()}`)
        },
        category: 'Projects'
    }))

    const allItems = [...navItems, ...projectItems]

    // Filter items based on query
    const filtered = allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )

    const handleScroll = (id: string) => {
        onClose()
        const element = document.getElementById(id)
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
        } else {
            router.push(`/#${id}`)
        }
    }

    // Hotkey listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                if (isOpen) onClose()
                else onClose() // Toggle trigger handled is parent
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 50)
            setSelectedIndex(0)
        }
    }, [isOpen])

    // Handle key controls in search list
    const handleListKeys = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex(prev => (prev + 1) % Math.max(1, filtered.length))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex(prev => (prev - 1 + filtered.length) % Math.max(1, filtered.length))
        } else if (e.key === 'Enter') {
            e.preventDefault()
            if (filtered[selectedIndex]) {
                filtered[selectedIndex].action()
            }
        } else if (e.key === 'Escape') {
            e.preventDefault()
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
                    />

                    {/* Palette Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl z-10 flex flex-col"
                        onKeyDown={handleListKeys}
                    >
                        {/* Search Input bar */}
                        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/60">
                            <Search className="w-5 h-5 text-slate-400" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={e => {
                                    setQuery(e.target.value)
                                    setSelectedIndex(0)
                                }}
                                placeholder="Search command palette or projects... (Arrows to navigate)"
                                className="w-full bg-transparent border-0 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:ring-0"
                            />
                            <button
                                onClick={onClose}
                                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-white/5 text-slate-400"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* List results */}
                        <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
                            {filtered.length === 0 ? (
                                <div className="py-8 text-center text-slate-400 text-sm">
                                    No matching action items found for &quot;{query}&quot;
                                </div>
                            ) : (
                                filtered.map((item, idx) => {
                                    const isSel = idx === selectedIndex
                                    return (
                                        <button
                                            key={idx}
                                            onClick={item.action}
                                            onMouseEnter={() => setSelectedIndex(idx)}
                                            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-sm transition-all duration-150 ${isSel
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                {item.category === 'Navigation' && <Terminal className="w-4 h-4 opacity-70" />}
                                                {item.category === 'Preferences' && (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                                                {item.category === 'Actions' && <FileText className="w-4 h-4" />}
                                                {item.category === 'Projects' && <Sparkles className="w-4 h-4 text-amber-400" />}
                                                <span>{item.label}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded leading-none ${isSel ? 'bg-blue-800/40 text-blue-100' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
                                                    }`}>
                                                    {item.category}
                                                </span>
                                                {isSel && <ArrowRight className="w-3.5 h-3.5 animate-pulse" />}
                                            </div>
                                        </button>
                                    )
                                })
                            )}
                        </div>

                        {/* Bottom help bar */}
                        <div className="px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-between text-slate-400 text-[11px]">
                            <div className="flex items-center gap-3">
                                <span><kbd className="bg-slate-200 dark:bg-white/5 px-1 py-0.5 rounded text-[9px]">↑↓</kbd> to navigate</span>
                                <span><kbd className="bg-slate-200 dark:bg-white/5 px-1 py-0.5 rounded text-[9px]">Enter</kbd> to select</span>
                                <span><kbd className="bg-slate-200 dark:bg-white/5 px-1 py-0.5 rounded text-[9px]">ESC</kbd> to close</span>
                            </div>
                            <span className="opacity-75">Press <kbd className="bg-slate-200 dark:bg-white/5 px-1.5 py-0.5 rounded text-[9px]">Ctrl+K</kbd> anytime</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
