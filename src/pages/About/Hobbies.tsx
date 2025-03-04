import { MdInterests } from "react-icons/md"
import LottieCard from "../../components/Card/LottieCard"
import Coding from "../../assets/animations/Coding.json"
import Music from "../../assets/animations/MusicPlay.json"
import Read from "../../assets/animations/ReadBooks.json"
import Sport from "../../assets/animations/Sport.json"
import Button from "../../components/FormComponents/Button"
import { motion } from "motion/react"

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
    animation: Coding,
  },
  {
    name: "Music",
    description:
      "Listening to and playing music helps boost my creativity and focus.",
    animation: Music,
  },
  {
    name: "Reading",
    description:
      "I love reading about technology, innovation, sciences and personal development.",
    animation: Read,
  },
  {
    name: "Sport",
    description: "I enjoy playing sports, especially football and basketball.",
    animation: Sport,
  },
]

export default function Hobbies() {
  return (
    <div className=" py-16">
      <h1 className="text-3xl font-bold text-text mb-16 flex items-center space-x-2">
        <MdInterests />
        <span>Hobbies and Interests</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {datas.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
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
      <div className="mt-16">
        <Button className="m-auto">Show More</Button>
      </div>
    </div>
  )
}
