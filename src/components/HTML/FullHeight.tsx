import React from "react"
import { cn } from "../../utils/helpers"

interface FullHeightProps extends React.HTMLProps<HTMLDivElement> {
  skipNavbar?: boolean,
  onDefaultSize?: boolean,
  onSm?: boolean,
  onMd?: boolean,
  onLg?: boolean,
  onXl?: boolean,
}

const FullHeight: React.FC<FullHeightProps> = ({
  skipNavbar = false,
  children,
  className,
  onDefaultSize=true,
  onSm=false,
  onMd=false,
  onLg=false,
  onXl=false,
  ...props
}) => {
  return (
    <div
      className={cn( 
        onDefaultSize && "min-h-lvh",
        onSm && "sm:min-h-lvh",
        onMd && "md:min-h-lvh",
        onLg && "lg:min-h-lvh",
        onXl && "xl:min-h-lvh",
        skipNavbar && "pt-16", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default FullHeight
