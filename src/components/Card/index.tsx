import React from "react"
import { cn } from "../../utils/helpers"

type Props = {
  head: React.ReactNode
  headClassName?: string
  children: React.ReactNode
  contentClassName?: string
}

export default function Card({
  head,
  headClassName,
  children,
  contentClassName,
}: Props) {
  return (
    <div className="bg-bg-2 rounded p-2 shadow-md">
      <div className={cn("aspect-square flex items-center", headClassName)}>{head}</div>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}
