import SquareImage from "../../components/HTML/SquareImage"
import Card from "../../components/Card"
import Tooltip from "../../components/HTML/Tooltip"
import * as data from "../../data/Skills/humans"
import {
  IconInfo,
  ImageInfo,
  Section,
} from "../../data/Skills/typesAndFunctions"
import SkillSection from "./component/SkillSection"
import LabeledIcon from "./component/LabeledIcon"
import { useRef } from "react"
import { createRandomDelays } from "../../utils/helpers"
import { motion } from "motion/react"

const iconSections: Section<IconInfo>[] = [
  { title: "Collaboration and Leadership", data: data.collaborationLeadership },
  {
    title: "Problem-Solving and Creativity",
    data: data.problemSolvingCreativity,
  },
  { title: "Professional Aptitudes", data: data.professionalAptitudes },
]

const languageSkills: Section<ImageInfo> = {
  title: "Language Skills",
  data: data.languageSkills,
}
export default function Humans() {
  const languageSkillsDelays = useRef<number[]>([])
  const iconSectionsDelays = useRef<number[]>([])
  const iconSectionsDataLens = iconSections.reduce(
    (sum, section) => sum + section.data.length,
    0
  )
  let lastIconSectionsDataLens = 0
  const titleDelay = 0.2
  createRandomDelays(languageSkillsDelays, languageSkills.data.length)
  createRandomDelays(iconSectionsDelays, iconSectionsDataLens)
  return (
    <div className="space-y-5">
      <SkillSection<ImageInfo>
        title={
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: titleDelay * 0 }}
          >
            {languageSkills.title}
          </motion.p>
        }
        data={languageSkills.data}
        renderItem={(item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: languageSkillsDelays.current[index],
            }}
          >
            <Tooltip
              key={index}
              tip={
                <p className="w-full inline-block max-w-30 text-text-3">
                  {item.description}
                </p>
              }
            >
              <Card
                className="w-24"
                head={
                  <SquareImage
                    className="aspect-square rounded-md"
                    src={item.image}
                  />
                }
              >
                <p>{item.title}</p>
              </Card>
            </Tooltip>
          </motion.div>
        )}
      />
      {iconSections.map(({ title, data }, index) => {
        const currentShift = lastIconSectionsDataLens
        lastIconSectionsDataLens += data.length
        return (
          <SkillSection<IconInfo>
            key={index}
            title={
              <motion.p
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: titleDelay * (index + 1) }}
              >
                {title}
              </motion.p>
            }
            data={data}
            renderItem={(item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: "0" }}
                whileInView={{ opacity: 1, scale: "100%" }}
                transition={{
                  duration: 0.3,
                  delay: iconSectionsDelays.current[index + currentShift],
                }}
              >
                <LabeledIcon key={index} {...item} />
              </motion.div>
            )}
          />
        )
      })}
    </div>
  )
}
