import { electronicsSkills } from "../../data/Skills/electronics"
import SquareImage from "../../components/HTML/SquareImage"
import Card from "../../components/Card"
import Tooltip from "../../components/HTML/Tooltip"
import { motion } from "motion/react"
import { scaleVariant } from "../../animations/variants"
import useRandomArray from "../../utils/hooks/useRandomArray"
import { useTranslation } from "react-i18next"

export default function Electronics() {
  const {t} = useTranslation()
  const delays = useRandomArray(electronicsSkills.length)
  return (
    <div className="space-y-5">
      <p>
        {t('electronicSkills.description')}
      </p>
      <motion.div
        initial="initial"
        whileInView="inView"
        className="grid grid-cols-2 xs:grid-cols-4  gap-4"
      >
        {electronicsSkills.map(({ image, title }, index) => (
          <Tooltip
            key={index}
            tip={
              <p className="w-full h-full inline-block max-w-30 text-text-3">
                {t(`electronicSkills.${title}.description`)}
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
                <p className="w-full break-words">{t(`electronicSkills.${title}.translation`)}</p>
              </Card>
            </motion.div>
          </Tooltip>
        ))}
      </motion.div>
    </div>
  )
}
