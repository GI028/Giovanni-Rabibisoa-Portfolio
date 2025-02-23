import React from "react"
import { cn } from "../../utils/helpers"

interface FullHeightProps extends React.HTMLProps<HTMLDivElement> {
  skipNavbar?: boolean
}

const FullHeight: React.FC<FullHeightProps> = ({
  skipNavbar = false,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("min-h-lvh", skipNavbar && "pt-16", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default FullHeight
