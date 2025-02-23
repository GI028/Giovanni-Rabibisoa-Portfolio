import picture from "../../assets/myPhotos/DSC06224.png"
import CircularList from "../../components/List/CircularList"
import FullHeight from "../../components/HTML/FullHeight"

export default function OverView() {
  return (
    <FullHeight skipNavbar className="flex items-center gap-4">
      <div className="w-fit h-[60vh] relative">
        <div className="size-full flex justify-end bg-primary rounded-r-full pl-8 overflow-hidden">
          <img src={picture} alt="" className="h-full" />
        </div>
        <div className="absolute text-md text-text h-full top-[50%] left-[17%] -translate-[50%]">
          <CircularList
            totalAngle={30}
            list={[
              <a href="/" className="w-6 block bg-amber-200">
                Informatik
              </a>,
              <a href="/" className="w-6 block bg-amber-200">
                Electronic
              </a>,
              <a href="/" className="w-6 block bg-amber-200">
                Human
              </a>,
            ]}
            // list={[
            //   <FaFacebookSquare className="hover:text-primary cursor-pointer"/>,
            //   <FaLinkedin className="hover:text-primary cursor-pointer"/>,
            //   <FaGithubSquare className="hover:text-primary cursor-pointer"/>,
            //   <FaInstagram className="hover:text-primary cursor-pointer"/>,
            // ]}
          />
        </div>
      </div>
      <h1 className="ml-10">List of links and more</h1>
      <div>My skills resumes</div>
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
