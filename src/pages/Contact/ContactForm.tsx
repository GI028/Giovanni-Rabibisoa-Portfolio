import { useTranslation } from "react-i18next"

export default function ContactForm() {
  const {t} = useTranslation()
  return (
    <div className="w-full pr-0 md:pr-4">
      <div className="space-y-4 max-w-150 py-10 px-4 m-auto bg-bg-2/30 rounded backdrop-blur-xs">
        <h2 className="text-2xl text-text mb-10">{t('Contact Me')}</h2>
        <div>
          <input
            className="border-2 px-2 py-4 w-full bg-bg "
            type="text"
            placeholder={t("Name")}
          />
        </div>
        <div>
          <input
            className="border-2 px-2 py-4 w-full bg-bg "
            type="email"
            placeholder={t("Email")}
          />
        </div>
        <div>
          <textarea
            className="border-2 px-2 py-4 w-full bg-bg min-h-30"
            placeholder={t("Your Message")}
          ></textarea>
        </div>
        <div>
          <button className="border-1 px-12 py-3 bg-bg hover:bg-bg-2 transition-all duration-200 cursor-pointer text-text rounded-full">{t("Send")}</button>
        </div>
      </div>
    </div>
  )
}
