import React, { useRef } from "react"
import * as data from "../../data/Skills/Informatics.ts"
import Tooltip from "../../components/HTML/Tooltip.tsx"
import SquareImage from "../../components/HTML/SquareImage"
import {
  ImageInfo,
  IconInfo,
  Section,
} from "../../data/Skills/typesAndFunctions.ts"
import SkillSection from "./component/SkillSection.tsx"
import LabeledIcon from "./component/LabeledIcon.tsx"
import { motion } from "motion/react"
import { createRandomDelays } from "../../utils/helpers/index.ts"
import { fromBottomVariant, fromRightVariant, scaleVariant } from "../../animations/variants.ts"

const imageSections: Section<ImageInfo>[] = [
  { title: "Programming Languages", data: data.programingLanguages },
  { title: "Frameworks and Libraries", data: data.frameworksAndLibraries },
  { title: "SGBDR", data: data.databases },
]
const others: Section<ImageInfo> = { title: "Others", data: data.softwares }
const aiSection: Section<IconInfo> = {
  title: "Artificial Intelligence Skills",
  data: data.aiConcepts,
}

const ImageSkillItem: React.FC<ImageInfo> = ({ image, title }) => (
  <Tooltip tip={title}>
    <SquareImage src={image} className="w-10 rounded drop-shadow-sm" />
  </Tooltip>
)

const Informatics: React.FC = () => {
  const imageSkillsDelays = useRef<number[]>([])
  const imageSkillsDataLens = imageSections.reduce(
    (sum, section) => sum + section.data.length,
    0
  )
  let lastImageSkillLength = 0
  const othersDelays = useRef<number[]>([])
  const aiSectionDelays = useRef<number[]>([])
  const titleDelay = 0.1

  createRandomDelays(imageSkillsDelays, imageSkillsDataLens)
  createRandomDelays(othersDelays, others.data.length)
  createRandomDelays(aiSectionDelays, aiSection.data.length)

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
                {title}
              </motion.p>
            }
            data={data}
            renderItem={(item, index) => (
              <motion.div
                key={index}
                variants={scaleVariant}
                transition={{
                  duration: 0.3,
                  delay: imageSkillsDelays.current[index + currentShift],
                }}
              >
                <ImageSkillItem key={index} {...item} />
              </motion.div>
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
            {aiSection.title}
          </motion.p>
        }
        data={aiSection.data}
        renderItem={(item, index) => (
          <motion.div
            key={index}
            variants={fromBottomVariant}
            transition={{
              duration: 0.3,
              delay: aiSectionDelays.current[index],
            }}
          >
            <LabeledIcon key={index} {...item} />
          </motion.div>
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
            {others.title}
          </motion.p>
        }
        data={others.data}
        renderItem={(item, index) => (
          <motion.div
            key={index}
            variants={scaleVariant}
            transition={{ duration: 0.3, delay: othersDelays.current[index] }}
          >
            <ImageSkillItem key={index} {...item} />
          </motion.div>
        )}
      />
    </motion.div>
  )
}

export default Informatics
