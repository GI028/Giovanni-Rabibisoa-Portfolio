import logo from "../../../assets/logo"
import Card from "../../../components/Card"

export default function WebDevelopment() {
  return (
    <div>
      <h1>Web Development</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img src={logo.htmlCss} />}>
          <div>HTML CSS</div>
        </Card>
        <Card head={<img src={logo.bootstrap} />}>
          <div>Bootstrap</div>
        </Card>
        <Card head={<img src={logo.tailwind} />}>
          <div>Tailwind</div>
        </Card>
        <Card head={<img src={logo.w3schools} />}>
          <div>W3 CSS</div>
        </Card>
        <Card head={<img src={logo.js} />}>
          <div>JavaScript ES6</div>
        </Card>
        <Card head={<img src={logo.ts} />}>
          <div>TypeScript</div>
        </Card>
        <Card head={<img src={logo.jquery} />}>
          <div>JQuery</div>
        </Card>
        <Card head={<img src={logo.react} className="w-full"/>}>
          <div>React</div>
        </Card>
      </div>
    </div>
  )
}
