import React from "react"
import { cn } from "../../utils/helpers"

interface Props extends React.HTMLProps<HTMLDivElement> {
  onDefaultSize?: boolean
  onSm?: boolean
  onMd?: boolean
  onLg?: boolean
  onXl?: boolean
}

const SkipNavbar: React.FC<Props> = ({
  onDefaultSize = true,
  onSm = false,
  onMd = false,
  onLg = false,
  onXl = false,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        onDefaultSize && "pt-16",
        onSm && "sm:pt-16",
        onMd && "md:pt-16",
        onLg && "lg:pt-16",
        onXl && "xl:pt-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default SkipNavbar
