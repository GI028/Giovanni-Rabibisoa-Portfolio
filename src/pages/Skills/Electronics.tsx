import logo from "../../assets/logo"
import Card from "../../components/Card"

export default function Electronics() {
  return (
    <div>
      <h1>Electronics</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img src={logo.php} />}>
          <div>Arduino</div>
        </Card>
        <Card head={<img src={logo.symfony} />}>
          <div>System Conception</div>
        </Card>
        <Card head={<img src={logo.laravel} />}>
          <div>IoT</div>
        </Card>
      </div>
    </div>
  )
}
