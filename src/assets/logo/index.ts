import { loadAssets } from "../../utils/helpers"

const modules = import.meta.glob("./*.{png,svg,jpg,webp}", {
  eager: true,
}) as Record<string, { default: string }>

// const logo = loadAssets(keys, modules)
const logo = loadAssets(modules)

export default logo
