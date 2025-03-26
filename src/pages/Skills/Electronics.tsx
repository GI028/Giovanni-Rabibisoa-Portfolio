import { electronicsSkills } from "../../data/Skills/electronics"
import SquareImage from "../../components/HTML/SquareImage"
import Card from "../../components/Card"
import Tooltip from "../../components/HTML/Tooltip"
import { motion } from "motion/react"
import { scaleVariant } from "../../animations/variants"
import useRandomArray from "../../utils/hooks/useRandomArray"

export default function Electronics() {
  const delays = useRandomArray(electronicsSkills.length)
  return (
    <div className="space-y-5">
      <p>
        I have experience working with various embedded systems and IoT
        technologies. My expertise includes microcontrollers, sensors,
        communication protocols, and automation. Here are some of the key
        technologies I work with:
      </p>
      <motion.div
        initial="initial"
        whileInView="inView"
        className="grid grid-cols-2 xs:grid-cols-4  gap-4"
      >
        {electronicsSkills.map(({ image, title, description }, index) => (
          <Tooltip
            key={index}
            tip={
              <p className="w-full h-full inline-block max-w-30 text-text-3">
                {description}
              </p>
            }
          >
            <motion.div
              variants={scaleVariant}
              transition={{
                duration: 0.3,
                delay: delays[index],
              }}
              className="w-full h-full"
            >
              <Card
                className="w-full h-full"
                head={<SquareImage src={image} />}
              >
                <p className="w-full break-words">{title}</p>
              </Card>
            </motion.div>
          </Tooltip>
        ))}
      </motion.div>
    </div>
  )
}
