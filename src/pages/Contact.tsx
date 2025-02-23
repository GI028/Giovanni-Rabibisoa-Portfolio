import FullHeight from "../components/HTML/FullHeight"
import ContactForm from "./Contact/ContactForm"
import ContactList from "./Contact/ContactList"
import ContactPicture from "./Contact/ContactPicture"

export default function Contact() {
  return (
    <div>
      <FullHeight skipNavbar className="flex items-center gap-4">
        <ContactPicture />
        <ContactForm />
      </FullHeight>
      <ContactList />
    </div>
  )
}
