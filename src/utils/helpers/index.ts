type Cn = string | boolean | null | undefined

function concatClassNames(...args: Cn[]): string {
  return args.filter((item) => !!item).join(" ")
}

function loadAssets(
  modules: Record<string, { default: string }>
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const path in modules) {
    const filename = path.split("/").pop() || ""
    const name = filename.split(".")[0]

    result[name as string] = modules[path].default
  }

  return result
}

function loadAssetsWithKeys(
  keys: string[],
  modules: Record<string, { default: string }>
): Record<string, string> {
  const result: Record<string, string> = Object.fromEntries(
    keys.map((key) => [key, ""])
  ) as Record<string, string>

  for (const path in modules) {
    const filename = path.split("/").pop() || ""
    const name = filename.split(".")[0]

    if (name in result) {
      result[name as string] = modules[path].default
    }
  }

  // Warn if a key is missing an image
  Object.entries(result).forEach(([key, value]) => {
    if (value.length === 0) console.warn(`⚠️ Missing image for: ${key}`)
  })

  return result
}

export type MinMax = { min: number; max: number }
const createRandomDelays = (
  ref: React.MutableRefObject<number[]>,
  length: number,
  interval: MinMax = { min: 0, max: 0.4 }
): void => {
  if (ref.current.length < length) {
    for (let i = ref.current.length; i < length; i++) {
      ref.current.push(
        Math.round(
          (interval.min + (interval.max - interval.min) * Math.random()) * 100
        ) / 100
      ) // Adjust delay time as needed for loading assets in real-world scenario.
    }
  }
}

const randomBetween = (interval: MinMax = { min: 0, max: 1 }): number =>
  interval.min + (interval.max - interval.min) * Math.random()

export {
  concatClassNames as cn,
  loadAssets,
  loadAssetsWithKeys,
  createRandomDelays,
  randomBetween,
}
