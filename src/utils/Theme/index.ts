import { IconType } from "react-icons"
import { MdLightMode } from "react-icons/md"
import { RiMoonClearFill } from "react-icons/ri"
import { WiMoonAltThirdQuarter } from "react-icons/wi"

type ThemeName = "light" | "dark" | "auto"

export class ThemeElement {
  name: ThemeName
  private _icon: IconType
  _label?:string

  constructor(name: ThemeName, icon: IconType) {
    this.name = name
    this._icon = icon
  }

  get label():string{
    if(!this._label){
      const label = this.name as string
      this._label = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()
    }
    return this._label
  }

  get Icon(): IconType {
    return this._icon
  }

  chose() {
    localStorage.theme = this.name
    Theme.select(this)
    Theme.apply()
  }

  get isActif(): boolean {
    return Theme.isSelected(this)
  }

  get isActifInStorage(): boolean {
    return this.isActifFunction()
  }

  isActifFunction = (): boolean => {
    return localStorage.theme === this.name
  }
}

const system = new ThemeElement("auto", WiMoonAltThirdQuarter )
const darkMode = new ThemeElement("dark", RiMoonClearFill )
const lightMode = new ThemeElement("light", MdLightMode )

system.isActifFunction = function (): boolean {
  return !("theme" in localStorage) || localStorage.theme === this.name
}

class Theme {
  system: ThemeElement
  darkMode: ThemeElement
  lightMode: ThemeElement
  private static _selected: ThemeElement

  mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  private static instance: Theme

  constructor(
    system: ThemeElement,
    darkMode: ThemeElement,
    lightMode: ThemeElement
  ) {
    this.system = system
    this.darkMode = darkMode
    this.lightMode = lightMode

    Theme._selected = darkMode.isActifInStorage
      ? darkMode
      : lightMode.isActifInStorage
      ? lightMode
      : system

    Theme.instance = this
    Theme.apply()
    this.mediaQuery.onchange = Theme.apply
  }

  get list(): ThemeElement[] {
    return [this.system, this.lightMode, this.darkMode]
  }

  get selected(): ThemeElement {
    return Theme._selected
  }

  static select(theme: ThemeElement): void {
    Theme._selected = theme
  }

  static isSelected(theme: ThemeElement): boolean {
    return Theme._selected === theme
  }

  static apply(): void {
    const theme = Theme.instance
    document.documentElement.classList.toggle(
      theme.darkMode.name,
      theme.darkMode.isActif ||
        (theme.system.isActif && theme.mediaQuery.matches)
    )
  }
}

const theme = new Theme(system, darkMode, lightMode)

export { theme }
