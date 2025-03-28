import React from "react"
import { cn } from "../../utils/helpers"

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

function ButtonLink({ children, className, ...props }: Props) {
  return (
    <a
      {...props}
      className={cn(
        "bg-primary w-fit text-white px-2 py-1 space-x-1 border-2 border-transparent hover:bg-bg-light hover:text-primary hover:border-primary font-medium text-sm flex justify-center items-center cursor-pointer transition-all duration-200 ease-in",
        className
      )}
    >
      {children}
    </a>
  )
}

export default ButtonLink
