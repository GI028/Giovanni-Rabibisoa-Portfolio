import logo from "../../../assets/logo"
import Tooltip from "../../../components/HTML/Tooltip"

export default function ProgramingLanguages() {
  return (
    <div>
      <h1>Programing Languages</h1>
      <div className="flex items-center w-full flex-wrap gap-5">
        <Tooltip tip={"JavaScript"}>
          <img className="aspect-square w-10 rounded" src={logo.js} />
        </Tooltip>
        <Tooltip tip={"TypeScript"}>
          <img className="aspect-square w-10 rounded" src={logo.ts} />
        </Tooltip>
        <Tooltip tip={"PHP"}>
          <img className="aspect-square w-10 rounded" src={logo.php} />
        </Tooltip>
        <Tooltip tip={"Python"}>
          <img className="aspect-square w-10 rounded" src={logo.python} />
        </Tooltip>
        <Tooltip tip={"Matlab"}>
          <img className="aspect-square w-10 rounded" src={logo.matlab} />
        </Tooltip>
        <Tooltip tip={"Dart"}>
          <img className="aspect-square w-10 rounded" src={logo.dart} />
        </Tooltip>

        <Tooltip tip={"C"}>
          <img className="aspect-square w-10 rounded" src={logo.c} />
        </Tooltip>
        <Tooltip tip={"C++"}>
          <img className="aspect-square w-10 rounded" src={logo.cpp} />
        </Tooltip>
        <Tooltip tip={"C#"}>
          <img className="aspect-square w-10 rounded" src={logo.cSharp} />
        </Tooltip>
        <Tooltip tip={"JavaScript"}>
          <img className="aspect-square w-10 rounded" src={logo.java} />
        </Tooltip>
      </div>
    </div>
  )
}
