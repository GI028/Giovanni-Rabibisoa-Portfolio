import { useState } from "react"
import { theme, ThemeElement } from "../../utils/Theme"
import Dropdown from "../Dropdown/Dropdown"
import { cn } from "../../utils/helpers"
import { FaCheck } from "react-icons/fa6"
import { useTranslation } from "react-i18next"
export default function ThemeChange() {
  const {t} = useTranslation()
  
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
          <Theme.Icon /> {t(Theme.label)}  {Theme.isActif&&<FaCheck />}
        </button>
      ))}
    </Dropdown>
  )
}
