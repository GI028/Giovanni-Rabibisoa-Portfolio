import { motion } from "motion/react"
import FullHeight from "../components/HTML/FullHeight"
import ContactForm from "./Contact/ContactForm"
import ContactList from "./Contact/ContactList"
import ContactPicture from "./Contact/ContactPicture"

export default function Contact() {
  return (
    <div className="pt-4 md:pt-0">
      <FullHeight
        onDefaultSize={false}
        onSm
        skipNavbar
        className="flex mb-4 md:mb-0 items-stretch gap-4 flex-col md:flex-row md:items-center"
      >
        <div className="sm:flex items-center justify-between hidden">
          <motion.div initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}} transition={{duration:0.3}}>
            <ContactPicture />
          </motion.div>
          <motion.div className="hidden sm:block md:hidden flex-grow-1"  initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration:0.3}}>
            <div className="w-fit m-auto">
              <ContactList />
            </div>
          </motion.div>
        </div>
        <motion.div className="flex-grow-1" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.3}}>
          <ContactForm />
        </motion.div>
      </FullHeight>
      <div className="block sm:hidden md:block">
        <ContactList />
      </div>
    </div>
  )
}
