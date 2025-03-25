import React from "react"
import { cn } from "../../utils/helpers"

type Props = {
    children: React.ReactNode,
    className?:string,
    onClick?: () => void
}

function Button({children, className, onClick}:Props) {
  return (
    <button onClick={onClick} className={
        cn(
            'bg-primary text-white px-2 py-1 space-x-1 border-2 border-transparent hover:bg-bg-light hover:text-primary hover:border-primary font-medium text-sm flex justify-center items-center cursor-pointer transition-all duration-200 ease-in',
            className
        )
    }>
        {children}
    </button>
  )
}

export default Button