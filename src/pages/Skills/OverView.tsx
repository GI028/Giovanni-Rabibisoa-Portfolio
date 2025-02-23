import FullHeight from "../../components/HTML/FullHeight"

export default function OverView() {
  return (
    <FullHeight skipNavbar className="flex items-center gap-4">
      <ul className="px-6">
        <li>
          <a href="/" className="flex active items-center gap-4 uppercase group hover:text-text transition-color duration-200">
            <span className="inline-block w-10 h-[2px] rounded-full bg-text-3 group-hover:bg-text group-hover:w-20 group-[.active]:bg-text group-[.active]:w-20 transition-all duration-200" /><span className="group-[.active]:text-text">Informatik</span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4 uppercase group hover:text-text transition-color duration-200">
            <span className="inline-block w-10 h-[2px] rounded-full bg-text-3 group-hover:bg-text group-hover:w-20 group-[.active]:bg-text group-[.active]:w-20 transition-all duration-200" /><span className="group-[.active]:text-text">Electronic</span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4 uppercase group hover:text-text transition-color duration-200">
            <span className="inline-block w-10 h-[2px] rounded-full bg-text-3 group-hover:bg-text group-hover:w-20 group-[.active]:bg-text group-[.active]:w-20 transition-all duration-200" /><span className="group-[.active]:text-text">Human</span>
          </a>
        </li>
      </ul>
      <div>
        Elements
      </div>
    </FullHeight>
  )
}

{
  /* <div className="w-fit h-[60vh] relative">
        <div className="size-full flex justify-end bg-primary rounded-r-full pl-8 overflow-hidden">
          <img src={picture} alt="" className="h-full" />
        </div>
        <div className="absolute text-3xl text-text h-full top-[50%] left-[17%] -translate-[50%]">
          <CircularList
            totalAngle={60}
            list={[
              <FaFacebookSquare className="hover:text-primary cursor-pointer"/>,
              <FaLinkedin className="hover:text-primary cursor-pointer"/>,
              <FaGithubSquare className="hover:text-primary cursor-pointer"/>,
              <FaInstagram className="hover:text-primary cursor-pointer"/>,
            ]}
          />
        </div>
      </div> */
}
