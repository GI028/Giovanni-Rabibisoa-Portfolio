import contacts from "./Contacts"
import { cn } from "../../utils/helpers"

export default function ContactList() {
  return (
    <div>
      <ul className="flex gap-4 justify-center p-10 bg-bg-2/50">
        {contacts.map(({ name, value, target, Icon }, index) => (
          <li key={index}>
            <a
              href={target}
              className={cn(
                "hover:text-primary flex items-center gap-2",
                index !== contacts.length - 1 && "border-r-2 pr-4",
              )}
              key={index}
              target="_blank"
            >
              <Icon className="text-2xl" /> <span>{name + ": " + value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
