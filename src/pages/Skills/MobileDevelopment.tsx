import logo from "../../assets/logo"
import Card from "../../components/Card"

export default function MobileDevelopment() {
  return (
    <div>
      <h1>Mobile Development</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img src={logo.flutter} />}>
          <div>Flutter</div>
        </Card>
      </div>
    </div>
  )
}
