'use client'

import { motion } from 'framer-motion'
import { testimonials } from '../../contents/extraData'
import { MessageSquare, Quote } from 'lucide-react'

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Recommendations
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Testimonials
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.08 }}
                            className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm flex flex-col justify-between hover:border-blue-500/20 hover:shadow-md transition-all relative group"
                        >
                            {/* Quote icon watermark decoration */}
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 dark:text-white/5 group-hover:text-blue-500/10 transition-colors duration-300 pointer-events-none" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-1.5 text-blue-600 dark:text-cyan-400">
                                    <MessageSquare className="w-5 h-5 shrink-0" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">Reference letter</span>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed italic">
                                    &ldquo;{test.content}&rdquo;
                                </p>
                            </div>

                            {/* Author Info */}
                            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center gap-4">
                                {/* Avatar visual circle */}
                                <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-900/35 text-blue-600 dark:text-cyan-400 font-black text-xs flex items-center justify-center shrink-0 border border-blue-500/10">
                                    {test.avatar}
                                </div>

                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                                        {test.name}
                                    </h4>
                                    <p className="text-[10px] text-slate-400">
                                        {test.role}, <strong>{test.company}</strong>
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
