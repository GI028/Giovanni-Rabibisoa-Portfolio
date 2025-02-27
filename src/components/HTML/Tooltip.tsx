import React, { useEffect, useRef, useState } from "react"

type Position = "top" | "bottom" | "left" | "right"

type Props = {
  tip: React.ReactNode
  children: React.ReactNode
  preferredPosition?: Position
}

export default function Tooltip({
  tip,
  children,
  preferredPosition = "bottom",
}: Props) {
  const [position, setPosition] = useState<Position>(preferredPosition)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current && tooltipRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        let newPosition: Position = preferredPosition

        if (
          preferredPosition === "bottom" &&
          containerRect.bottom + tooltipRect.height > viewportHeight
        ) {
          newPosition = "top"
        } else if (
          preferredPosition === "top" &&
          containerRect.top - tooltipRect.height < 0
        ) {
          newPosition = "bottom"
        } else if (
          preferredPosition === "right" &&
          containerRect.right + tooltipRect.width > viewportWidth
        ) {
          newPosition = "left"
        } else if (
          preferredPosition === "left" &&
          containerRect.left - tooltipRect.width < 0
        ) {
          newPosition = "right"
        }

        setPosition(newPosition)
      }
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", updatePosition)
    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition)
    }
  }, [preferredPosition])

  return (
    <div>
      <div
        ref={containerRef}
        className="relative h-full flex items-center group overflow-hidden hover:overflow-visible"
      >
        {children}
        <div
          ref={tooltipRef}
          className={`absolute ${getPositionClasses(
            position
          )} w-max h-fit text-sm text-text opacity-0 transition-all z-[1] group-hover:opacity-100`}
        >
          <div className="bg-bg-2 px-2 py-1 rounded h-fit">{tip}</div>
        </div>
      </div>
    </div>
  )
}

const getPositionClasses = (pos: Position): string => {
  switch (pos) {
    case "top":
      return "bottom-full left-1/2 -translate-x-1/2 pb-2"
    case "bottom":
      return "top-full left-1/2 -translate-x-1/2 pt-2"
    case "left":
      return "right-full top-1/2 -translate-y-1/2 pr-2"
    case "right":
      return "left-full top-1/2 -translate-y-1/2 pl-2"
    default:
      return "top-full left-1/2 -translate-x-1/2 pt-2"
  }
}
