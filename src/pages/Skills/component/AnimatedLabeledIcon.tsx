import { motion, Transition, Variants } from "motion/react"
import Tooltip from "../../../components/HTML/Tooltip"
import { IconInfo } from "../../../data/Skills/typesAndFunctions"

interface AnimatedIconInfoProps extends IconInfo {
  animation: {
    variants: Variants
    transition: Transition
  }
}

const AnimatedLabeledIcon: React.FC<AnimatedIconInfoProps> = ({
  title,
  description,
  icon: Icon,
  animation,
}) => (
  <Tooltip
    tip={
      <p className="w-fit inline-block max-w-30 text-text-3">{description}</p>
    }
  >
    <motion.div
      className="flex w-max cursor-default items-center bg-bg-2 text-text-2 py-1 px-2 rounded"
      variants={animation.variants}
      transition={animation.transition}
    >
      <span className="text-xl text-primary mr-3">
        <Icon />
      </span>
      <span>{title}</span>
    </motion.div>
  </Tooltip>
)

export default AnimatedLabeledIcon
