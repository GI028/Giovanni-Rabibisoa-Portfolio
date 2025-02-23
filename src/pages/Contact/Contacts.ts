import { IconType } from "react-icons"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { MdAttachEmail } from "react-icons/md"

type Contact = {
  label: string
  target: string
  Icon: IconType
}

const contacts: Contact[] = [
  {
    label: "GitHub",
    target: "https://github.com/rguillou",
    Icon: FaGithubSquare,
  },
  {
    label: "LinkedIn",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: FaLinkedin,
  },
  {
    label: "giovannirabibisoa@gmail.com",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: MdAttachEmail,
  },
  {
    label: "Facebook",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: FaFacebookSquare,
  },
]

export default contacts
