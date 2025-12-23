"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../../utils/animations";
import TypedText from "./TypedText"; // relative import
import { FolderGit, ArrowBigDownDash } from "lucide-react";
// pages/_app.tsx or your component
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT : PROFILE IMAGE */}
          <motion.div
            className="flex w-full justify-center md:justify-start px-4 md:px-0"
            initial={{ x: -10 }} // start slightly to the left
            animate={{ x: 90 }} // move to center
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* LOOPING RINGS */}
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full border-2 border-indigo-400"
                  style={{
                    width: `${100 + i * 14}%`,
                    height: `${100 + i * 14}%`,
                  }}
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.6, 0.2, 0.6],
                    rotate: 180,
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* PROFILE IMAGE */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full ring-2 ring-primary bg-white/5 p-1 overflow-hidden"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 30px #51dcf2",
                }}
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

          {/* RIGHT : TEXT CONTENT */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-6xl font-bold mb-6"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className={`${pacifico.className} signature text-4xl md:text-7xl text-primary`}
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                Mansi Vaghasiya
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
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
                  "UI/UX Designe Enthusiast",
                ]}
              />
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4 mb-8"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/mansi-24082006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 10px #22d3ee",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-3 rounded-full bg-white/5 text-gray-300"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 10px #22d3ee",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              {/* Projects Button */}
              <motion.div
                whileHover={{
                  rotateX: -8,
                  rotateY: 8,
                  y: -6,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <Link
                  href="/projects"
                  className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl
      bg-primary text-white font-semibold
      overflow-hidden group
      shadow-lg shadow-cyan-500/30
      hover:shadow-cyan-400/60
      transition-all duration-300"
                >
                  <FolderGit size={20} />
                  Projects
                  {/* Light shine */}
                  <span
                    className="absolute inset-0 from-transparent via-white/40 to-transparent
      translate-x-[-120%] group-hover:translate-x-[120%]
      transition-transform duration-700 ease-out pointer-events-none"
                  />
                  {/* Inner depth */}
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 pointer-events-none" />
                </Link>
              </motion.div>

              {/* Resume Button */}
              <motion.div
                whileHover={{
                  rotateX: -8,
                  rotateY: -8,
                  y: -6,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl
      bg-secondary text-primary dark:text-white font-semibold
      overflow-hidden group
      shadow-lg shadow-blue-500/20
      hover:shadow-blue-400/50
      transition-all duration-300"
                >
                  <ArrowBigDownDash size={18} />
                  Resume
                  {/* Light shine */}
                  <span
                    className="absolute inset-0 from-transparent via-white/30 to-transparent
      translate-x-[-120%] group-hover:translate-x-[120%]
      transition-transform duration-700 ease-out pointer-events-none"
                  />
                  {/* Inner depth */}
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
