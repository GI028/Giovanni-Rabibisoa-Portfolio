import Tooltip from "../../../components/HTML/Tooltip"
import { IconInfo } from "../../../data/Skills/typesAndFunctions"

const LabeledIcon: React.FC<IconInfo> = ({ title, description, icon: Icon }) => (
  <Tooltip
    tip={<p className="w-fit inline-block max-w-30 text-text-3">{description}</p>}
  >
    <div className="flex w-max cursor-default items-center bg-bg-3 text-text-2 py-1 px-2 rounded">
      <span className="text-xl text-primary mr-3">
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  </Tooltip>
)

export default LabeledIcon