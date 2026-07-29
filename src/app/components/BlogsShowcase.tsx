'use client'

import { motion } from 'framer-motion'
import { blogs } from '../../contents/extraData'
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react'

export default function BlogsShowcase() {
    // Built custom abstract backgrounds color map
    const getGradientForCategory = (cat: string) => {
        switch (cat) {
            case 'Next.js': return 'from-blue-600/20 via-blue-500/5 to-transparent'
            case 'Design Systems': return 'from-purple-600/20 via-purple-500/5 to-transparent'
            case 'Backend': return 'from-emerald-600/20 via-emerald-500/5 to-transparent'
            default: return 'from-slate-600/20 via-slate-500/5 to-transparent'
        }
    }

    return (
        <section id="blogs" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Insights & Writing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Latest Articles
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((art, index) => (
                        <motion.article
                            key={art.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group relative flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all select-none"
                        >

                            {/* Category Graphic Backdrop */}
                            <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${getGradientForCategory(art.category)} pointer-events-none`} />

                            <div className="relative p-6 sm:p-8 flex flex-col flex-grow z-10 space-y-4">

                                {/* Header: Date + Reading Time */}
                                <div className="flex items-center gap-4 text-[10px] sm:text-xs text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{art.date}</span>
                                    </div>

                                    <div className="flex items-center gap-1 font-semibold text-blue-600 dark:text-cyan-400">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{art.readTime}</span>
                                    </div>
                                </div>

                                {/* Category tag */}
                                <div className="self-start">
                                    <span className="px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                                        {art.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-805 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                                    {art.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed flex-grow">
                                    {art.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {art.tags.map(t => (
                                        <span key={t} className="text-[10px] text-slate-400">
                                            #{t.replace(/\s+/g, '')}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions link */}
                                <div className="pt-4 border-t border-slate-101 dark:border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-blue-500 font-semibold transition-colors">
                                    <span className="flex items-center gap-1.5">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        <span>Read Article</span>
                                    </span>

                                    <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                </div>

                            </div>

                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    )
}
