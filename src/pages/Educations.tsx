import { motion } from "motion/react"
import Container from "../components/HTML/Container"
import FullHeight from "../components/HTML/FullHeight"
import { diplomas } from "../data/Educations/diplomas"
import { useTranslation } from "react-i18next"

export default function Educations() {
  const { t } = useTranslation()
  return (
    <Container>
      <FullHeight skipNavbar>
        <section className="py-16">
          <h1 className="text-2xl font-bold text-text mb-16 text-center xs:hidden">
            {t("educations.title")}
          </h1>
          <div className="grid gap-8 xs:grid-cols-2">
            {diplomas.map((diploma, index) => {
              const learned: string[] = t(`educations.${diploma.key}.learned`, {
                returnObjects: true,
              }) as string[]
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index}
                  className="bg-bg-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary p-4 flex justify-between items-center">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white">
                        {t(`educations.${diploma.key}.name`)}
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
                      {t(`educations.${diploma.key}.cursus`)}
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-text-2">
                      {learned.map((description, index) => (
                        <li key={index} className="text-sm">
                          {description}
                        </li>
                      ))}
                      {/* {diploma.descriptions.map((description, index) => (
              <li key={index} className="text-sm">
                {description}
              </li>
            ))} */}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>
      </FullHeight>
    </Container>
  )
}
