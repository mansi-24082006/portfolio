import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Tripverse AI',
    description: 'AI-powered travel planner that generates custom multi-day itineraries, complete with budget estimation, flight matching, and local spots recommendations.',
    problem: 'Planning a trip requires searching countless travel blogs, calculating costs, and organizing locations, wasting hours of valuable time.',
    solution: 'Built an intelligent itinerary generation system that utilizes Gemini AI models to structure customized plans based on duration, budget, group size, and personal interests in under 5 seconds.',
    features: [
      'Interactive timeline schedule builder',
      'Dynamic budget analysis and chart visualizer',
      'Saved history and shareable itinerary links',
      'Real-time weather forecast details'
    ],
    technologies: ['Next.js', 'TypeScript', 'Gemini AI', 'Tailwind CSS', 'Framer Motion', 'MongoDB'],
    githubLink: 'https://github.com/mansi-24082006/Tripverse-AI',
    demoLink: 'https://tripverse-ai.vercel.app/',
    image: '/projects/image.webp',
    isFeatured: true,
    category: 'ai',
    architecture: 'Next.js App Router for frontend and serverless API endpoints, communicating with Gemini models and caching itinerary outputs in a MongoDB database.',
    challenges: 'Ensuring that unstructured AI text responses reliably adhere to a complex JSON interface layout. Solved using Zod schemas and structured output prompts.',
    learnings: 'Mastered schema validation, system instructions for LLMs, and client-side database synchronization using optimistic UI updates.'
  },
  {
    title: 'CampusBuzz',
    description: 'A centralized university event hub and student directory that streamlines workshop bookings, student announcements, and club forums.',
    problem: 'University events, club flyers, and student discussions are typically scattered across different chat rooms, leading to poor turnout and disconnected students.',
    solution: 'Designed a unified real-time dashboard with verified campus domain logins where clubs can create posts, register attendees, and message students.',
    features: [
      'Real-time chat channels via Socket.io',
      'Secure email verification and role authorizations',
      'PDF Ticket receipt downloader for events',
      'Student group announcement boards'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubLink: 'https://github.com/mansi-24082006/CampusBuzz',
    demoLink: 'https://campus-buzz.vercel.app/',
    image: '/projects/campus.png',
    isFeatured: true,
    category: 'fullstack',
    architecture: 'Decoupled architecture with a React SPA client and a Node.js/Express REST server. Real-time events are driven by a dedicated WebSocket connection pool.',
    challenges: 'Managing double event bookings when multiple students checkout simultaneously. Managed by applying database transactions and entry locks on seat booking queries.',
    learnings: 'Acquired hands-on experience handling WebSocket connections, security headers, database locks, and state management via Redux.'
  },
  {
    title: 'ChatNova',
    description: 'A modern real-time messaging platform that enables instant one-to-one communication with a clean, responsive interface and seamless user experience.',
    problem: 'Traditional messaging applications often suffer from delayed message delivery, cluttered interfaces, and limited real-time synchronization across users.',
    solution: 'Built a full-stack real-time chat application using Socket.io to deliver instant messaging, secure user authentication, and responsive chat rooms with live communication.',
    features: [
      'Real-time one-to-one messaging with Socket.io',
      'Secure user authentication and authorization',
      'Online/offline user status indicators',
      'Responsive chat interface with auto-scrolling',
      'Instant message synchronization without page refresh',
      'Modern UI optimized for desktop and mobile devices'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS'
    ],
    githubLink: 'https://github.com/mansi-24082006/ChatNova',
    demoLink: 'https://chat-nova-psi.vercel.app/',
    image: '/projects/chat.png',
    isFeatured: true,
    category: 'fullstack',
    architecture: 'Client-server architecture with a React frontend and Express REST API backend. Socket.io manages persistent WebSocket connections for real-time bidirectional messaging while MongoDB stores user accounts and chat history.',
    challenges: 'Maintaining reliable real-time communication, handling multiple concurrent socket connections, and ensuring messages are delivered instantly without duplication or data loss.',
    learnings: 'Strengthened expertise in WebSocket communication, Socket.io event handling, authentication flows, REST API integration, MongoDB data modeling, and building responsive real-time applications.'
  },
  {
    title: 'SmartUI',
    description: 'Reusable UI components library focused on clean design and responsiveness.',
    technologies: ['React.js', 'Tailwind CSS', 'Api'],
    githubLink: 'https://github.com/mansi-24082006/SmartUI',
    demoLink: 'https://smart-ui-rouge.vercel.app/',
    image: '/projects/smartui.png',
    isFeatured: false,
    category: 'frontend'
  },
  {
    title: 'Notely',
    description: 'A note-taking application for managing daily notes efficiently.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    githubLink: 'https://github.com/mansi-24082006/Notely',
    demoLink: '',
    image: '/projects/Notely.png',
    isFeatured: false,
    category: 'fullstack'
  },
  {
    title: 'BeanUp',
    description: 'Coffee-themed frontend project with attractive UI and animations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vanilla JS'],
    githubLink: 'https://github.com/mansi-24082006/BeanUp',
    demoLink: 'https://mansi-24082006.github.io/BeanUp/',
    image: '/projects/coffee.png',
    isFeatured: false,
    category: 'vanilla'
  },
  {
    title: 'QRExpert',
    description: 'A customizable QR code generator with logo embedding, color options, and error correction.',
    technologies: ['JavaScript', 'Vanilla JS', 'QR API'],
    githubLink: 'https://github.com/mansi-24082006/QRExpert',
    demoLink: 'https://mansi-24082006.github.io/QRExpert/',
    image: '/projects/QR.png',
    isFeatured: false,
    category: 'vanilla'
  },
  {
    title: 'To-Do List App',
    description: 'Simple and effective task management application.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/mansi-24082006/To-Do-List-App',
    demoLink: 'https://mansi-24082006.github.io/To-Do-List-App/',
    image: '/projects/To-do.png',
    isFeatured: false,
    category: 'vanilla'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Classic Tic Tac Toe game built using JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/mansi-24082006/Tic-Tac-Toe',
    demoLink: 'https://mansi-24082006.github.io/Tic-Tac-Toe/',
    image: '/projects/TTT.png',
    isFeatured: false,
    category: 'vanilla'
  },
  {
    title: 'Chess Master',
    description: 'Chess game project focusing on logic and UI.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/mansi-24082056/Chess-Master',
    demoLink: 'https://mansi-24082006.github.io/Chess-Master/',
    image: '/projects/Chess.png',
    isFeatured: false,
    category: 'vanilla'
  }
]
