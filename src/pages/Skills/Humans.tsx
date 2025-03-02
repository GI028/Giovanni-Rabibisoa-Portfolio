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
  return (
    <div className="space-y-5">
      <SkillSection<ImageInfo>
        title={languageSkills.title}
        data={languageSkills.data}
        renderItem={(item, index) => (
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
        )}
      />
      {iconSections.map(({ title, data }, index) => (
        <SkillSection<IconInfo>
          key={index}
          title={title}
          data={data}
          renderItem={(item, index) => <LabeledIcon key={index} {...item} />}
        />
      ))}
    </div>
  )
}
