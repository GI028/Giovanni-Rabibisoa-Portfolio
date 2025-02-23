import logo from "../../assets/logo"
import Card from "../../components/Card"
import SquareImage from "../../components/HTML/SquareImage"

export default function Frameworks() {
  return (
    <div>
      <h1>Frameworks and libraries</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<SquareImage src={logo.bootstrap} />}>
          <div>Bootstrap</div>
        </Card>
        <Card head={<SquareImage src={logo.tailwind} />}>
          <div>Tailwind</div>
        </Card>
        <Card head={<SquareImage src={logo.w3schools} />}>
          <div>W3 CSS</div>
        </Card>
        <Card head={<SquareImage src={logo.jquery} />}>
          <div>JQuery</div>
        </Card>
        <Card head={<SquareImage src={logo.react} className="w-full" />}>
          <div>React</div>
        </Card>
        <Card head={<SquareImage src={logo.symfony} />}>
          <div>Symfony</div>
        </Card>
        <Card head={<SquareImage src={logo.laravel} />}>
          <div>Laravel</div>
        </Card>
        <Card head={<SquareImage src={logo.django} />}>
          <div>Django</div>
        </Card>
        <Card head={<SquareImage src={logo.flutter} />}>
          <div>Flutter</div>
        </Card>
        <Card head={<SquareImage src={logo.tensorflow} />}>
          <div>Tensorflow</div>
        </Card>
        <Card head={<SquareImage src={logo.pytorch} />}>
          <div>PyTorch</div>
        </Card>
        <Card head={<SquareImage src={logo.keras} />}>
          <div>Keras</div>
        </Card>
        <Card head={<SquareImage src={logo.openCV} />}>
          <div>OpenCV</div>
        </Card>
      </div>
    </div>
  )
}
