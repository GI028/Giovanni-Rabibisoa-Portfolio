import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import LanguageDetector from "i18next-browser-languagedetector"

import enLang from "./lang/en/en.json"
import frLang from "./lang/fr/fr.json"
import mgLang from "./lang/mg/mg.json"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
  mg: {
    translation: mgLang,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
