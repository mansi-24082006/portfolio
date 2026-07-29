'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ArrowDownToLine, Flame, Sparkles, Compass, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    const strengths = [
        'Clean Code & Solid TypeScript schemas',
        'Responsive layouts using Tailwind CSS v4',
        'Real-time WebSocket & client concurrency',
        'AI models & REST API interface design',
        'Agile Git versioning & active code collaboration'
    ]

    const focuses = [
        'Next.js 15 App Router & React Server Components',
        'Scalable Socket.io connection pooling',
        'Complex schema validations via Zod',
        'Database indexes optimization (SQL & NoSQL)'
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    }

    return (
        <section id="about" className="py-24 relative z-30 bg-[#080c14] border-b border-white/5 scroll-mt-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title Area */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                            Interview Room
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-2xl"
                    >
                        Tell me about yourself.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl"
                    >
                        The question every recruiter asks first. Here's my honest, unscripted answer.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                    {/* LEFT: TEXT STORY & PASSION */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Main Answer Card */}
                        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f1523] border border-white/5 shadow-2xl relative">
                            {/* Question/Answer Indicators */}
                            <div className="hidden sm:flex absolute -left-12 top-8 flex-col gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#1e293b] text-slate-400 border border-white/10 flex items-center justify-center text-xs font-bold">Q</div>
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xs font-bold">A</div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2 border-b border-white/5 pb-4">
                                    <Compass className="w-5 h-5 text-blue-400" />
                                    <span>Engineering & Crafting Web Experiences</span>
                                </h3>

                                <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                                    <p>
                                        Hi, I'm <span className="font-semibold text-white">Mansi Vaghasiya</span>, a Computer Engineering student who enjoys building modern and user-friendly web applications. I like learning new technologies and turning ideas into real projects.
                                    </p>

                                    <p>
                                        I mainly work with the MERN stack, Next.js, TypeScript, and Tailwind CSS. I enjoy creating responsive websites, developing backend APIs, and working with databases to build complete full-stack applications.
                                    </p>

                                    <p>
                                        I'm also exploring AI integration and open-source development. My goal is to improve my skills every day, solve real-world problems, and build applications that are useful, fast, and easy to use.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Strengths Grid */}
                        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f1523] border border-white/5 shadow-lg">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span>Core Strengths</span>
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {strengths.map((str, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-400">{str}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* RIGHT: TIMELINE & ACTIONS */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Current focus indicator */}
                        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f1523] border border-white/5 shadow-lg">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-6">
                                <Flame className="w-4 h-4 text-amber-500" />
                                <span>Currently Focusing On</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {focuses.map((f, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1e293b] text-slate-300 border border-white/5 hover:border-white/20 transition-colors cursor-default"
                                    >
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education timelines card */}
                        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0f1523] border border-white/5 shadow-lg space-y-6">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-blue-400" />
                                <span>Academic Overview</span>
                            </h3>

                            <div className="border-l border-white/10 ml-2 pl-6 space-y-8">
                                {/* School 1 */}
                                <div className="relative">
                                    <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#0f1523]" />
                                    <div className="text-xs font-mono text-blue-400 mb-1">2023 - 2027</div>
                                    <h4 className="text-sm font-semibold text-white">Gujarat Technological University</h4>
                                    <p className="text-xs text-slate-400 mt-1">Bachelor of Engineering in Computer Engineering</p>
                                    <div className="mt-2 inline-flex px-2 py-1 bg-white/5 rounded text-xs font-mono text-slate-300 border border-white/5">
                                        CGPA: 8.83 / 10.0
                                    </div>
                                </div>

                                {/* School 2 */}
                                <div className="relative">
                                    <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-[#0f1523]" />
                                    <div className="text-xs font-mono text-purple-400 mb-1">2024</div>
                                    <h4 className="text-sm font-semibold text-white">Electronics Sector Skills Council</h4>
                                    <p className="text-xs text-slate-400 mt-1">Embedded Software Engineer Certificate (900 Hrs)</p>
                                    <div className="mt-2 inline-flex px-2 py-1 bg-white/5 rounded text-xs font-mono text-slate-300 border border-white/5">
                                        NSQF Level 5
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Resume button */}
                        <motion.div variants={itemVariants}>
                            <a
                                href="https://drive.google.com/file/d/1MSGQV0Nuu2yGTIaMCy-Cq2Ua4e0shgRC/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                            >
                                <ArrowDownToLine className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                <span>Download Verified Resume</span>
                            </a>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}