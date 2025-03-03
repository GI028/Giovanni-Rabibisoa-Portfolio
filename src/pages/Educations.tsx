import Container from "../components/HTML/Container"
import FullHeight from "../components/HTML/FullHeight"
import { diplomas } from "../data/Educations/diplomas"
import { FaGraduationCap } from "react-icons/fa"

export default function Educations() {
  return (
    <Container>
      <FullHeight skipNavbar>
        <section className="py-16">
          <h1 className="text-3xl font-bold text-text mb-10 flex items-center">
            <FaGraduationCap className="mr-3" />
            Education
          </h1>
          <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3">
            {diplomas.map((diploma, index) => (
              <div
                key={index}
                className="bg-bg-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary p-4 flex justify-between items-center">
                  <div className="space-y-2">
                  <h3 className="font-bold text-xl text-white">
                    {diploma.name}
                  </h3>
                  <p className="text-sm text-gray-200 italic">
                    {diploma.institue}
                  </p>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold bg-opacity-20 bg-white px-3 py-1 rounded-full">
                      {diploma.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-text-2 mb-2 font-semibold">
                    {diploma.cursus}
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-text-2">
                    {diploma.descriptions.map((description, index) => (
                      <li key={index} className="text-sm">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FullHeight>
    </Container>
  )
}
