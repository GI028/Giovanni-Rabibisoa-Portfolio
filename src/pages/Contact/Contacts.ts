import { IconType } from "react-icons"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { MdAttachEmail } from "react-icons/md"

type Contact = {
  name: string
  value: string
  target: string
  Icon: IconType
}

const contacts: Contact[] = [
  {
    name: "GitHub",
    value: "GI028",
    target: "https://github.com/rguillou",
    Icon: FaGithubSquare,
  },
  {
    name: "LinkedIn",
    value: "GI028",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: FaLinkedin,
  },
  {
    name: "Email",
    value: "giovannirabibisoa@gmail.com",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: MdAttachEmail,
  },
  {
    name: "Facebook",
    value: "GI028",
    target: "https://www.linkedin.com/in/rguillou/",
    Icon: FaFacebookSquare,
  },
]

export default contacts
