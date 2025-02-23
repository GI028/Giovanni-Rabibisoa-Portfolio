import logo from "../../assets/logo"
import Card from "../../components/Card"
import SquareImage from "../../components/HTML/SquareImage"

export default function Languages() {
  return (
    <div>
      <h1>Languages</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<SquareImage src={logo.madagascarFlag} />}>
          <div>Malagasy</div>
        </Card>
        <Card head={<SquareImage src={logo.frenchFlag} />}>
          <div>French</div>
        </Card>
        <Card head={<SquareImage src={logo.englishFlag} />}>
          <div>English</div>
        </Card>
        <Card head={<SquareImage src={logo.indonesianFlag} />}>
          <div>Indonesian</div>
        </Card>
        <Card head={<SquareImage src={logo.malaisianFlag} />}>
          <div>Malay</div>
        </Card>
      </div>
    </div>
  )
}
