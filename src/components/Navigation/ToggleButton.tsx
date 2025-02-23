import { motion } from "motion/react"
import React from "react"

const Path = (props: any) => (
  <motion.path
    fill="none"
    strokeLinecap="round"
    strokeMiterlimit="10"
    strokeWidth="48"
    {...props}
  />
)

const line = (
  start_x: number,
  start_y: number,
  end_x: number,
  end_y: number
): string => {
  return `M${start_x} ${start_y} L${end_x} ${end_y}`
}


const ToggleButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const rm=60
    return (
    <button {...props}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-6 h-6 font-bold"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          variants={{
            closed: { d: line(88, 152, 424, 152) },
            open: { d: line(88+rm, 360, 424-rm, 152) },
          }}
        />
        <Path
          d="M88 256h336"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: line(88, 360, 424, 360) },
            open: { d: line(88+rm, 152, 424-rm, 360) },
          }}
        />
      </svg>
    </button>
  )
}

export default ToggleButton
