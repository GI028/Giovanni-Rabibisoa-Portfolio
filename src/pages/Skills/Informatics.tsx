import React from "react"
import * as data from "../../data/Skills/Informatics.ts"
import Tooltip from "../../components/HTML/Tooltip.tsx"
import SquareImage from "../../components/HTML/SquareImage"
import { ImageInfo, IconInfo, Section } from "../../data/Skills/typesAndFunctions.ts"
import SkillSection from "./component/SkillSection.tsx"
import LabeledIcon from "./component/LabeledIcon.tsx"


const imageSections: Section<ImageInfo>[] = [
  { title: "Programming Languages", data: data.programingLanguages },
  { title: "Frameworks and Libraries", data: data.frameworksAndLibraries },
  { title: "SGBDR", data: data.databases },
]
const others: Section<ImageInfo>= { title: "Others", data: data.softwares }
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
  return (
    <div className="space-y-5">
      {imageSections.map(({ title, data }, index) => (
        <SkillSection<ImageInfo>
          key={index}
          title={title}
          data={data}
          renderItem={(item, index) => <ImageSkillItem key={index} {...item} />}
        />
      ))}
      <SkillSection<IconInfo>
        gap={2}
        title={aiSection.title}
        data={aiSection.data}
        renderItem={(item, index) => <LabeledIcon key={index} {...item} />}
      />
      <SkillSection<ImageInfo>
          title={others.title}
          data={others.data}
          renderItem={(item, index) => <ImageSkillItem key={index} {...item} />}
        />
    </div>
  )
}

export default Informatics