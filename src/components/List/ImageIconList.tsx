import Tooltip from "../HTML/Tooltip"
import SquareImage from "../HTML/SquareImage"
import { ImageInfo } from "../../data/Skills/typesAndFunctions"

type Props = {
  imageSize?: number
  list: ImageInfo[]
}

export default function ImageIconList({ imageSize = 10, list }: Props) {
  return (
    <ul className="flex items-center w-full flex-wrap gap-5">
      {list.map(({ image, title }, index) => (
        <li key={index}>
          <Tooltip tip={title}>
            <SquareImage
              className={`aspect-square w-${imageSize} rounded`}
              src={image}
            />
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
