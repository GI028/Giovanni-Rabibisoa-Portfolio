import ExperienceTimeline from "../components/Timeline/ExperienceTimeline"
import Container from "../components/HTML/Container"
import FullHeight from "../components/HTML/FullHeight"
import { diplomas } from "../data/Educations/diplomas"


export default function Educations() {
  return (
    <Container>
      <FullHeight skipNavbar>
        <section className="py-16">
            {diplomas.map((diploma, index) => {
              const isFirst = index === 0
              const isLast = index === diplomas.length - 1
              return (
                <ExperienceTimeline
                  key={index}
                  time={
                    <span className="pl-5 xs:pl-10 sm:pl-40 right-0 relative text-text-2 group-hover:text-text group-hover:right-10 transition-all duration-300 ease-in">
                      {diploma.date}
                    </span>
                  }
                  isFirst={isFirst}
                  isLast={isLast}
                  spacing={10}
                >
                  <div className="space-y-5 pl-5 sm:pl-15 ">
                    <h3 className="font-bold text-xl text-text group-hover:text-2xl transition-all duration-300 ease-in">
                      {diploma.name}
                    </h3>
                    <p className="text-sm text-text-2">{diploma.cursus}</p>
                    <p className="text-sm">{diploma.institue}</p>
                    <ul className="list-disc list-outside ml-4 text-justify">
                      {diploma.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                      ))}
                    </ul>
                  </div>
                </ExperienceTimeline>
              )
            })}
        </section>
      </FullHeight>
    </Container>
  )
}
