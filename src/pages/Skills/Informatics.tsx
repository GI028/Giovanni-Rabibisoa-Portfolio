import React from "react"
import * as data from "../../data/Skills/Informatics.ts"
import Tooltip from "../../components/HTML/Tooltip.tsx"
import SquareImage from "../../components/HTML/SquareImage"
import {
  ImageInfo,
  IconInfo,
  Section,
} from "../../data/Skills/typesAndFunctions.ts"
import SkillSection from "./component/SkillSection.tsx"
import AnimatedLabeledIcon from "./component/AnimatedLabeledIcon.tsx"
import { motion, Transition, Variants } from "motion/react"
import {
  fromBottomVariant,
  fromRightVariant,
  scaleVariant,
} from "../../animations/variants.ts"
import useRandomArray from "../../utils/hooks/useRandomArray.ts"
import { useTranslation } from "react-i18next"

const imageSections: Section<ImageInfo>[] = [
  { title: "Programming Languages", data: data.programingLanguages },
  { title: "Frameworks and Libraries", data: data.frameworksAndLibraries },
  { title: "RDBMS", data: data.databases },
]
const others: Section<ImageInfo> = { title: "Others", data: data.softwares }
const aiSection: Section<IconInfo> = {
  title: "Artificial Intelligence Skills",
  data: data.aiConcepts,
  key:"aiSkills"
}

interface AnimatedImageInfoProps extends ImageInfo {
  animation: {
    variants: Variants
    transition: Transition
  }
}

const ImageSkillItem: React.FC<AnimatedImageInfoProps> = ({
  image,
  title,
  animation,
}) => (
  <Tooltip tip={title}>
    <motion.div variants={animation.variants} transition={animation.transition}>
      <SquareImage src={image} className="w-10 rounded drop-shadow-sm" />
    </motion.div>
  </Tooltip>
)

const Informatics: React.FC = () => {
  const {t} = useTranslation()
  const imageSkillsDataLens = imageSections.reduce(
    (sum, section) => sum + section.data.length,
    0
  )
  let lastImageSkillLength = 0

  const titleDelay = 0.1
  const imageSkillsDelays = useRandomArray(imageSkillsDataLens)
  const othersDelays = useRandomArray(others.data.length)
  const aiSectionDelays = useRandomArray(aiSection.data.length)

  return (
    <motion.div initial="initial" whileInView="inView" className="space-y-5">
      {imageSections.map(({ title, data }, sectionIndex) => {
        const currentShift = lastImageSkillLength
        lastImageSkillLength += data.length
        return (
          <SkillSection<ImageInfo>
            key={sectionIndex}
            title={
              <motion.p
                variants={fromRightVariant}
                transition={{ duration: 0.3, delay: titleDelay * sectionIndex }}
              >
                {t(title)}
              </motion.p>
            }
            data={data}
            renderItem={(item, index) => (
              <ImageSkillItem
                key={index}
                {...item}
                animation={{
                  variants: scaleVariant,
                  transition: {
                    duration: 0.3,
                    delay: imageSkillsDelays[index + currentShift],
                  },
                }}
              />
            )}
          />
        )
      })}
      <SkillSection<IconInfo>
        gap={2}
        title={
          <motion.p
            variants={fromRightVariant}
            transition={{
              duration: 0.3,
              delay: titleDelay * (imageSections.length + 1),
            }}
          >
            {t(aiSection.title)}
          </motion.p>
        }
        data={aiSection.data}
        renderItem={(item, index) => (
          <AnimatedLabeledIcon
            key={index}
            title={t(`${aiSection.key}.${item.title}.translation`)}
            description={t(`${aiSection.key}.${item.title}.description`)}
            icon={item.icon}
            animation={{
              variants: fromBottomVariant,
              transition: {
                duration: 0.3,
                delay: aiSectionDelays[index],
              },
            }}
          />
        )}
      />
      <SkillSection<ImageInfo>
        title={
          <motion.p
            variants={fromRightVariant}
            transition={{
              duration: 0.3,
              delay: titleDelay * (imageSections.length + 2),
            }}
          >
            {t(others.title)}
          </motion.p>
        }
        data={others.data}
        renderItem={(item, index) => (
          <ImageSkillItem
            key={index}
            {...item}
            animation={{
              variants: scaleVariant,
              transition: { duration: 0.3, delay: othersDelays[index] },
            }}
          />
        )}
      />
    </motion.div>
  )
}

export default Informatics
