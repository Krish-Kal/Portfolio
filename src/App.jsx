import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"


import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {
  return (

    <BrowserRouter>
      <ParticlesBackground />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App