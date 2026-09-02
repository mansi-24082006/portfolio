'use client'

import { motion } from 'framer-motion'
import { codingProfiles } from '../../contents/extraData'
import { SiLeetcode, SiGithub, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si'
import { ExternalLink, Calendar, Code, ChevronRight, Github } from 'lucide-react'
import { useMemo } from 'react'

export default function CodingProfiles() {
    // Map icons
    const getIcon = (platform: string) => {
        switch (platform) {
            case 'LeetCode': return <SiLeetcode className="w-5 h-5 text-amber-500" />
            case 'GitHub': return <SiGithub className="w-5 h-5 text-slate-800 dark:text-slate-100" />
            case 'GeeksforGeeks': return <SiGeeksforgeeks className="w-5 h-5 text-emerald-600" />
            case 'HackerRank': return <SiHackerrank className="w-5 h-5 text-emerald-600" />
            default: return <Code className="w-5 h-5" />
        }
    }

    // Draw git values (simulating contribution grids cells with 21 cols x 7 rows client grids!)
    const gitCells = useMemo(() => {
        return Array.from({ length: 147 }, () => {
            const val = Math.random()
            // Fixed invalid tailwind classes to standard colors
            if (val < 0.6) return 'bg-slate-100 dark:bg-slate-800'
            if (val < 0.85) return 'bg-emerald-300 dark:bg-emerald-500/40'
            if (val < 0.95) return 'bg-emerald-400 dark:bg-emerald-500/70'
            return 'bg-emerald-500 dark:bg-emerald-500'
        })
    }, [])

    return (
        <section id="coding-profiles" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Practice Indicators
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Coding Profiles
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT: CODING PROFILES OVERVIEW PANELS */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                        {codingProfiles.map((p, index) => (
                            <motion.a
                                key={p.platform}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.06 }}
                                className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm flex flex-col justify-between hover:border-blue-500/20 hover:shadow-md transition-all group cursor-pointer"
                            >
                                <div>
                                    {/* Title platform header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                                {getIcon(p.platform)}
                                            </div>
                                            <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                                                {p.platform}
                                            </span>
                                        </div>

                                        <div
                                            className="p-1.5 rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-white/10 text-slate-400 group-hover:text-blue-500 transition-colors"
                                            title={`Visit ${p.platform} Profile`}
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </div>
                                    </div>

                                    {/* Username */}
                                    <div className="text-[11px] font-mono text-slate-400 mb-6 bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded inline-block">
                                        @{p.username}
                                    </div>

                                    {/* Metrics details */}
                                    <div className="space-y-2.5">
                                        {p.metrics.map(met => (
                                            <div key={met.label} className="flex justify-between items-center text-xs">
                                                <span className="text-slate-500 dark:text-slate-400 font-medium">
                                                    {met.label}
                                                </span>
                                                <span className="font-bold text-slate-800 dark:text-slate-200">
                                                    {met.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-end text-xs text-blue-500 font-semibold group-hover:gap-1.5 transition-all">
                                    <span>Visit Profile</span>
                                    <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* RIGHT: ACTIVITY GRAPH PANEL */}
                    <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                        Consistency
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        Simulated contribution activity
                                    </p>
                                </div>
                                <div className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Simulated Graph */}
                            <div className="w-full overflow-x-auto pb-2">
                                <div className="min-w-max grid grid-rows-7 grid-flow-col gap-1.5">
                                    {gitCells.map((bgClass, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.2, delay: (i % 21) * 0.02 }}
                                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] ${bgClass}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-100 dark:border-white/5 pt-4">
                                <span>Less</span>
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-3 h-3 rounded-[2px] bg-slate-100 dark:bg-slate-800" />
                                    <div className="w-3 h-3 rounded-[2px] bg-emerald-300 dark:bg-emerald-500/40" />
                                    <div className="w-3 h-3 rounded-[2px] bg-emerald-400 dark:bg-emerald-500/70" />
                                    <div className="w-3 h-3 rounded-[2px] bg-emerald-500 dark:bg-emerald-500" />
                                </div>
                                <span>More</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}