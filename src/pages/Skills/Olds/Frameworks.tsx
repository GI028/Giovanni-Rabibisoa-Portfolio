import logo from "../../../assets/logo"
import SquareImage from "../../../components/HTML/SquareImage"
import Tooltip from "../../../components/HTML/Tooltip"

export default function Frameworks() {
  return (
    <div>
      <h1>Frameworks and libraries</h1>
      <div className="flex items-center w-full flex-wrap gap-5">
        <Tooltip tip="Bootstrap">
          <SquareImage src={logo.bootstrap} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Tailwind">
          <SquareImage src={logo.tailwind} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="W3 CSS">
          <SquareImage src={logo.w3schools} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="JQuery">
          <SquareImage src={logo.jquery} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="React">
          <SquareImage src={logo.react} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Symfony">
          <SquareImage src={logo.symfony} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Laravel">
          <SquareImage src={logo.laravel} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Django">
          <SquareImage src={logo.django} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Flutter">
          <SquareImage src={logo.flutter} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Tensorflow">
          <SquareImage src={logo.tensorflow} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="PyTorch">
          <SquareImage src={logo.pytorch} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="Keras">
          <SquareImage src={logo.keras} className="w-10 rounded" />
        </Tooltip>
        <Tooltip tip="OpenCV">
          <SquareImage src={logo.openCV} className="w-10 rounded" />
        </Tooltip>
      </div>
    </div>
  )
}
