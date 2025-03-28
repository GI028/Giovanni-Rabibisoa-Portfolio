import { MdInterests } from "react-icons/md"
import LottieCard from "../../components/Card/LottieCard"
import hobby from "../../assets/animations/Hobbies"
import Button from "../../components/FormComponents/Button"
import { motion } from "motion/react"
import useRandomArray from "../../utils/hooks/useRandomArray"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type Hobbie = {
  key: string
  animation: object
}

const datas: Hobbie[] = [
  {
    key: "coding",
    animation: hobby.coding,
  },
  {
    key: "music",
    animation: hobby.music,
  },
  {
    key: "reading",
    animation: hobby.reading,
  },
  {
    key: "sports",
    animation: hobby.sport,
  },
  {
    key: "3Dmodeling",
    animation: hobby.modeling,
  },
  {
    key: "anime",
    animation: hobby.anime,
  },
  {
    key: "digitalCreation",
    animation: hobby.digitalCreation,
  },
  {
    key: "movies",
    animation: hobby.movie,
  },
  {
    key: "traveling",
    animation: hobby.traveling,
  },
  {
    key: "gaming",
    animation: hobby.gaming,
  },
]

export default function Hobbies() {
  const { t } = useTranslation()

  const delays = useRandomArray(datas.length)

  const showInOnce = 4
  const [showing, setShowing] = useState(showInOnce)

  const canShowMore = showing < datas.length

  const handdleShowMore = () => {
    if (!canShowMore) return
    setShowing(showing + showInOnce)
  }

  return (
    <div className=" py-16">
      <h1 className="text-3xl font-bold text-text mb-16 flex items-center space-x-2">
        <MdInterests />
        <span>{t('hobbiesSectionTitle')}</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {datas.slice(0, showing).map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delays[index] }}
          >
            <LottieCard
              animation={hobby.animation}
              contentClassName="space-y-3"
              className="w-full h-full"
            >
              <h1 className="text-text text-lg">{t(`hobbies.${hobby.key}.title`)}</h1>
              <p>{t(`hobbies.${hobby.key}.description`)}</p>
            </LottieCard>
          </motion.div>
        ))}
      </div>
      {canShowMore && (
        <div className="mt-16">
          <Button className="m-auto" onClick={handdleShowMore}>
            {t('Show More')}
          </Button>
        </div>
      )}
    </div>
  )
}
