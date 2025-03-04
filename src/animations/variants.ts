import { Variants } from "motion/react"

export const fromRightVariant: Variants = {
  initial: { opacity: 0, x: 150 },
  inView: { opacity: 1, x: 0 },
}
export const fromBottomVariant: Variants = {
  initial: { opacity: 0, y: 50 },
  inView: { opacity: 1, y: 0 },
}

export const scaleVariant: Variants = {
  initial: { opacity: 0, scale: "0" },
  inView: { opacity: 1, scale: "100%" },
}
