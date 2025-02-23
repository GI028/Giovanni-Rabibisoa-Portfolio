import { GiDiploma } from "react-icons/gi"
import ExperienceTimeline from "../components/Timeline/ExperienceTimeline"
import Container from "../components/HTML/Container"
import FullHeight from "../components/HTML/FullHeight"
type Diploma = {
  date: number
  name: string
  cursus: string
  institue: string
  descriptions: string[]
}

const datas: Diploma[] = [
  {
    date: 2023,
    name: "Master en Informatique",
    cursus: " base de données et génie logiciel ",
    institue: "CNTEMAD",
    descriptions: [
      "Approfondissement des concepts avancés en génie logiciel, conception et optimisation des bases de données.",
      "Développement d’applications logicielles robustes et évolutives.",
      "Étude des architectures logicielles et des méthodologies de gestion de projet IT.",
      "Réalisation d’un projet de recherche appliqué en informatique",
    ],
  },
  {
    date: 2021,
    name: "Licence en STIC",
    cursus:
      "Electronique/Sciences et technologies de l’information et de la communication",
    institue: "ESP d’Antsiranana",
    descriptions: [
      "Acquisition de compétences en électronique et en télécommunications.",
      "Étude des systèmes embarqués et des technologies numériques.",
      "Développement de solutions innovantes dans le domaine des TIC.",
      "Projet de fin d’études axé sur l’interconnexion des systèmes informatiques et électroniques.",
    ],
  },
  {
    date: 2020,
    name: "Licence en Informatique",
    cursus: " base de données et génie logiciel ",
    institue: "CNTEMAD",
    descriptions: [
      "Conception et gestion de bases de données relationnelles et NoSQL.",
      "Développement de logiciels et d’applications web/mobiles.",
      "Application des principes de l’ingénierie logicielle et des algorithmes d’optimisation.",
      "Mise en œuvre de méthodologies agiles pour la gestion de projet.",
    ],
  },
  {
    date: 2016,
    name: "Baccalauréat",
    cursus: "Serie D",
    institue: "Collège Sacrée Coeur Tsianaloka",
    descriptions: [
      "Formation scientifique avec un accent sur les mathématiques, la physique et la biologie.",
      "Développement d’une rigueur analytique et d’un esprit logique pour la résolution de problèmes.",
    ],
  },
]

export default function Educations() {
  return (
    <Container>
      <FullHeight skipNavbar>
        <section className="space-y-4 py-16">
          {/* <h1 className="text-3xl font-bold text-text mb-16 flex items-center space-x-2">
        <GiDiploma />
        <span>Educations</span>
      </h1> */}
          <div>
            {datas.map((diploma, index) => {
              const isFirst = index === 0
              const isLast = index === datas.length - 1
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
          </div>
        </section>
      </FullHeight>
    </Container>
  )
}
