import React from "react"
import { projects } from "../data/Projects/projects"
import FullHeight from "../components/HTML/FullHeight"
import { TbExternalLink } from "react-icons/tb"
import logo from "../assets/logo"
import SquareImage from "../components/HTML/SquareImage"
import Container from "../components/HTML/Container"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

const Projects: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <FullHeight
        skipNavbar
        className="bg-bg text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      >
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-center mb-12 mt-4 xs:hidden">
            {t('My Projects')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className="bg-bg-2 p-2 group overflow-hidden flex flex-col relative rounded-lg shadow-lg hover:shadow-2xl"
              >
                <a
                  href={project.url}
                  target="_blank"
                  title={project.title}
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0 left-0 w-full h-full bg-primary/30 flex items-center justify-center"
                >
                  <div className="flex items-center gap-2 p-2 bg-primary text-white rounded">
                    <span>Visit </span>
                    <TbExternalLink />
                  </div>
                </a>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded h-48 object-cover"
                />
                {/* <div className="p-6"> */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-bg-3 rounded-full text-sm w-8 -mr-1  p-1 border-1 border-text-3"
                      >
                        <SquareImage
                          src={logo[tech]}
                          alt={tech}
                          className="w-full rounded-full"
                        />
                        {/* {tech} */}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FullHeight>
    </Container>
  )
}

export default Projects
