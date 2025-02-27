import logo from "../../../assets/logo";
import Card from "../../../components/Card";

export default function Python() {
  return (
    <div>
      <h1>Python</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Card head={<img src={logo.php} />}>
          <div>PyTorch</div>
        </Card>
      <Card head={<img src={logo.symfony} />}>
          <div>TensorFlow</div>
        </Card>
      <Card head={<img src={logo.symfony} />}>
          <div>Keras</div>
        </Card>
      </div>
    </div>
  )
}
