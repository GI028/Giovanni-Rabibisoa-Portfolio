import logo from "../../../assets/logo";
import Card from "../../../components/Card";

export default function Backend() {
  return (
    <div>
      <h1>Backend</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Card head={<img src={logo.php} />}>
          <div>PHP OOP</div>
        </Card>
      <Card head={<img src={logo.symfony} />}>
          <div>Symfony</div>
        </Card>
      <Card head={<img src={logo.laravel} />}>
          <div>Laravel</div>
        </Card>
      <Card head={<img src={logo.django} />}>
          <div>Django</div>
        </Card>
      <Card head={<img src={logo.nodeJs} />}>
          <div>Node.js</div>
        </Card>
      </div>
    </div>
  )
}
