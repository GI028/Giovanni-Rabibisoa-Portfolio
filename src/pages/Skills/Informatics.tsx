import React from "react"
import * as data from "../../data/Skills/Informatics.ts"
import Tooltip from "../../components/HTML/Tooltip.tsx"
import SquareImage from "../../components/HTML/SquareImage"
import { ImageIcon, AISkill } from "../../data/Skills/typesAndFunctions.ts"

type Skill = ImageIcon

interface Section {
  title: string
  data: Skill[]
}

const sections: Section[] = [
  {
    title: "Programming Languages",
    data: data.programingLanguages,
  },
  {
    title: "Frameworks and Libraries",
    data: data.frameworksAndLibraries,
  },
  {
    title: "SGBDR",
    data: data.databases,
  },
  // {
  //   title: "Softwares",
  //   data: data.softwares,
  // },
]
const softwares: { title: string; data: Skill[] } = {
  title: "Softwares",
  data: data.softwares,
}
const aiConcepts: { title: string; data: AISkill[] } = {
  title: "Artificial Intelligence Skills",
  data: data.aiConcepts,
}

interface SkillSectionProps<T> {
  title: string
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  gap?: number
}

const SkillSection = <T,>({
  title,
  data,
  renderItem,
  gap = 4,
}: SkillSectionProps<T>) => (
  <div>
    <h1 className="text-text-2 mb-5 text-lg">{title}</h1>
    <div className={`flex items-center w-full flex-wrap gap-${gap} px-2`}>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  </div>
)

const ImageSkillItem: React.FC<Skill> = ({ image, title }) => (
  <Tooltip tip={title}>
    <SquareImage src={image} className="w-10 rounded drop-shadow-sm" />
  </Tooltip>
)

const AIConceptItem: React.FC<AISkill> = ({ title, description, icon: Icon }) => (
  <Tooltip
    tip={<p className="w-fit inline-block max-w-30 text-text-3">{description}</p>}
  >
    <div className="flex w-max cursor-default items-center bg-bg-3 text-text-2 py-1 px-2 rounded">
      <span className="text-xl mr-3">
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  </Tooltip>
)

const Informatics: React.FC = () => {
  return (
    <div className="space-y-5">
      {sections.map(({ title, data }, index) => (
        <SkillSection<Skill>
          key={index}
          title={title}
          data={data}
          renderItem={(item, index) => <ImageSkillItem key={index} {...item} />}
        />
      ))}
      <SkillSection<AISkill>
        gap={2}
        title={aiConcepts.title}
        data={aiConcepts.data}
        renderItem={(item, index) => <AIConceptItem key={index} {...item} />}
      />
      <SkillSection<Skill>
        gap={2}
        title={softwares.title}
        data={softwares.data}
        renderItem={(item, index) => <ImageSkillItem key={index} {...item} />}
      />
    </div>
  )
}

export default Informatics
