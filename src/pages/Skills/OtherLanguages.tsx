import logo from "../../assets/logo"
import Card from "../../components/Card"

export default function OtherLanguages() {
  return (
    <div>
      <h1>Other languages</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img src={logo.c} />}>
          <div>C</div>
        </Card>
        <Card head={<img src={logo.cpp} />}>
          <div>C++</div>
        </Card>
        <Card head={<img src={logo.cSharp} />}>
          <div>C#</div>
        </Card>
        <Card head={<img src={logo.java} />}>
          <div>Java</div>
        </Card>
      </div>
    </div>
  )
}
