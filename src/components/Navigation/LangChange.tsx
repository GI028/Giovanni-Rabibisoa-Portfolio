import Dropdown from "../Dropdown/Dropdown"
import { cn } from "../../utils/helpers"
import { LuLanguages } from "react-icons/lu"
import { FaCheck } from "react-icons/fa6"
import logo from "../../assets/logo"

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
        className={cn(
          "inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",
          false && "bg-bg-2"
        )}
        role="menuitem"
        onClick={() => {}}
      >
        <div className="w-5">
          <img src={logo.frenchFlag} className="w-5" alt="" />
        </div>
        <span>fr</span>
      </button>
      <button
        className={cn(
          "inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",
          true && "bg-bg-2"
        )}
        role="menuitem"
        onClick={() => {}}
      >
        <div className="w-5">
          <img src={logo.englishFlag} className="w-5" alt="" />
        </div>
        <span>en</span>
        <div >
          <FaCheck />
        </div>
      </button>
      <button
        className={cn(
          "inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",
          false && "bg-bg-2"
        )}
        role="menuitem"
        onClick={() => {}}
      >
        <div className="w-5">
          <img src={logo.madagascarFlag} className="w-5" alt="" />
        </div>
        <span>mg</span>
      </button>
    </Dropdown>
  )
}
