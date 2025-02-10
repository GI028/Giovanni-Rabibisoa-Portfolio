import Dropdown from "../Dropdown/Dropdown"
import { cn } from "../../utils/helpers"
import { LuLanguages } from "react-icons/lu"

export default function LangChange() {
  const iconSize = 20

  return (
    <Dropdown
      trigerClass="cursor-pointer"
      triger={
        <button className="h-full cursor-pointer">
          <LuLanguages size={iconSize} />
        </button>
      }
    >
        <button
          className={cn("inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",false && "bg-bg-2")}
          role="menuitem"
          onClick={() => {}}
        >
          fr
        </button>
        <button
          className={cn("inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",true && "bg-bg-2")}
          role="menuitem"
          onClick={() => {}}
        >
          en
        </button>
        <button
          className={cn("inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",false && "bg-bg-2")}
          role="menuitem"
          onClick={() => {}}
        >
          mg
        </button>
    </Dropdown>
  )
}
