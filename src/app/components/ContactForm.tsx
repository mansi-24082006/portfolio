'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MapPin, Mail, Clock, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('vaghasiyamansi80@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    const socialLinks = [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2', icon: <FaLinkedin />, color: 'text-blue-500' },
        { label: 'GitHub', href: 'https://github.com/mansi-tech99', icon: <FaGithub />, color: 'text-slate-800 dark:text-white' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/mansivag2006/', icon: <SiLeetcode />, color: 'text-amber-500' },
    ]

    return (
        <section id="contact" className="py-24 relative z-30 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Connection Hub
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Get In Touch
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: SOCIAL CARDS & INFO */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Quick Metadata Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl border border-slate-205 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm space-y-5"
                        >
                            <h3 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">Availability Status</h3>

                            <div className="space-y-4 text-xs sm:text-sm">

                                {/* Location */}
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
                                    <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                    <div>
                                        <span className="font-bold block text-slate-800 dark:text-white">Location</span>
                                        <span>Gujarat, India (Remote Available)</span>
                                    </div>
                                </div>

                                {/* Clock Response Time */}
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
                                    <Clock className="w-5 h-5 text-purple-500 shrink-0" />
                                    <div>
                                        <span className="font-bold block text-slate-800 dark:text-white">Average Response Time</span>
                                        <span>Under 12 - 24 hours</span>
                                    </div>
                                </div>

                                {/* Active verification indicator status */}
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <div>
                                        <span className="font-bold block text-slate-800 dark:text-white">Active Status</span>
                                        <span className="flex items-center gap-1.5 mt-0.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Open for Developer Internships</span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* Email copies pill container */}
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-3xl border border-slate-205 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm space-y-4"
                        >
                            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Direct Mailbox</h3>

                            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 overflow-x-auto select-all pr-2">
                                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>vaghasiyamansi80@gmail.com</span>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-white/10 dark:hover:bg-white/15 text-slate-500 dark:text-slate-350 transition-colors shadow-sm shrink-0"
                                    title="Copy Email to Clipboard"
                                >
                                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </motion.div>

                        {/* Social cards list */}
                        <div className="grid grid-cols-3 gap-4">
                            {socialLinks.map((soc, idx) => (
                                <motion.a
                                    key={soc.label}
                                    href={soc.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 text-center flex flex-col items-center justify-center gap-2 shadow-sm hover:border-blue-500/20 transition-all select-none hover:y-[-2px] group"
                                >
                                    <div className="text-2xl group-hover:scale-110 transition-transform">
                                        {soc.icon}
                                    </div>
                                    <span className="text-[10px] uppercase font-bold text-slate-550 dark:text-slate-400">
                                        {soc.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT: CONTACT FORM MODULE */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] shadow-sm space-y-6"
                        >

                            <h3 className="text-lg font-bold text-slate-800 dark:text-white uppercase tracking-wider">Leave a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name */}
                                <div className="flex flex-col gap-1.5 focus-within:text-blue-500 transition-colors">
                                    <label htmlFor="name" className="text-xs uppercase font-bold text-slate-500">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        placeholder="Enter your name"
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-sm outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-all"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col gap-1.5 focus-within:text-blue-500 transition-colors">
                                    <label htmlFor="email" className="text-xs uppercase font-bold text-slate-500">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        placeholder="Enter your email address"
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-sm outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5 focus-within:text-blue-500 transition-colors">
                                    <label htmlFor="message" className="text-xs uppercase font-bold text-slate-500">Message Content</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        placeholder="How can I help you today? Leave details here..."
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-sm outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none transition-all"
                                    />
                                </div>

                                {/* Submit button details */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                                </button>

                                {/* Status prompts messages */}
                                <AnimatePresence mode="wait">
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[12.5px] font-bold text-center"
                                        >
                                            Thanks for reaching out! Your message was submitted successfully.
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[12.5px] font-bold text-center"
                                        >
                                            Failed to send message. Please copy and email me directly.
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </form>

                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    )
}
