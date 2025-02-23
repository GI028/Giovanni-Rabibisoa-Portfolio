import logo from "../../assets/logo"
import Card from "../../components/Card"

export default function ProgramingLanguages() {
  return (
    <div>
      <h1>Programing Languages</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img className="aspect-square" src={logo.js} />}>
          <div>JavaScript ES6</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.ts} />}>
          <div>TypeScript</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.php} />}>
          <div>PHP</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.python} />}>
          <div>Python</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.matlab} />}>
          <div>MatLab</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.dart} />}>
          <div>Dart</div>
        </Card>
        
        <Card head={<img className="aspect-square" src={logo.c} />}>
          <div>C</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.cpp} />}>
          <div>C++</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.cSharp} />}>
          <div>C#</div>
        </Card>
        <Card head={<img className="aspect-square" src={logo.java} />}>
          <div>Java</div>
        </Card>
      </div>
    </div>
  )
}
