import { electronicsSkills } from "../../data/Skills/electronics"
import SquareImage from "../../components/HTML/SquareImage"
import Card from "../../components/Card"
import Tooltip from "../../components/HTML/Tooltip"

export default function Humans() {
  return (
    <div className="space-y-5">
      <p>
        Humans
      </p>
      <div className="grid grid-cols-2 xs:grid-cols-4  gap-4">
        {electronicsSkills.map(({ image, title, description }, index) => (
          <Tooltip key={index} tip={<p className="w-full inline-block max-w-30 text-text-3">{description}</p>}>
            <Card className="w-full h-full" head={<SquareImage src={image} />}>
              <p className="w-full break-words">{title}</p>
            </Card>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
