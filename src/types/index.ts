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
  type: string
  location: string
  duration: string
  description: string
  technologies: string[]
}


/* ================= ACHIEVEMENT ================= */
export interface Achievement {
  title: string
  description: string
  year: string
  image?: string // optional
}

/* ================= CERTIFICATION ================= */
export interface Certification {
  title: string
  issuer: string
  year: string
  duration?: string
  issuedDate?: string
  credentialId?: string
  level?: string
  certificateFile: string
}
