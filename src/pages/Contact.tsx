import FullHeight from "../components/HTML/FullHeight"
import ContactForm from "./Contact/ContactForm"
import ContactList from "./Contact/ContactList"
import ContactPicture from "./Contact/ContactPicture"

export default function Contact() {
  return (
    <div className="pt-4 md:pt-0">
      <FullHeight
        skipNavbar
        className="flex mb-4 md:mb-0 items-stretch gap-4 flex-col md:flex-row md:items-center"
      >
        <div className="flex items-center justify-between">
          <ContactPicture />
          <div className="hidden sm:block md:hidden flex-grow-1">
            <div className="w-fit m-auto">
              <ContactList />
            </div>
          </div>
        </div>
        <div className="flex-grow-1">
          <ContactForm />
        </div>
      </FullHeight>
      <div className="block sm:hidden md:block">
      <ContactList />
      </div>
    </div>
  )
}
