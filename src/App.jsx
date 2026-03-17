import { ParallaxProvider } from "react-scroll-parallax"
import Navbar from "./components/Navbar"
import RainBackground from "./components/RainBackground"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <ParallaxProvider>
      <main className="bg-black min-h-screen scroll-smooth">
        <RainBackground />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

export default App
