import { useEffect, useRef, useState } from "react"
import Container from "../components/HTML/Container"
import FullHeight from "../components/HTML/FullHeight"
import Sidebar from "./Skills/SideBar"
import Informatics from "./Skills/Informatics"
import Electronics from "./Skills/Electronics"

const sectionTitles = ["SideBar", "Informatics", "Electronics", "Humans"]
const sections = [Informatics, Electronics, Informatics]

export default function Skills() {
  const [activeSection, setActiveSection] = useState<string>(sectionTitles[0])
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const isObserving = useRef(true)

  const scrollToSection = (section: string) => {
    setActiveSection(section)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      isObserving.current = false
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setTimeout(() => (isObserving.current = true), 300)
    }, 200)

    return () => clearTimeout(timeout)
  }, [activeSection])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isSmallScreen = window.innerWidth < 768

        if (!isObserving.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isSmallScreen && entry.target.id === sectionTitles[0]) return
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Container>
      <FullHeight className="flex flex-col md:flex-row items-center gap-4">
        <div
          id={sectionTitles[0]}
          ref={(el) => (sectionRefs.current[sectionTitles[0]] = el)}
        >
          <Sidebar
            sections={sectionTitles.slice(1)}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
        <div className="md:flex-1 w-full md:w-auto">
          {sections.map((Section, index) => (
            <div
              id={sectionTitles[index + 1]}
              ref={(el) => (sectionRefs.current[sectionTitles[index + 1]] = el)}
            >
              <FullHeight skipNavbar className="flex items-center md:max-w-150">
                <div>
                  <h1 className="md:hidden mb-4 text-text text-2xl sticky top-17 z-1 bg-bg-3 px-2 py-1">
                    {sectionTitles[index + 1]}
                  </h1>
                  <Section />
                </div>
              </FullHeight>
            </div>
          ))}
        </div>
      </FullHeight>
    </Container>
  )
}
