import React from "react"
import { cn } from "../../utils/helpers"

export default function Container({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("px-4 md:px-20 lg:px-40", className ?? "")} {...props}>
      {children}
    </div>
  )
}
