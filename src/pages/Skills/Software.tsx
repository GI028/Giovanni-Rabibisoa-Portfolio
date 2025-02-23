import logo from "../../assets/logo"
import Card from "../../components/Card"

export default function Software() {
  return (
    <div>
      <h1>Software</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<img src={logo.php} />}>
          <div>Pack Office</div>
        </Card>
        <Card head={<img src={logo.symfony} />}>
          <div>Adobe suite</div>
        </Card>
        <Card head={<img src={logo.laravel} />}>
          <div>Blender</div>
        </Card>
      </div>
    </div>
  )
}
