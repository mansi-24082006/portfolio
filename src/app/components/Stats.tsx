'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../contents/extraData'
import { Box, Code2, FolderGit, GraduationCap, Flame, CalendarClock } from 'lucide-react'

// Simple animated counter hook
function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const end = value
        const duration = 1500 // count up in 1.5 seconds
        const intervalTime = 20 // 50 ticks per second
        const step = (end - start) / (duration / intervalTime)

        const timer = setInterval(() => {
            start += step
            if (start >= end) {
                clearInterval(timer)
                setCount(end)
            } else {
                setCount(start)
            }
        }, intervalTime)

        return () => clearInterval(timer)
    }, [isInView, value])

    return (
        <span ref={ref} className="font-mono tracking-tight font-black">
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
            {suffix}
        </span>
    )
}

export default function Stats() {
    // Map icons to labels
    const getIcon = (label: string) => {
        switch (label) {
            case 'Projects Completed': return <FolderGit className="w-6 h-6 text-blue-500" />
            case 'GitHub Repositories': return <Code2 className="w-6 h-6 text-purple-500" />
            case 'Expert Technologies': return <Box className="w-6 h-6 text-cyan-500" />
            case 'Academic CGPA': return <GraduationCap className="w-6 h-6 text-emerald-500" />
            case 'LeetCode Problems': return <Flame className="w-6 h-6 text-amber-500" />
            case 'Years of Learning': return <CalendarClock className="w-6 h-6 text-pink-500" />
            default: return <FolderGit className="w-6 h-6 text-blue-500" />
        }
    }

    return (
        <section className="py-16 bg-slate-50/50 dark:bg-slate-900/40 relative z-30 border-b border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all flex flex-col justify-between"
                        >
                            {/* Header: Icon & Suffix */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5">
                                    {getIcon(stat.label)}
                                </div>
                            </div>

                            {/* Counter Numbers */}
                            <div className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mb-1.5">
                                <Counter
                                    value={stat.value}
                                    decimals={stat.decimals}
                                    suffix={stat.suffix}
                                />
                            </div>

                            {/* Labelling */}
                            <div className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-1">
                                {stat.label}
                            </div>
                            <p className="text-[11px] text-slate-400 leading-snug">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
