import { Experience, Achievement, Certification } from '../types'

/* ================= EXPERIENCE ================= */
export const experiences: Experience[] = [
  {
    role: 'Developer (Intern)',
    company: 'SocialMM',
    type: 'Remote',
    location: 'Chennai, Tamil Nadu, India',
    duration: 'Jan 2026 - Present',
    description:
      'Joined SocialMM as a Web Developer Intern, working on real-world production problems. This role goes beyond tutorials and side projects — focusing on building scalable features, improving existing systems, and learning industry-grade development practices from experienced engineers. Actively contributing, learning fast, and growing with the team.',
    technologies: ['Next.js', 'MERN Stack', 'Full-Stack Development', 'Website Building', 'Site Development'],
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
