import { Experience, Achievement, Certification } from '../types'

/* ================= EXPERIENCE & TIMELINE ================= */
export interface TimelineItem {
  id: string
  title: string
  subtitle: string
  category: 'education' | 'internship' | 'opensource' | 'leadership'
  date: string
  description: string
  highlights?: string[]
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'timeline-1',
    title: 'Developer (Intern)',
    subtitle: 'SocialMM (Remote — Chennai, TN, India)',
    category: 'internship',
    date: 'Feb 2026 - March 2026',
    description: 'Contributing to scalable React and Next.js applications, building modular custom components, improving server queries, and maintaining production-level codebases alongside seasoned engineers.',
    highlights: ['Improved frontend bundle size by lazy loading heavy dashboard charts', 'Assisted in REST API refactor and integrated robust validation layers', 'Worked with Socket.io on real-time event alerts']
  },
  {
    id: 'timeline-2',
    title: 'Computer Engineering (B.E)',
    subtitle: 'Gujarat Technological University',
    category: 'education',
    date: '2023 - 2027',
    description: 'Pursuing a Bachelor of Engineering in Computer Engineering. Focusing on Data Structures, Object Oriented Systems, Database Management Systems, and Web Architecture.',
    highlights: ['Calculated Academic CGPA: 8.83 / 10.0', 'Top 5% student in the engineering department']
  },
  {
    id: 'timeline-3',
    title: 'Open Source Contributor',
    subtitle: 'GSSoC (GirlScript Summer of Code)',
    category: 'opensource',
    date: 'Jun 2026 - Aug 2026',
    description: 'Contributed to front-end developer kits and web utility libraries. Submitting pull requests, resolving GitHub issues, and writing extensive documentation guides.',
    highlights: ['Successfully resolved 12+ codebase issues including CSS layouts and active routes', 'Ranked in the top contributors for documentation styling and template components', 'Practiced professional Git versioning workflows']
  },
]

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
<<<<<<< HEAD
      'Recognized as an Arcade Legend in the Google Cloud Arcade Facilitator Program after completing hands-on labs and quests across Google Cloud services including GKE, Compute Engine, BigQuery, Pub/Sub, and other core cloud technologies.',
=======
      'Awarded Legend level in the Google Cloud Arcade facilitating track. Showcased proficiency in Docker containers, GKE Kubernetes deployments, Cloud SQL instances, and virtual network setups.',
>>>>>>> 5d4dd1b (Update portfolio UI)
    year: '2025',
    image: '/achievements/cloud.jpeg',
  },
  {
    title: 'GSSoC Open Source Badge',
    description:
      'Completed contribution requirements and earned badge badges for code additions made in active repos during the GS Summer of Code program.',
    year: '2025',
    image: '/achievements/badge.png',
  },
]

/* ================= CERTIFICATIONS ================= */
export const certifications: Certification[] = [
  {
<<<<<<< HEAD
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2025',
    certificateFile: '/certificates/udemy.pdf',
=======
    title: "Interview & Resume Mastery: From Resume to Job Offer",
    issuer: "Udemy",
    year: "2025",
    certificateFile: "/certificates/udemy.pdf",
>>>>>>> 5d4dd1b (Update portfolio UI)
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
