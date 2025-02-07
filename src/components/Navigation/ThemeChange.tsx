import { useState } from "react"
import { theme, ThemeElement } from "../../utils/Theme"
import Dropdown from "../Dropdown"
import { cn } from "../../utils/helpers"
import { FaCheck } from "react-icons/fa6"
export default function ThemeChange() {
  const [_, setReload] = useState(false)
  const refresh = () => setReload((old) => !old)

  const { Icon } = theme.selected
  const themes = theme.list
  const iconSize = 20

  return (
    <Dropdown
      trigerClass="cursor-pointer"
      triger={
        <button className="h-full cursor-pointer">
          <Icon size={iconSize} />
        </button>
      }
    >
      {themes.map((Theme: ThemeElement, i) => (
        <button
          className={cn("inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",Theme.isActif && "bg-bg-2")}
          role="menuitem"
          key={Theme.name + i}
          onClick={() => {
            Theme.chose()
            refresh()
          }}
        >
          <Theme.Icon /> {Theme.label}  {Theme.isActif&&<FaCheck />}
        </button>
      ))}
    </Dropdown>
  )
  // return (
  //   <div className="relative inline-block text-left">
  //     <div
  //       onMouseEnter={() => setIsOpen(true)}
  //       onMouseLeave={() => setIsOpen(false)}
  //     >
  //       <button
  //         className="inline-flex justify-center items-center gap-2 w-full rounded-md
  //                   border border-gray-300 shadow-sm px-4 py-2 bg-white
  //                   text-sm font-medium text-gray-700 hover:bg-gray-50
  //                   focus:outline-none"
  //       >
  //         <Icon />
  //       </button>
  //       {isOpen && (
  //         <div
  //           className="origin-top-right absolute right-0 w-fit
  //                   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
  //                   focus:outline-none overflow-hidden"
  //           role="menu"
  //         >
  //               {themes.map((Theme:ThemeElement, i)=>
  //                   <button
  //                       className="inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
  //                       // role="menuitem"
  //                       key={Theme.name + i}
  //                       onClick={()=>{
  //                           Theme.chose()
  //                           setIsOpen(false)
  //                       }}
  //                   >
  //                       <Theme.Icon /> {Theme.name}
  //                   </button>
  //               )}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )
}
