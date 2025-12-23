'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 mb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h- max-w-3xl mb-50 "
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span 
            variants={itemVariants} 
            className="text-5xl text-primary font-mono tracking-widest uppercase"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            variants={itemVariants} 
            className="text-xl md:text-xl mt-4 tracking-tight text-gray-700 dark:text-gray-300"
          >
            Interested in connecting or working together? Leave your contact info and I'll respond soon.
          </motion.h2>
        </div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-6"
          >
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative border-b border-gray-300 dark:border-gray-700 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  className="w-full bg-transparent py-3 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="relative border-b border-gray-300 dark:border-gray-700 focus-within:border-primary transition-colors">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  className="w-full bg-transparent py-3 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative border-b border-gray-300 dark:border-gray-700 focus-within:border-primary transition-colors">
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                value={formData.message}
                className="w-full bg-transparent py-3 outline-none resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Submit Button */}
          <motion.button type="submit" disabled={status === 'loading'} className="w-full btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} > {status === 'loading' ? 'Sending...' : 'Send Message'} </motion.button>

            {/* Success Message */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-500 font-medium text-center"
                >
                  Thanks! I&apos;ll get back to you shortly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
