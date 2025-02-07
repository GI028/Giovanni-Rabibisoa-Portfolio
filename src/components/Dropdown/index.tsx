// components/Dropdown.jsx

import React, { useState } from "react"
import { cn } from "../../utils/helpers"
import { RiArrowDropDownLine } from "react-icons/ri"

type DropdownProps = {
  children: React.ReactNode
  triger: React.ReactNode
  trigerClass?: string
}

const Dropdown = ({ children, triger, trigerClass}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div 
      className="relative inline-block text-left"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className={cn(
            trigerClass,
            "overflow-hidden flex items-center"
          )}
        >
          {triger} <RiArrowDropDownLine className="text-md"/>
        </div>
        {isOpen && (
          <div
            className="origin-center right-0 absolute w-fit
                    rounded-md shadow-lg bg-bg ring-1 ring-bg-3 ring-opacity-5
                    focus:outline-none overflow-hidden"
            role="menu"
            onClick={()=>setIsOpen(false)}
          >
            {children}
          </div>
        )}
      </div>
  )
}

export default Dropdown
