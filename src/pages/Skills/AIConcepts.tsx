import logo from "../../assets/logo";
import Card from "../../components/Card";

export default function AiConcepts() {
  return (
    <div>
      <h1>Ai Concepts</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Card head={<img src={logo.php} />}>
          <div>CNN</div>
        </Card>
      <Card head={<img src={logo.symfony} />}>
          <div>RNN</div>
        </Card>
      <Card head={<img src={logo.laravel} />}>
          <div>NLP</div>
        </Card>
      <Card head={<img src={logo.django} />}>
          <div>ML</div>
        </Card>
      </div>
    </div>
  )
}
