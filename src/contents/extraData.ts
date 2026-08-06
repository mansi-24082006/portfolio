export const RESUME_URL = 'https://drive.google.com/file/d/1sjlWEQoWWWGlfbl9WxvLEQV8Q2j1IPk5/view?usp=drive_link'

export interface BlogArticle {
    title: string
    description: string
    date: string
    readTime: string
    category: string
    tags: string[]
    link: string
}

export interface Testimonial {
    name: string
    role: string
    company: string
    content: string
    avatar: string
}

export interface FAQItem {
    question: string
    answer: string
}

export interface StatItem {
    label: string
    value: number
    suffix?: string
    decimals?: number
    description: string
}

export interface CodingProfile {
    platform: 'LeetCode' | 'GitHub' | 'GeeksforGeeks' | 'HackerRank'
    username: string
    url: string
    metrics: {
        label: string
        value: string | number
    }[]
    rating?: string | number
}

export const blogs: BlogArticle[] = [
    {
        title: 'Navigating state structures in Next.js 15 App Router',
        description: 'A deep-dive analysis of server-side data fetching strategies, hydration states, and optimization layers in modern Next.js systems.',
        date: 'Jun 12, 2026',
        readTime: '6 min read',
        category: 'Next.js',
        tags: ['React', 'Next.js', 'Web Architecture'],
        link: '#'
    },
    {
        title: 'Creating high-fidelity micro-interactions with Framer Motion',
        description: 'Learn how to customize spring configurations, handle layout animations, and create gestures that feel clean and responsive.',
        date: 'Apr 28, 2026',
        readTime: '8 min read',
        category: 'Design Systems',
        tags: ['Framer Motion', 'CSS', 'UX Design'],
        link: '#'
    },
    {
        title: 'A guide to WebSockets and Node.js for high concurrent throughput',
        description: 'Investigating message packet payloads, TCP socket handling, and client connections in production Node.js chat products.',
        date: 'Feb 15, 2026',
        readTime: '10 min read',
        category: 'Backend',
        tags: ['WebSockets', 'Node.js', 'Systems Design'],
        link: '#'
    }
]

export const testimonials: Testimonial[] = [
    {
        name: 'Dr. Suresh Kumar',
        role: 'Head of Computer Engineering Department',
        company: 'GTU Academic Affiliate',
        content: 'Mansi demonstrates exceptional problem-solving skills and technical command. Her academic progress is consistently in the top tier, showing great discipline in software logic and system architectures.',
        avatar: 'SK'
    },
    {
        name: 'Amit Patel',
        role: 'Lead Architect',
        company: 'SocialMM Intern Group',
        content: 'An incredibly proactive intern. Mansi picked up our Next.js App Router and monorepo structure in a single weekend and started pushing resolved issues into production of Chat systems immediately.',
        avatar: 'AP'
    },
    {
        name: 'Nisha Shah',
        role: 'Hackathon Project Partner',
        company: 'SIH 24 Dev Group',
        content: 'Working under Mansi’s leadership during Smart India Hackathon was a masterclass in project coordination. She kept the grid system organized and single-handedly built the database API interfaces.',
        avatar: 'NS'
    }
]

export const faqs: FAQItem[] = [
    {
        question: 'Who am I and what do I specialize in?',
        answer: 'I am Mansi Vaghasiya, a Computer Engineering Student and Full Stack Web Developer. My core focus lies in building high-fidelity web experiences utilizing the MERN Stack and Next.js, with interactive, animation-rich dashboards and AI API integrations.'
    },
    {
        question: 'What is your preferred technology stack?',
        answer: 'For front-end interfaces, I am highly proficient with React, Next.js 14/15, Tailwind CSS, TypeScript, and Framer Motion. On the backend, I leverage Node.js, Express, Socket.io, REST APIs, and databases like MongoDB and MySQL. I also work with Cloud platforms like Vercel, Render, and Google Cloud.'
    },
    {
        question: 'Are you available for internships or contract developer roles?',
        answer: 'Yes! I am actively looking for Full-Stack or Frontend Developer Internships (Remote or Hybrid) starting immediately, as well as Open Source contributions and collaborative freelance setups.'
    },
    {
        question: 'How do I download your latest Resume portfolio?',
        answer: 'You can download my verified resume directly by clicking the resume download action button in the Hero section or Navbar header. It links to my updated drive resume portal.'
    },
    {
        question: 'How fast is your response time for contact submissions?',
        answer: 'Usually under 12 to 24 hours. Messages submitted via the contact form are directly logged and notified to my mailbox.'
    }
]

export const stats: StatItem[] = [
    {
        label: 'Projects Completed',
        value: 10,
        description: 'Production systems, library packages, and tools.'
    },
    {
        label: 'GitHub Repositories',
        value: 28,
        description: 'Active workspaces, utilities, and templates.'
    },
    {
        label: 'Expert Technologies',
        value: 12,
        description: 'Frameworks, DBs, and runtime protocols.'
    },
    {
        label: 'Academic CGPA',
        value: 8.83,
        suffix: '/10',
        decimals: 2,
        description: 'Calculated Grade Point Average at GTU.'
    },
    {
        label: 'LeetCode Problems',
        value: 250,
        suffix: '+',
        description: 'Algorithms and data structures solved.'
    },
    {
        label: 'Years of Learning',
        value: 3,
        description: 'Active computer engineering curriculum.'
    }
]

export const codingProfiles: CodingProfile[] = [
    {
        platform: 'LeetCode',
        username: 'mansi-vaghasiya',
        url: 'https://leetcode.com/u/mansivag2006/',
        metrics: [
            { label: 'Problems Solved', value: '250+' },
            { label: 'Contest Rating', value: '1480' },
            { label: 'Ranking', value: 'Top 25%' }
        ]
    },
    {
        platform: 'GitHub',
        username: 'mansi-24082006',
        url: 'https://github.com/mansi-24082006',
        metrics: [
            { label: 'Total Contributions', value: '380+ (2025)' },
            { label: 'Public Repositories', value: 28 },
            { label: 'Followers', value: '15+' }
        ]
    },
    {
        platform: "GeeksforGeeks",
        username: "mansivaghasiya",
        url: "https://www.geeksforgeeks.org/profile/vaghasiyaikrw",
        metrics: [
            { label: "Coding Score", value: "382" },
            { label: "Problems Solved", value: "116" },
            { label: "Institute Rank", value: "8" },
        ]
    },
    {
        platform: 'HackerRank',
        username: 'vaghasiyamansi80',
        url: 'https://www.hackerrank.com/profile/vaghasiyamansi80',
        metrics: [
            { label: 'Badges', value: '5' }, // Update with your actual badge count
            { label: 'Stars', value: '4★' }, // Update with your actual star count (e.g., Problem Solving)
            { label: 'Certificates', value: '2' } // Update with your actual verified skills/certificates
        ]
    }
]
