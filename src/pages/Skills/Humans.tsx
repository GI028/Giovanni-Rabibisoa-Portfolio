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
import AnimatedLabeledIcon from "./component/AnimatedLabeledIcon"
import { motion } from "motion/react"
import {
  fromBottomVariant,
  fromRightVariant,
  scaleVariant,
} from "../../animations/variants"
import useRandomArray from "../../utils/hooks/useRandomArray"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  const iconSectionsDataLens = iconSections.reduce(
    (sum, section) => sum + section.data.length,
    0
  )
  let lastIconSectionsDataLens = 0
  const titleDelay = 0.2

  const languageSkillsDelays = useRandomArray(languageSkills.data.length)
  const iconSectionsDelays = useRandomArray(iconSectionsDataLens)

  return (
    <motion.div initial="initial" whileInView="inView" className="space-y-5">
      <SkillSection<ImageInfo>
        title={
          <motion.p
            variants={fromRightVariant}
            transition={{ duration: 0.3, delay: titleDelay * 0 }}
          >
            {t(languageSkills.title)}
          </motion.p>
        }
        data={languageSkills.data}
        renderItem={(item, index) => (
          <Tooltip
            key={index}
            tip={
              <p className="w-full inline-block max-w-30 text-text-3">
                {t(`${languageSkills.title}_description.${item.title}`)}
              </p>
            }
          >
            <motion.div
              variants={fromBottomVariant}
              transition={{
                duration: 0.3,
                delay: languageSkillsDelays[index],
              }}
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
                <p>{t(item.title)}</p>
              </Card>
            </motion.div>
          </Tooltip>
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
                variants={fromRightVariant}
                transition={{ duration: 0.3, delay: titleDelay * (index + 1) }}
              >
                {t(title)}
              </motion.p>
            }
            data={data}
            renderItem={(item, index) => (
              <AnimatedLabeledIcon
                key={index}
                icon={item.icon}
                title={t(item.title)}
                description={t(`${title}_description.${item.title}`)}
                animation={{
                  variants: scaleVariant,
                  transition: {
                    duration: 0.3,
                    delay: iconSectionsDelays[index + currentShift],
                  },
                }}
              />
            )}
          />
        )
      })}
    </motion.div>
  )
}
