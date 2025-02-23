import CircularList from "../../components/List/CircularList"
import picture from "../../assets/myPhotos/DSC06224.png"
import contacts from "./Contacts"

export default function ContactPicture() {
  return (
    <div className="w-fit h-[60vh] relative mr-0 md:mr-15">
      <div className="size-full flex justify-end bg-primary rounded-r-full pl-8 overflow-hidden">
        <img src={picture} alt="" className="h-full" />
      </div>
      <div className="absolute text-3xl block sm:hidden md:block text-text h-full top-[50%] left-[17%] -translate-[50%]">
        <CircularList
          totalAngle={60}
          list={contacts.map(({ label, target, Icon }, index) => (
            <a
              href={target}
              title={label}
              className="hover:text-primary transition-colors duration-200 ease-in"
              key={index}
              target="_blank"
            >
              <Icon />
            </a>
          ))}
          // list={[
          //   <FaFacebookSquare className="" />,
          //   <FaLinkedin className="hover:text-primary cursor-pointer" />,
          //   <FaGithubSquare className="hover:text-primary cursor-pointer" />,
          //   <FaInstagram className="hover:text-primary cursor-pointer" />,
          // ]}
        />
      </div>
    </div>
  )
}
