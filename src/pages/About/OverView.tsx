import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"
import Button from "../../components/FormComponents/Button"
import Profile from "../../assets/myPhotos/myProfile.png"
import FullHeight from "../../components/HTML/FullHeight"
// import { IoTriangle } from "react-icons/io5"

export default function OverView() {
  return (
    <FullHeight skipNavbar className="flex flex-col-reverse sm:flex-row sm:space-x-5  justify-items-stretch items-center pb-16 border-b-2 border-bg-2">
      <div className="flex-3 space-y-6">
        <h3 className="text-xl font-bold text-text-2">Hello it's me</h3>
        <h1 className="text-4xl font-bold text-text">Giovanni Rabibisoa</h1>
        <p className="text-xl font-bold text-text-2">And i'm a <strong className="text-text font-bold">FullStack Developper</strong></p>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          eveniet placeat expedita odio sapiente aut sed reiciendis vel amet
          modi, tempore dolore accusantium laboriosam veniam ab saepe
          architecto, delectus ea beatae labore tempora quos molestias quidem.
          Molestiae libero fugit aliquam voluptatum totam reiciendis aut aliquid
          fugiat, magni voluptatibus illum perferendis.
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
        <Button>Download CV</Button>
      </div>
      <div className="flex-1 md:flex-2 lg:flex-3 my-10 md:my-0">
        <div className="size-fit mx-auto rounded-full relative">
          {/* <IoTriangle  size={250} className="stack glow text-primary rotate-190" />
          <IoTriangle  size={250} className="stack glow text-primary rotate-170" /> */}
          {/* <FaDotCircle size={250} className="stack glow text-primary rotate-170" /> */}
          <div className="size-100">
            <div className="size-full stack flex justify-center">
              <img src={Profile} alt="" className="h-full bg-primary rounded-full " />
            </div>
          </div>
        </div>
      </div>
    </FullHeight>
  )
}
