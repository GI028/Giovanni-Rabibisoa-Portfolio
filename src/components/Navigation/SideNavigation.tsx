import { motion } from "motion/react"
import { navData } from "./NavBar"
import { NavLink } from "react-router"
import { cn } from "../../utils/helpers"
import { MouseEventHandler } from "react"

type Props = {
  close: () => void // Function takes no arguments and returns void
}

const navVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  }),
  closed: {
    clipPath: "circle(0px at  50% 0)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const bgVariants = {
  open: {
    width: "100vw",
  },
  closed: {
    width: "0vw",
    transition: {
      delay: 0.4,
    },
  },
}

export default function SideNavigation({ close }: Props) {
    const closeNavigation:MouseEventHandler<HTMLDivElement> = (e)=>{
        if(e.currentTarget==e.target)
            close()
    }
  return (
    <motion.div
      variants={bgVariants}
      className="fixed overflow-hidden min-h-lvh w-lvw bg-gray-600/50 right-0 top-0 flex flex-row-reverse"
      onClick={closeNavigation}
    >
      <motion.ul className="bg-bg pt-15 min-w-50" variants={navVariants}>
        {navData.map(({ label, target }, index) => (
          <motion.li key={index} variants={itemVariants}>
            <NavLink
              to={target}
              className={({ isActive }) =>
                cn(
                  "block p-4",
                  isActive
                    ? "font-medium text-text bg-bg-2"
                    : "text-text-2 hover:text-text"
                )
              }
            >
              {label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
