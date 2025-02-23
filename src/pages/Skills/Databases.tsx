import logo from "../../assets/logo"
import Card from "../../components/Card"
import SquareImage from "../../components/HTML/SquareImage"

export default function Databases() {
  return (
    <div>
      <h1>SGBDR</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card head={<SquareImage src={logo.mysql} />}>
          <div>MySQL</div>
        </Card>
        <Card head={<SquareImage src={logo.postgreSql} />}>
          <div>Postegre SQL</div>
        </Card>
        <Card head={<SquareImage src={logo.sqlite} />}>
          <div>SQLite</div>
        </Card>
        <Card head={<SquareImage src={logo.mongodb} />}>
          <div>Mongo Db</div>
        </Card>
        <Card head={<SquareImage src={logo.firebaseFirestore} />}>
          <div>Firebase Firestore</div>
        </Card>
      </div>
    </div>
  )
}
