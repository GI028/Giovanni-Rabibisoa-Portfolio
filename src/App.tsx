import { Navigate, Route, Routes } from "react-router"
import NavBar from "./components/Navigation/NavBar"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Educations from "./pages/Educations"
import ParticleComponent from "./components/Particles/ParticleComponent"

function App() {
  return (
    <>
      {/* <div className="mt-16"/> */}
      <NavBar className="px-4 md:px-20 lg:px-40" />
      <ParticleComponent />
      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/educations" element={<Educations />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
