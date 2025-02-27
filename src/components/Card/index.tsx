import React from "react"

type Props = {
  head: React.ReactNode
  headClassName?: string
  children: React.ReactNode
  contentClassName?: string
  className?: string
}

export default function Card({
  head,
  headClassName="",
  children,
  contentClassName="",
  className = "",
 
}: Props) {
  return (
    <div className={"bg-bg-2 rounded p-2 shadow-md "+className}>
      <div className={"aspect-square flex items-center "+headClassName}>{head}</div>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}
