'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaPython
} from 'react-icons/fa'
import {
    SiNextdotjs, SiTailwindcss, SiExpress,
    SiJsonwebtokens, SiPostman, SiRedux,
    SiMongodb, SiPostgresql, SiMysql,
    SiGithub, SiVercel, SiGooglecloud, SiOpenai, SiCplusplus
} from 'react-icons/si'
import { BrainCircuit, Cpu, Library, Wrench, Globe, Database, Server, Laptop } from 'lucide-react'

const categories = {
    Frontend: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 'Expert' },
        { name: 'Next.js 15', icon: SiNextdotjs, color: '#FFFFFF', level: 'Expert' },
        { name: 'TypeScript', icon: SiNextdotjs, color: '#3178C6', level: 'Expert' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', level: 'Expert' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Expert' },
        { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC', level: 'Proficient' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Expert' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Expert' },
    ],
    Backend: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 'Expert' },
        { name: 'Express.js', icon: SiExpress, color: '#828282', level: 'Expert' },
        { name: 'Socket.io', icon: FaJs, color: '#010101', level: 'Proficient' },
        { name: 'REST APIs', icon: SiPostman, color: '#FF6C37', level: 'Expert' },
        { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#D63AFF', level: 'Proficient' },
    ],
    Database: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'Expert' },
        { name: 'MySQL', icon: SiMysql, color: '#00758F', level: 'Expert' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 'Proficient' },
    ],
    Cloud: [
        { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4', level: 'Facilitator' },
        { name: 'Vercel Deploy', icon: SiVercel, color: '#FFFFFF', level: 'Expert' },
        { name: 'Render Cloud', icon: SiVercel, color: '#46E3B7', level: 'Proficient' },
    ],
    DevOps: [
        { name: 'Git Protocol', icon: FaGit, color: '#F05032', level: 'Expert' },
        { name: 'Docker Client', icon: FaDocker, color: '#2496ED', level: 'Beginner' },
        { name: 'GitHub Actions', icon: SiGithub, color: '#FFFFFF', level: 'Proficient' }
    ],
    AI: [
        { name: 'Gemini API', icon: BrainCircuit, color: '#06B6D4', level: 'Expert' },
        { name: 'OpenAI API', icon: SiOpenai, color: '#10A37F', level: 'Proficient' },
        { name: 'Prompt Eng.', icon: Cpu, color: '#7C3AED', level: 'Expert' },
    ],
    Languages: [
        { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 'Proficient' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Expert' },
        { name: 'Python', icon: FaPython, color: '#3776AB', level: 'Basic' },
    ],
    Tools: [
        { name: 'Postman Client', icon: SiPostman, color: '#FF6C37', level: 'Expert' },
        { name: 'VS Code Tool', icon: Laptop, color: '#007ACC', level: 'Expert' },
        { name: 'GitHub Actions', icon: SiGithub, color: '#FFFFFF', level: 'Expert' },
    ],
} as const

type CategoryKey = keyof typeof categories

export default function SkillsGrid() {
    const [activeTab, setActiveTab] = useState<CategoryKey>('Frontend')

    // Icons matching tabs
    const getTabIcon = (cat: CategoryKey) => {
        switch (cat) {
            case 'Frontend': return <Globe className="w-4 h-4" />
            case 'Backend': return <Server className="w-4 h-4" />
            case 'Database': return <Database className="w-4 h-4" />
            case 'Cloud': return <Globe className="w-4 h-4" />
            case 'DevOps': return <Wrench className="w-4 h-4" />
            case 'AI': return <BrainCircuit className="w-4 h-4" />
            case 'Languages': return <Library className="w-4 h-4" />
            case 'Tools': return <Wrench className="w-4 h-4" />
        }
    }

    return (
        <section id="skills" className="py-24 relative z-30 border-b border-black/5 dark:border-white/5 scroll-mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase bg-blue-500/5 dark:bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-blue-500/10 dark:border-cyan-400/10"
                    >
                        Technical Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4"
                    >
                        Skills & Expertise
                    </motion.h2>
                </div>

                {/* Tab switch buttons */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                    {(Object.keys(categories) as CategoryKey[]).map((cat) => {
                        const isActive = activeTab === cat
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
                                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                                    }`}
                            >
                                {getTabIcon(cat)}
                                <span>{cat}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Grid display in container */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
                        >
                            {categories[activeTab].map((skill, index) => {
                                const IconComponent = skill.icon
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.04 }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="relative group p-[1.5px] rounded-2xl overflow-hidden glass-card dark:bg-[#111827] shadow-sm flex flex-col items-center justify-center aspect-square"
                                    >
                                        {/* Hover spotlight border flow background */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(circle 80px at 50% 50%, ${skill.color}50, transparent 80%)`
                                            }}
                                        />

                                        {/* Content inside card */}
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 text-center">
                                            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 mb-3" style={{ color: skill.color }}>
                                                <IconComponent className="w-7 h-7" />
                                            </div>

                                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {skill.name}
                                            </span>

                                            <span className="text-[10px] text-slate-400 capitalize font-medium">
                                                {skill.level}
                                            </span>
                                        </div>

                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
