'use client'

import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-8xl mx-auto px-5 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0">
           <Link
  href="/"
 className="text-3xl italic font-serif tracking-[-0.1em] 
             bg-gradient-to-r from-indigo-400 to-pink-400 
             bg-clip-text text-transparent 
             hover:tracking-tight transition-all duration-200"
>
  Mansi<span className="text-sm align-top ml-1 text-indigo-300">©</span>
</Link>


            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Mansi Vaghasiya. All rights reserved.
              Built with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/mansi-24082006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 10px #22d3ee',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://x.com/VaghasiyaM2408?t=BMQhXdF6LLxuXpLAh8-tuw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 10px #22d3ee',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 10px #22d3ee',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  )
}
