'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../contents/projects'
import { Project } from '../../types'
import Image from 'next/image'
import { Search, Filter, Github, ExternalLink, BookOpen, X, Code, CheckCircle, Lightbulb, BadgeAlert } from 'lucide-react'

export default function ProjectsShowcase() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'fullstack' | 'frontend' | 'vanilla'>('all')
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null)
    const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({})

    // Category values configuration
    const filterTabs = [
        { value: 'all', label: 'All Projects' },
        { value: 'ai', label: 'AI Solutions' },
        { value: 'fullstack', label: 'Full-Stack' },
        { value: 'frontend', label: 'Frontend UI' },
        { value: 'vanilla', label: 'Vanilla JS' }
    ] as const

    // Filter projects by both search input and tab selection
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const pCategory = project.category || 'vanilla'
            const matchesCategory = activeCategory === 'all' || pCategory === activeCategory
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            return matchesCategory && matchesSearch
        })
    }, [searchQuery, activeCategory])

    // Separating featured ones for distinct display
    const featured = useMemo(() => filteredProjects.filter(p => p.isFeatured), [filteredProjects])
    const regulars = useMemo(() => filteredProjects.filter(p => !p.isFeatured), [filteredProjects])

    // Fallback styling gradient builder
    const getGradientForProject = (title: string) => {
        const colours = [
            'from-blue-600 to-cyan-500',
            'from-purple-600 to-pink-500',
            'from-indigo-600 to-purple-500',
            'from-emerald-600 to-teal-500',
            'from-cyan-500 to-blue-600'
        ]
        const idx = title.charCodeAt(0) % colours.length
        return colours[idx]
    }

    return (
        <section id="projects-section" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Creative Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Featured Engineering
                    </motion.h2>
                </div>

                {/* Filters and Search Container */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12">
                    {/* Search bar input */}
                    <div className="relative w-full md:max-w-xs group">
                        <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search by title, technologies..."
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900 text-sm outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        />
                    </div>

                    {/* Type filters tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        {filterTabs.map(tab => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveCategory(tab.value)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeCategory === tab.value
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Display cases results */}
                {filteredProjects.length === 0 ? (
                    <div className="py-16 text-center text-slate-400">
                        No projects found matching the criteria. Try adjusting filters or search.
                    </div>
                ) : (
                    <div className="space-y-12">

                        {/* FEATURED PROJECTS PART */}
                        {featured.length > 0 && (
                            <div className="space-y-8">
                                <div className="text-xs font-bold text-slate-450 dark:text-slate-350 uppercase tracking-widest flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span>Interactive Case Studies ({featured.length})</span>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {featured.map((p) => {
                                        const idSafe = `project-card-${p.title.replace(/\s+/g, '-').toLowerCase()}`
                                        const isImgErr = imageErrorMap[p.title]
                                        return (
                                            <motion.div
                                                id={idSafe}
                                                key={p.title}
                                                initial={{ opacity: 0, y: 25 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4 }}
                                                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 shadow-lg group hover:border-blue-500/30 transition-all duration-300"
                                            >
                                                {/* Interactive glow overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                                {/* Banner Image / Fallback Container */}
                                                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                                    {isImgErr ? (
                                                        <div className={`w-full h-full bg-gradient-to-tr ${getGradientForProject(p.title)} flex flex-col items-center justify-center p-6 text-white text-center select-none`}>
                                                            <Code className="w-10 h-10 mb-2 opacity-80" />
                                                            <span className="text-lg font-black tracking-tight">{p.title}</span>
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={p.image}
                                                            alt={p.title}
                                                            fill
                                                            unoptimized
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            onError={() => setImageErrorMap(prev => ({ ...prev, [p.title]: true }))}
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    )}
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                                                            {p.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card Details */}
                                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                                        {p.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
                                                        {p.description}
                                                    </p>

                                                    {/* Problem/Solution snippets preview */}
                                                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300">
                                                        <div className="flex gap-2">
                                                            <BadgeAlert className="w-4 h-4 text-rose-500 shrink-0" />
                                                            <span className="line-clamp-2"><strong>Problem:</strong> {p.problem}</span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0" />
                                                            <span className="line-clamp-2"><strong>Solution:</strong> {p.solution}</span>
                                                        </div>
                                                    </div>

                                                    {/* Tech stack */}
                                                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                                                        {p.technologies.slice(0, 4).map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {p.technologies.length > 4 && (
                                                            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] sm:text-[11px] font-bold">
                                                                +{p.technologies.length - 4}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                                                        {/* Read Case Study Modal Trigger */}
                                                        <button
                                                            onClick={() => setSelectedCaseStudy(p)}
                                                            className="flex-grow inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/10 cursor-pointer active:scale-95 transition-all"
                                                        >
                                                            <BookOpen className="w-3.5 h-3.5" />
                                                            <span>Case Study</span>
                                                        </button>

                                                        {/* Source link */}
                                                        <a
                                                            href={p.githubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                                            title="Source Code"
                                                        >
                                                            <Github className="w-4 h-4" />
                                                        </a>

                                                        {/* Demo link */}
                                                        {p.demoLink && (
                                                            <a
                                                                href={p.demoLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-blue-500"
                                                                title="Live Demo"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                    </div>

                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* OTHER PROJECTS ROWIALS */}
                        {regulars.length > 0 && (
                            <div className="space-y-6">
                                <div className="text-xs font-bold text-slate-450 dark:text-slate-350 uppercase tracking-widest flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                    <span>Other Projects ({regulars.length})</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {regulars.map((p) => {
                                        const isImgErr = imageErrorMap[p.title]
                                        return (
                                            <motion.div
                                                key={p.title}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                                className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-250/60 dark:border-white/5 flex flex-col justify-between hover:border-blue-500/20 transition-all group shadow-sm hover:shadow"
                                            >
                                                <div>
                                                    {/* Mini visual indicator */}
                                                    <div className="h-28 relative rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                                        {isImgErr ? (
                                                            <div className={`w-full h-full bg-gradient-to-tr ${getGradientForProject(p.title)} flex items-center justify-center text-white text-[24px] font-black select-none`}>
                                                                {p.title.charAt(0)}
                                                            </div>
                                                        ) : (
                                                            <Image
                                                                src={p.image}
                                                                alt={p.title}
                                                                fill
                                                                unoptimized
                                                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                                                onError={() => setImageErrorMap(prev => ({ ...prev, [p.title]: true }))}
                                                                sizes="(max-width: 600px) 150px, 200px"
                                                            />
                                                        )}
                                                    </div>

                                                    <h4 className="text-base font-bold text-slate-800 dark:text-slate-150 mb-2 leading-tight group-hover:text-blue-500">
                                                        {p.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-snug">
                                                        {p.description}
                                                    </p>
                                                </div>

                                                <div>
                                                    {/* Mini stack */}
                                                    <div className="flex flex-wrap gap-1 mb-4">
                                                        {p.technologies.slice(0, 3).map(tech => (
                                                            <span key={tech} className="px-1.5 py-0.5 rounded bg-slate-50 dark:bg-white/5 text-[9px] font-mono text-slate-500">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Quick shortcuts */}
                                                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 text-xs text-slate-400">
                                                        <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-white flex items-center gap-1">
                                                            <Github className="w-3.5 h-3.5" />
                                                            <span>Code</span>
                                                        </a>
                                                        {p.demoLink ? (
                                                            <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex items-center gap-1 font-bold">
                                                                <span>Demo</span>
                                                                <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        ) : (
                                                            <span className="text-[10px] text-slate-500 font-mono">No Demo</span>
                                                        )}
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                    </div>
                )}

            </div>

            {/* CASE STUDY DETAIL DIALOG MODAL LAYOUT */}
            <AnimatePresence>
                {selectedCaseStudy && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Dark Mask backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCaseStudy(null)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
                        />

                        {/* Modal Body Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-10 z-10 flex flex-col gap-6"
                        >
                            {/* Header section with title and close btn */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                                        {selectedCaseStudy.category} Case Study
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mt-2 leading-none">
                                        {selectedCaseStudy.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedCaseStudy(null)}
                                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-400 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Big showcase header visual */}
                            <div className="relative aspect-video w-full h-[180px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                {imageErrorMap[selectedCaseStudy.title] ? (
                                    <div className={`w-full h-full bg-gradient-to-tr ${getGradientForProject(selectedCaseStudy.title)} flex flex-col items-center justify-center p-6 text-white text-center select-none`}>
                                        <Code className="w-12 h-12 mb-3 opacity-80" />
                                        <span className="text-2xl font-black">{selectedCaseStudy.title}</span>
                                    </div>
                                ) : (
                                    <Image
                                        src={selectedCaseStudy.image}
                                        alt={selectedCaseStudy.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                        onError={() => setImageErrorMap(prev => ({ ...prev, [selectedCaseStudy.title]: true }))}
                                    />
                                )}
                            </div>

                            {/* Multi Section Content details */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-600 dark:text-slate-350 text-xs sm:text-sm">

                                {/* Main section: Description / Problem / Solution */}
                                <div className="md:col-span-8 space-y-6">
                                    {/* Scope description */}
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-850 dark:text-slate-100 mb-2">Scope & Overview</h4>
                                        <p className="leading-relaxed">{selectedCaseStudy.description}</p>
                                    </div>

                                    {/* Problem & Solution block */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-1.5">
                                            <h5 className="font-bold text-rose-500 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-450 uppercase tracking-wider">
                                                <BadgeAlert className="w-4.5 h-4.5" />
                                                <span>The Problem</span>
                                            </h5>
                                            <p className="leading-relaxed text-[12.5px]">{selectedCaseStudy.problem}</p>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                                            <h5 className="font-bold text-emerald-500 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-450 uppercase tracking-wider">
                                                <Lightbulb className="w-4.5 h-4.5" />
                                                <span>The Solution</span>
                                            </h5>
                                            <p className="leading-relaxed text-[12.5px]">{selectedCaseStudy.solution}</p>
                                        </div>
                                    </div>

                                    {/* Features list */}
                                    {selectedCaseStudy.features && (
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-855 dark:text-slate-100 mb-3 uppercase tracking-wider">Key Features Developed</h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                {selectedCaseStudy.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                                        <CheckCircle className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Architecture, Challenges, Learnings (Row layout) */}
                                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                        {selectedCaseStudy.architecture && (
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-black uppercase text-slate-800 dark:text-slate-200 tracking-widest">System Architecture</h4>
                                                <p className="leading-relaxed text-[12.5px]">{selectedCaseStudy.architecture}</p>
                                            </div>
                                        )}

                                        {selectedCaseStudy.challenges && (
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-black uppercase text-slate-805 dark:text-slate-200 tracking-widest text-orange-500 dark:text-orange-400">Technical Challenges</h4>
                                                <p className="leading-relaxed text-[12.5px]">{selectedCaseStudy.challenges}</p>
                                            </div>
                                        )}

                                        {selectedCaseStudy.learnings && (
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-black uppercase text-slate-805 dark:text-slate-200 tracking-widest text-emerald-500 dark:text-emerald-450 font-bold">Key Learnings & Takeaways</h4>
                                                <p className="leading-relaxed text-[12.5px]">{selectedCaseStudy.learnings}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Sidebar details: Tech details / repositories links */}
                                <div className="md:col-span-4 space-y-6">
                                    {/* Tech stack widget */}
                                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-4">
                                        <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                                            <Code className="w-4.5 h-4.5 text-blue-500" />
                                            <span>Technologies Used</span>
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedCaseStudy.technologies.map(tech => (
                                                <span key={tech} className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-350 text-[11px] font-semibold border border-black/5 dark:border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions buttons linkages */}
                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={selectedCaseStudy.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full text-center inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/15 text-white font-bold text-xs transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Review Code Repository</span>
                                        </a>

                                        {selectedCaseStudy.demoLink && (
                                            <a
                                                href={selectedCaseStudy.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full text-center inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Launch Live Prototype</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    )
}
