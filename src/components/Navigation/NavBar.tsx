import { useEffect, useState } from "react"
import ThemeChange from "./ThemeChange"
import { cn } from "../../utils/helpers"
import LangChange from "./LangChange"
import {
  Link,
  NavLink,
  useLocation
} from "react-router"
import ToggleButton from "./ToggleButton"
import { motion } from "motion/react"
import SideNavigation from "./SideNavigation"

type Props = {
  className?: string
}

type NavigationData = {
  label: string
  target: string
}

const navData: NavigationData[] = [
  "About",
  "Educations",
  "Skills",
  "Projects",
  "Contact",
].map((label) => {
  return { label: label, target: `/${label.toLowerCase()}` }
})

navData[0].target = "/"

export default function NavBar({ className }: Props) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) setVisible(false)
    document.body.scrollIntoView({
      behavior: "instant",
      block: "start",
    })
  }, [pathname])

  const toggleNavbar = () => {
    setVisible((prev) => !prev)
  }

  return (
    <header
      className={cn(
        " fixed top-0 w-full bg-bg/50 backdrop-blur-xs text-text py-2 xs:py-4 px-4 min-h-14 border-b-2 border-bg-3 z-30",
        className
      )}
    >
      <nav className="flex justify-between items-center flex-wrap  w-full">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
          <Link to="/">R G</Link>
        </h1>
        <ul className="font-normal hidden xs:flex w-fit space-x-4 mt-0 sm:space-x-8">
          {navData.map(({ label, target }, index) => (
            <li key={index}>
              <NavLink
                to={target}
                className={({ isActive }) =>
                  cn(
                    "block p-0",
                    isActive
                      ? "font-medium text-text"
                      : "text-text-2 hover:text-text"
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangChange />
          <ThemeChange />
          <motion.nav initial={false} animate={visible ? "open" : "closed"}>
            <ToggleButton
              onClick={toggleNavbar}
              type="button"
              className={cn("flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-text xs:hidden hover:bg-bg-3 border-bg-3 border-2 relative z-30 transition-all duration-300",visible?"rounded-4xl":"rounded-lg")}
            />
            <SideNavigation close={()=>setVisible(false)} />
          </motion.nav>
        </div>
      </nav>
    </header>
  )
}

export {navData}