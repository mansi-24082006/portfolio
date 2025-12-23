import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Projects from "./components/Projects"
// import Experience from "./components/Experiences"
import Skills from "./skills/page"

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Newsletter />
    </main>
  )
}
