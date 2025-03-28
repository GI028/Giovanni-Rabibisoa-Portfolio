import { useTranslation } from "react-i18next"
import FullHeight from "../../components/HTML/FullHeight"
import SkipNavbar from "../../components/HTML/SikpNavbar"
import { cn } from "../../utils/helpers"

type Props = {
  sections: string[]
  activeSection: string
  scrollToSection: (section: string) => void
}

export default function Sidebar({
  sections,
  activeSection,
  scrollToSection,
}: Props) {
  const {t} = useTranslation()
  return (
    <>
      <FullHeight className="md:fixed md:top-0 w-full md:w-70 lg:w-80 xl:w-100 flex items-center">
        <SkipNavbar className="space-y-10 md:space-y-0">
          <div className="mb:pr-6 mb:pb-16">
            <header className="space-y-10 md:space-y-4 mb-5">
              <h2 className="text-text text-4xl font-bold">
                Rabibisoa Giovanni
              </h2>
              <h3 className="text-text text-2xl">{t("skills.title")}</h3>
              <p>
                {t("skills.description")}
              </p>
            </header>
            <h1 className="md:mb-4 text-2xl">{t("Skills")}</h1>
            <ul>
              {sections.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(label)}
                    className={cn(
                      "flex items-center cursor-pointer gap-4 uppercase group text-text md:text-text-3 hover:text-text transition-color duration-200",
                      activeSection === label && "active"
                    )}
                  >
                    <span className="inline-block md:w-10 w-15 h-[2px] rounded-full bg-text md:bg-text-3 group-hover:bg-text group-hover:w-20 group-[.active]:bg-text group-[.active]:w-20 transition-all duration-200" />
                    <span className="group-[.active]:text-text">{t(label)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </SkipNavbar>
      </FullHeight>
      <div className="md:w-70 lg:w-80 xl:w-100 hidden md:block" />
    </>
  )
}
