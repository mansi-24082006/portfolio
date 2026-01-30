import { Experience, Achievement, Certification } from '../types'

/* ================= EXPERIENCE ================= */
export const experiences: Experience[] = [
  {
    role: 'Next.js Developer',
    company: 'Personal Project',
    duration: 'Mar 2025',
    description:
      "Worked with Next.js 14 and explored its latest features including App Router, Server Actions, and performance improvements.",
    technologies: ['Next.js', 'React', 'TypeScript'],
  },
  {
    role: 'ReactJs+ NodeJs Developer',
    company: 'Personal Project',
    duration: 'Mar 2025',
    description:
      'Built scalable React applications using TypeScript, focusing on type safety, reusable components, and clean architecture.',
    technologies: ['React', 'TypeScript'],
  },
  {
    role: 'Backend Developer',
    company: 'Personal Project',
    duration: 'Feb 2024',
    description:
      'Developed RESTful APIs using Node.js and Express with proper routing, controllers, and middleware.',
    technologies: ['Node.js', 'Express', 'REST API'],
  },
  {
    role: 'Frontend Developer',
    company: 'Personal Project',
    duration: 'Mar 2024',
    description:
      'Designed fully responsive layouts using Tailwind CSS with a mobile-first approach and modern UI practices.',
    technologies: ['Tailwind CSS', 'HTML', 'CSS'],
  },
  
]

/* ================= ACHIEVEMENTS ================= */
export const achievements: Achievement[] = [
  {
    title: 'Google Cloud Arcade Legend',
    description:
      'Recognized as an Arcade Legend in the Google Cloud Arcade Facilitator Program after completing hands-on labs and quests across Google Cloud services including GKE, Compute Engine, BigQuery, Pub/Sub, and other core cloud technologies.',
    year: '2025',
    image: '/achievements/cloud.jpeg',
  },
]

/* ================= CERTIFICATIONS ================= */
export const certifications: Certification[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2025',
    certificateFile: '/certificates/Udemy.pdf',
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
