import { MdInterests } from "react-icons/md"
import LottieCard from "../../components/Card/LottieCard"
import hobby from "../../assets/animations/Hobbies"
import Button from "../../components/FormComponents/Button"
import { motion } from "motion/react"
import useRandomArray from "../../utils/hooks/useRandomArray"
import { useState } from "react"

type Hobbie = {
  name: string
  description: string
  animation: object
}

const datas: Hobbie[] = [
  {
    name: "Coding",
    description:
      "I love building projects, learning new technologies, and solving problems through code.",
    animation: hobby.coding,
  },
  {
    name: "Music",
    description:
      "Listening to and playing music helps boost my creativity and focus.",
    animation: hobby.music,
  },
  {
    name: "Reading",
    description:
      "I love reading about technology, innovation, sciences and personal development.",
    animation: hobby.reading,
  },
  {
    name: "Sport",
    description:
      "I enjoy playing sports, especially football and basketball.        ",
    animation: hobby.sport,
  },
  {
    name: "3D Modeling",
    description:
      "I like creating 3D models and exploring design possibilities.       ",
    animation: hobby.modeling,
  },
  {
    name: "Anime",
    description:
      "I enjoy watching anime series and reading manga for inspiration.   ",
    animation: hobby.anime,
  },
  {
    name: "Digital Creation",
    description:
      "I enjoy creating digital art and content using various tools.      ",
    animation: hobby.digitalCreation,
  },
  {
    name: "Movies",
    description:
      "I enjoy watching movies from different genres and cultures.        ",
    animation: hobby.movie,
  },
  {
    name: "Traveling",
    description:
      "I enjoy exploring new places and experiencing different cultures.  ",
    animation: hobby.traveling,
  },
  {
    name: "Gaming",
    description:
      "I enjoy playing video games and immersing in virtual worlds.       ",
    animation: hobby.gaming,
  },
]

export default function Hobbies() {
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
        <span>Hobbies and Interests</span>
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
              <h1 className="text-text text-lg">{hobby.name}</h1>
              <p>{hobby.description}</p>
            </LottieCard>
          </motion.div>
        ))}
      </div>
      {canShowMore && (
        <div className="mt-16">
          <Button className="m-auto" onClick={handdleShowMore}>
            Show More
          </Button>
        </div>
      )}
    </div>
  )
}
