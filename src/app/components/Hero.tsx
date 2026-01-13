"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../../utils/animations";
import TypedText from "./TypedText"; 
import { FolderGit, ArrowBigDownDash } from "lucide-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: PROFILE IMAGE */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* LOOPING RINGS */}
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full border-2 border-indigo-400"
                  style={{
                    width: `calc(100% + ${i * 15}px)`,
                    height: `calc(100% + ${i * 15}px)`,
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6], rotate: 180 }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                />
              ))}

              <motion.div
                className="relative z-10 w-full h-full rounded-full ring-2 ring-primary bg-white/5 p-1 overflow-hidden"
                whileHover={{ scale: 1.12, boxShadow: "0 0 20px #51dcf2" }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/pro.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className={`${pacifico.className} signature text-4xl sm:text-5xl md:text-7xl text-primary`}
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                Mansi Vaghasiya
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <TypedText
                phrases={[
                  "Full Stack Developer",
                  "React/Next.js Expert",
                  "Open Source Contributor",
                  "Node.js & REST APIs Expert",
                  "Modern Web & PWA Developer",
                  "MySql & MongoDB Expert",
                  "UI/UX Design Enthusiast",
                ]}
              />
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-8"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              {[{
                href: "https://github.com/mansi-24082006",
                icon: <FaGithub />,
              }, {
                href: "https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2",
                icon: <FaLinkedin />,
              }].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 10px #22d3ee" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              {/* Projects Button */}
              <motion.div
                whileHover={{ rotateX: -8, rotateY: 8, y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <Link
                  href="/projects"
                  className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-xl
                  bg-primary text-white font-semibold overflow-hidden group
                  shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/60 transition-all duration-300"
                >
                  <FolderGit size={20} />
                  Projects
                  <span className="absolute inset-0 from-transparent via-white/40 to-transparent
                  -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 pointer-events-none" />
                </Link>
              </motion.div>

              {/* Resume Button */}
              <motion.div
                whileHover={{ rotateX: -8, rotateY: -8, y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-xl
                  bg-secondary text-primary dark:text-white font-semibold overflow-hidden group
                  shadow-lg shadow-blue-500/20 hover:shadow-blue-400/50 transition-all duration-300"
                >
                  <ArrowBigDownDash size={18} />
                  Resume
                  <span className="absolute inset-0 from-transparent via-white/30 to-transparent
                  -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 pointer-events-none" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
