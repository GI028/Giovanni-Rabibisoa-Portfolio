import React from "react"
import { cn } from "../../utils/helpers"

type Props = {
  children: React.ReactNode
  spacing?: number
  time: React.ReactNode
  isFirst: boolean
  isLast: boolean
}

export default function ExperienceTimeline({
  children,
  spacing = 0,
  time,
  isFirst,
  isLast,
}: Props) {
  return (
    <div className={cn("flex items-stretch group py-3 sm:py-0 border-t-1 border-text-4 sm:border-t-0",isLast && "border-b-1 sm:border-b-0")}>
      <div
        className={cn(
          "border-0 sm:border-1 border-text-4 flex items-center flex-col justify-center",
          !isFirst && "sm:border-t-0",
          !isLast && "sm:border-b-0"
        )}
      >
        <div className="border-r-1 border-text h-fit px-4 py-2">{time}</div>
        {!isLast && <div className={`h-${spacing} hidden sm:block`}></div>}
      </div>
      <div className="flex-grow">
        {children}
        {!isLast && <div className={`h-${spacing} hidden sm:block`}></div>}
      </div>
    </div>
  )
}
