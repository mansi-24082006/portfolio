import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBodyWrapper from "./components/ThemeBodyWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansi Vaghasiya |Full Stack Developer & AI Enthusiast Portfolio",
  description: "PortFolio of Mansi Vaghasiya. Specializing in high-performance Next.js architectures, MERN Stack platforms, and interactive AI web applications.",
  keywords: [
    "Mansi Vaghasiya",
    "Full Stack Developer",
    "Next.js Developer",
    "Software Engineer Portfolio",
    "Computer Engineering Student Portfolio",
    "React Developer",
    "Web Developer Internship India"
  ],
  authors: [{ name: "Mansi Vaghasiya" }],
  openGraph: {
    title: "Mansi Vaghasiya | Portfolio",
    description: "Building responsive, robust MERN applications & Nextjs architectures scaling to user production levels.",
    url: "https://www.mansiportfolio.tech/",
    siteName: "Mansi Vaghasiya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansi Vaghasiya Portfolio",
    description: "Building responsive MERN applications & AI systems.",
    creator: "@VaghasiyaM2408",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mansi Vaghasiya",
    "url": "https://mansi-vaghasiya.vercel.app",
    "jobTitle": "Full Stack Developer",
    "knowsAbout": [
      "Full Stack Web Development",
      "React.js",
      "Next.js",
      "MERN Stack",
      "Node.js",
      "TypeScript",
      "Database Systems"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Gujarat Technological University"
    },
    "sameAs": [
      "https://github.com/mansi-24082006",
      "https://www.linkedin.com/in/mansi-vaghasiya-22457a2b2"
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ThemeBodyWrapper>
            {children}
          </ThemeBodyWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}