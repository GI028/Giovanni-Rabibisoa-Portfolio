import React from "react"

type Props = {
  rotation?: number
  totalAngle: number
  reverse?: boolean
  list: React.ReactNode[]
}

export default function CircularList({
  rotation = 0,
  totalAngle,
  reverse = false,
  list,
}: Props) {
  const r = totalAngle / (list.length - 1)
  const firstRotation = totalAngle / 2
  const sign = reverse ? 1 : -1
  return (
    <ul className="relative h-full aspect-square">
      {list.map((item, index) => {
        const angle = firstRotation - r * index + rotation
        return (
          <li
            key={index}
            className={`absolute left-[50%] top-[50%] -translate-[50%] w-[120%] text-right block`}
            style={{ transform: `rotate(${sign*angle}deg)` }}
          >
            <span
              className={` inline-block`}
              style={{ transform: `rotate(${-sign*angle}deg)` }}
            >
              {item}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
