import Dropdown from "../Dropdown/Dropdown"
import { cn } from "../../utils/helpers"
import { LuLanguages } from "react-icons/lu"
import { FaCheck } from "react-icons/fa6"
import logo from "../../assets/logo"
import { useTranslation } from "react-i18next"

type Language = {
  name: string
  code: string
  icon: string
}

const languages: Language[] = [
  {
    name: "Français",
    code: "fr",
    icon: logo.frenchFlag,
  },
  {
    name: "English",
    code: "en",
    icon: logo.englishFlag,
  },
  {
    name: "Malagasy",
    code: "mg",
    icon: logo.madagascarFlag,
  }
]

export default function LangChange() {
  const {i18n} = useTranslation()
  const currentLanguage = i18n.resolvedLanguage
  
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
      {
        languages.map((language, index) => (
          <button
            key={index}
            className={cn(
              "inline-flex items-center gap-2 w-full  px-4 py-2 text-sm text-text hover:bg-bg-3 cursor-pointer",
              language.code === currentLanguage && "bg-bg-2"
            )}
            role="menuitem"
            onClick={() => i18n.changeLanguage(language.code)}
          >
            <div className="w-5">
              <img src={language.icon} className="w-5" alt="" />
            </div>
            <span>{language.code}</span>
            {language.code === currentLanguage && <div><FaCheck /></div>}
          </button>
        ))
      }
    </Dropdown>
  )
}
