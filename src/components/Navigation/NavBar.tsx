import  { useState } from "react"
import { IoMenu } from "react-icons/io5"
import ThemeChange from "./ThemeChange"
import { cn } from "../../utils/helpers"

type Props = {
  className?:string
}

export default function NavBar({className}:Props) {
  const [selected, setSelected] = useState(0)
  const [visible, setVisible] = useState(false)
  const navItems = ["About", "Educations", "Skills", "Projects", "Contact"]

  const toggleNavbar = () => {
    setVisible((prev) => !prev)
  }

  return (
    <header 
    className={cn(" fixed top-0 w-full bg-bg text-text py-2 xs:py-4 px-4 min-h-14 border-b-2 border-bg-3 z-30",className)}
    onBlur={()=>setVisible(false)}
    >
      <nav className="flex justify-between items-center flex-wrap  w-full">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
          <a href="">R G</a>
        </h1>
        <ul className={cn(
          "order-2 xs:order-none font-normal flex-col mt-4 w-full xs:w-fit xs:flex-row xs:space-x-4 xs:mt-0 sm:space-x-8",
          visible ? "flex" : "hidden",
          'xs:flex'
        )}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={cn(
                  "block py-2 px-3 xs:p-0",
                  selected === index
                    ?"font-medium text-text bg-bg-3 xs:bg-transparent xs:text-text xs:dark:text-text"
                    :"hover:bg-bg-2 text-text-2 xs:hover:bg-transparent xs:border-0 xs:hover:text-text xs:dark:hover:bg-transparent"
                )}
                onClick={() => setSelected(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <ThemeChange />
          <button
            onClick={toggleNavbar}
            type="button"
            className="flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-text rounded-lg xs:hidden hover:bg-bg-3 border-bg-3 border-2"
          >
            <IoMenu className="w-6 h-6 font-bold" />
          </button>
        </div>
      </nav>
    </header>
    // <nav className="bg-bg">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a
    //       href="https://flowbite.com/"
    //       className="flex items-center space-x-3 rtl:space-x-reverse"
    //     >
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         G R
    //       </span>
    //     </a>
    //     <button
    //       onClick={toggleNavbar}
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <IoMenu className="w-6 h-6 font-bold" />
    //     </button>
    //     <div
    //       className={`${
    //         visible ? "block" : "hidden"
    //       } w-full md:block md:w-auto`}
    //       id="navbar-default"
    //     >
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         {navItems.map((item, index) => (
    //           <li key={index}>
    //             <a
    //               href="#"
    //               className={getClasses(index)}
    //               onClick={() => setSelected(index)}
    //             >
    //               {item}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
