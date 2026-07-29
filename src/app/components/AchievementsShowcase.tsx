'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { achievements, certifications } from '../../contents/experience'
import { Trophy, FileText, CheckCircle2, ShieldAlert, Award, FileCode2 } from 'lucide-react'
import Image from 'next/image'

export default function AchievementsShowcase() {
    const [activeTab, setActiveTab] = useState<'milestones' | 'certifications'>('milestones')
    const [imgErrMap, setImgErrMap] = useState<Record<string, boolean>>({})

    return (
        <section id="achievements" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Milestones & Badges
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Achievements
                    </motion.h2>
                </div>

                {/* Tab selector */}
                <div className="flex justify-center gap-1.5 mb-12">
                    {[
                        { value: 'milestones', label: 'Milestones & Badges' },
                        { value: 'certifications', label: 'Verified Certifications' }
                    ].map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value as any)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === tab.value
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab display */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {activeTab === 'milestones' ? (
                            <motion.div
                                key="milestones"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {achievements.map((item, index) => {
                                    const isImgErr = imgErrMap[item.title]
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, scale: 0.96 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm flex flex-col justify-between hover:border-blue-500/20 transition-all group"
                                        >
                                            <div className="space-y-4">
                                                {/* Display achievement badge / fallback */}
                                                <div className="h-36 relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-black/5 dark:border-white/5">
                                                    {isImgErr ? (
                                                        <div className="text-blue-500 dark:text-cyan-400 flex flex-col items-center">
                                                            <Trophy className="w-12 h-12 mb-2 animate-bounce" />
                                                            <span className="text-[10px] uppercase font-bold tracking-wider">Milestone Badge</span>
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={item.image || ''}
                                                            alt={item.title}
                                                            fill
                                                            unoptimized
                                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                                            onError={() => setImgErrMap(prev => ({ ...prev, [item.title]: true }))}
                                                        />
                                                    )}
                                                </div>

                                                <div className="space-y-1.5 text-center md:text-left">
                                                    <h3 className="text-base font-bold text-slate-800 dark:text-white">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                                                <span className="font-bold">Honored Class</span>
                                                <span className="px-2 py-0.5 rounded bg-blue-105 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-mono font-bold">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="certifications"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={cert.title}
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm flex items-center justify-between hover:border-blue-500/20 transition-all"
                                    >
                                        <div className="flex gap-4">
                                            {/* Visual cert icon */}
                                            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-white/5 border border-black/5 dark:border-white/5 shrink-0 self-start text-blue-500">
                                                <Award className="w-6 h-6" />
                                            </div>

                                            <div className="space-y-1.5">
                                                <h3 className="text-base font-bold text-slate-850 dark:text-white leading-tight">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-xs text-slate-450 dark:text-slate-400 font-semibold uppercase tracking-wider">
                                                    Issuer: {cert.issuer}
                                                </p>
                                                {cert.duration && (
                                                    <p className="text-[11px] text-slate-400">
                                                        <strong>Duration:</strong> {cert.duration} | <strong>Level:</strong> {cert.level}
                                                    </p>
                                                )}
                                                <span className="inline-block px-1.5 py-0.5 rounded bg-slate-50 dark:bg-white/10 text-[10px] text-slate-400 font-mono">
                                                    Issued: {cert.year}
                                                </span>
                                            </div>
                                        </div>

                                        <a
                                            href={cert.certificateFile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-500 hover:text-blue-550 dark:hover:text-cyan-400 transition-colors"
                                            title="View PDF Certificate"
                                        >
                                            <FileText className="w-4 h-4" />
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
