import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"
import Profile from "../../assets/myPhotos/myProfile.png"
import FullHeight from "../../components/HTML/FullHeight"
import { motion } from "motion/react"
import { Trans, useTranslation } from "react-i18next"
import ButtonLink from "../../components/FormComponents/ButtonLink"
// import { IoTriangle } from "react-icons/io5"

export default function OverView() {
  const { t } = useTranslation()
  return (
    <FullHeight
      skipNavbar
      className="flex flex-col-reverse sm:flex-row sm:space-x-5  justify-items-stretch items-center pb-16 sm:pb-0 border-b-2 border-bg-2"
    >
      <motion.div
        className="flex-3 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, easings: "easeIn" }}
      >
        <h3 className="text-xl font-bold text-text-2">{t("hello")}</h3>
        <h1 className="text-4xl font-bold text-text">Rabibisoa Giovanni</h1>
        <p className="text-xl font-bold text-text-2">
          <Trans i18nKey="fullstack">
            And i'm a
            <strong className="text-text font-bold">
              FullStack Developper
            </strong>
          </Trans>
        </p>
        <p className="text-justify">
          {t("description")}
        </p>
        <ul className="flex space-x-4 text-primary text-2xl">
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
        <ButtonLink href={t("downloadLink")} download="SampleFile.pdf" target="_blank">{t('downloadCV')}</ButtonLink>
      </motion.div>
      <div className="flex-1 md:flex-2 lg:flex-3 my-10 md:my-0">
        <div className="size-fit mx-auto rounded-full relative">
          {/* <IoTriangle  size={250} className="stack glow text-primary rotate-190" />
          <IoTriangle  size={250} className="stack glow text-primary rotate-170" /> */}
          {/* <FaDotCircle size={250} className="stack glow text-primary rotate-170" /> */}
          <div className="size-100">
            <motion.div
              className="size-full stack flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, easings: "easeIn", delay: 0.1 }}
              exit="exit"
            >
              <img
                src={Profile}
                alt=""
                className="h-full bg-primary rounded-full "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </FullHeight>
  )
}
