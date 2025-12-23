/* ================= PROJECT ================= */

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink: string
  image: string
}

/* ================= EXPERIENCE ================= */

export interface Experience {
  role: string
  company: string
  duration: string
  description: string
  technologies: string[]
}

/* ================= ACHIEVEMENT ================= */

export interface Achievement {
  title: string
  description: string
  year: string
}

/* ================= CERTIFICATION ================= */

export interface Certification {
  title: string
  issuer: string
  year: string
  credentialUrl?: string
}
