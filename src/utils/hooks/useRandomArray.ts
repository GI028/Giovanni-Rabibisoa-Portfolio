import { useRef } from "react"
import { MinMax, randomBetween } from "../helpers"

const useRandomArray = (length: number, interval:MinMax={min:0,max:0.5}): number[] => {
  const ref = useRef<number[]>([])
  if (ref.current.length < length) {
    ref.current = Array.from({ length }, () => randomBetween(interval))
  }
  return ref.current
}

export default useRandomArray
