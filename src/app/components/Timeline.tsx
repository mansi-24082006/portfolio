'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { timelineItems } from '../../contents/experience'
import { Briefcase, GraduationCap, Code2, Award, Users, CheckCircle2 } from 'lucide-react'

export default function Timeline() {
    const [filter, setFilter] = useState<'all' | 'internship' | 'education' | 'opensource' | 'hackathon' | 'leadership'>('all')

    const filterTabs = [
        { value: 'all', label: 'All Events' },
        { value: 'internship', label: 'Internships' },
        { value: 'education', label: 'Education' },
        { value: 'opensource', label: 'Open Source' },
    ] as const

    const filteredItems = timelineItems.filter(item => filter === 'all' || item.category === filter)

    // Map category icons
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'internship': return <Briefcase className="w-4 h-4 text-blue-500" />
            case 'education': return <GraduationCap className="w-4 h-4 text-emerald-500" />
            case 'opensource': return <Code2 className="w-4 h-4 text-purple-500" />
            case 'leadership': return <Users className="w-4 h-4 text-pink-500" />
            default: return <Briefcase className="w-4 h-4 text-blue-500" />
        }
    }

    // Map border styling dynamically
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'internship': return 'border-blue-505 dark:border-blue-500 bg-blue-500/10'
            case 'education': return 'border-emerald-505 dark:border-emerald-500 bg-emerald-500/10'
            case 'opensource': return 'border-purple-505 dark:border-purple-500 bg-purple-500/10'
            case 'hackathon': return 'border-amber-505 dark:border-amber-500 bg-amber-500/10'
            case 'leadership': return 'border-pink-505 dark:border-pink-500 bg-pink-500/10'
            default: return 'border-blue-500 bg-blue-500/10'
        }
    }

    return (
        <section id="timeline" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        My Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Career Timeline
                    </motion.h2>
                </div>

                {/* Tab switcher filter */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-14">
                    {filterTabs.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setFilter(tab.value)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${filter === tab.value
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Vertical Timeline container */}
                <div className="relative border-l-2 border-slate-100 dark:border-white/5 pl-6 sm:pl-8 space-y-12">

                    <AnimatePresence mode="wait">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 15 }}
                                transition={{ duration: 0.3, delay: idx * 0.08 }}
                                className="relative"
                            >
                                {/* Visual marker dot icon along line */}
                                <div className={`absolute -left-[43px] sm:-left-[51px] top-1.5 p-2 rounded-xl border flex items-center justify-center bg-white dark:bg-slate-900 ${getCategoryColor(item.category)}`}>
                                    {getCategoryIcon(item.category)}
                                </div>

                                {/* Timeline Card details */}
                                <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm space-y-3.5 hover:border-blue-500/20 transition-colors">

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-350 font-medium">
                                                {item.subtitle}
                                            </p>
                                        </div>

                                        <span className="inline-block self-start sm:self-center px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider border border-black/5 dark:border-white/5">
                                            {item.date}
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Highlights section list */}
                                    {item.highlights && (
                                        <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                                            {item.highlights.map((high, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{high}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>

                </div>

            </div>
        </section>
    )
}
