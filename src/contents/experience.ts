import { Experience, Achievement, Certification } from '../types'

/* ================= EXPERIENCE ================= */
export const experiences: Experience[] = [
  {
    role: 'Next.js Developer',
    company: 'Personal Project',
    duration: 'Mar 2024',
    description:
      "Worked with Next.js 14 and explored its latest features including App Router, Server Actions, and performance improvements.",
    technologies: ['Next.js', 'React', 'TypeScript'],
  },
  {
    role: 'React + TypeScript Developer',
    company: 'Personal Project',
    duration: 'Mar 2024',
    description:
      'Built scalable React applications using TypeScript, focusing on type safety, reusable components, and clean architecture.',
    technologies: ['React', 'TypeScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'Personal Project',
    duration: 'Mar 2024',
    description:
      'Designed fully responsive layouts using Tailwind CSS with a mobile-first approach and modern UI practices.',
    technologies: ['Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    role: 'React Developer',
    company: 'Personal Project',
    duration: 'Mar 2024',
    description:
      'Implemented and optimized React Hooks for state management, side effects, and reusable logic.',
    technologies: ['React', 'Hooks'],
  },
  {
    role: 'Next.js Deployment Engineer',
    company: 'Personal Project',
    duration: 'Feb 2024',
    description:
      'Deployed Next.js applications on Vercel with environment variables, build optimization, and production-ready setups.',
    technologies: ['Next.js', 'Vercel'],
  },
  {
    role: 'Backend Developer',
    company: 'Personal Project',
    duration: 'Feb 2024',
    description:
      'Developed RESTful APIs using Node.js and Express with proper routing, controllers, and middleware.',
    technologies: ['Node.js', 'Express', 'REST API'],
  },
]

/* ================= ACHIEVEMENTS ================= */
export const achievements: Achievement[] = [
  {
    title: 'Google Cloud Arcade Legend',
    description:
      'Recognized as an Arcade Legend in the Google Cloud Arcade Facilitator Program after completing hands-on labs and quests across Google Cloud services including GKE, Compute Engine, BigQuery, Pub/Sub, and other core cloud technologies.',
    year: '2024',
    image: '/achievements/cloud.jpeg',
  },
]

/* ================= CERTIFICATIONS ================= */
export const certifications: Certification[] = [
  {
    title: 'React Bootcamp',
    issuer: 'LetsUpgrade',
    year: '2024',
    duration: '3 Days',
    issuedDate: '19 May 2024',
    credentialId: 'LUERJSMAY124616',
    certificateFile: '/certificates/certificate_29.jpg',
  },
  {
    title: 'JavaScript Bootcamp',
    issuer: 'LetsUpgrade',
    year: '2024',
    duration: '3 Days',
    issuedDate: '19 May 2024',
    credentialId: 'LUEJSMAY124771',
    certificateFile: '/certificates/certificate_28.jpg',
  },
  {
    title: 'Tailwind CSS Bootcamp',
    issuer: 'LetsUpgrade',
    year: '2024',
    duration: '3 Days',
    issuedDate: '19 May 2024',
    credentialId: 'LUETCMAR124807',
    certificateFile: '/certificates/certificate_27.jpg',
  },
  {
    title: 'Git & GitHub Bootcamp',
    issuer: 'LetsUpgrade',
    year: '2024',
    duration: '3 Days',
    issuedDate: '28 May 2024',
    credentialId: 'LUEGGAPR1241054',
    certificateFile: '/certificates/certificate_23.jpg',
  },
  {
    title: 'CSS Bootcamp',
    issuer: 'LetsUpgrade',
    year: '2024',
    duration: '3 Days',
    issuedDate: '28 May 2024',
    credentialId: 'LUECSSAPR124600',
    certificateFile: '/certificates/certificate_21.jpg',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2024',
    certificateFile: '/certificates/udemy.pdf',
  },
  {
    title: 'Embedded Software Engineer',
    issuer: 'Electronics Sector Skills Council of India (ESSCI)',
    year: '2024',
    duration: '900 Hours',
    level: 'NSQF Level 5',
    certificateFile: '/certificates/embedded.pdf',
  },
]
