'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../contents/extraData'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIdx(prev => (prev === index ? null : index))
    }

    return (
        <section id="faq" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        FAQ Accordion
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Common Questions
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIdx === index
                        return (
                            <motion.div
                                key={index}
                                className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] overflow-hidden"
                            >
                                {/* Trigger Button bar */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-5 sm:px-8 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3 text-slate-800 dark:text-white">
                                        <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="font-bold text-sm sm:text-base leading-snug">
                                            {faq.question}
                                        </span>
                                    </div>

                                    {isOpen ? (
                                        <ChevronUp className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                                    )}
                                </button>

                                {/* Question Answer display */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                        >
                                            <div className="px-5 sm:px-8 pb-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
