import { useEffect, useRef, useState } from "react"
import Container from "../../../components/HTML/Container"
import FullHeight from "../../../components/HTML/FullHeight"
import { cn } from "../../../utils/helpers"
import SkipNavbar from "../../../components/HTML/SikpNavbar"

const sections = ["Informatics", "Electronics", "Humans"]

export default function OverView() {
  const [activeSection, setActiveSection] = useState<string>(sections[0])
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
        if (!isObserving.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
      <FullHeight className="flex items-center gap-4">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <Content sections={sections} sectionRefs={sectionRefs} />
      </FullHeight>
    </Container>
  )
}

function Sidebar({
  sections,
  activeSection,
  scrollToSection,
}: {
  sections: string[]
  activeSection: string
  scrollToSection: (section: string) => void
}) {
  return (
    <>
      <FullHeight className="fixed top-0 w-100 flex items-center">
        <SkipNavbar>
          <ul className="px-6 pb-16">
            <li className="space-y-4 mb-5">
              <h2 className="text-text text-4xl font-bold">
                Giovanni Rabibisoa
              </h2>
              <h3 className="text-text text-2xl">IT Engineer</h3>
              <p>
                I build scalable web, mobile, and AI-driven solutions, combining
                full-stack development, machine learning, and embedded systems
                expertise.
              </p>
            </li>
            <li className="mb-4 text-2xl">
              <h1>Skills</h1>
            </li>
            {sections.map((label) => (
              <li key={label}>
                <button
                  onClick={() => scrollToSection(label)}
                  className={cn(
                    "flex items-center cursor-pointer gap-4 uppercase group hover:text-text transition-color duration-200",
                    activeSection === label && "active"
                  )}
                >
                  <span className="inline-block w-10 h-[2px] rounded-full bg-text-3 group-hover:bg-text group-hover:w-20 group-[.active]:bg-text group-[.active]:w-20 transition-all duration-200" />
                  <span className="group-[.active]:text-text">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </SkipNavbar>
      </FullHeight>
      <div className="w-100" />
    </>
  )
}

function Content({
  sections,
  sectionRefs,
}: {
  sections: string[]
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}) {
  return (
    <div className="flex-1">
      {sections.map((label) => (
        <div
          key={label}
          id={label}
          ref={(el) => (sectionRefs.current[label] = el)}
        >
          <section style={{ height: "100vh", backgroundColor: "lightblue" }}>
            <h1>Section {label}</h1>
            <p>This is the content of section {label}</p>
          </section>
        </div>
      ))}
    </div>
  )
}
