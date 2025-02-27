import logo from "../../../assets/logo"
import ImageIconList from "../../../components/List/ImageIconList"

export default function Databases() {
  const data = [
    {
      image: logo.mysql,
      title: "MySQL",
    },
    {
      image: logo.postgreSql,
      title: "Postegre SQL",
    },
    {
      image: logo.sqlite,
      title: "SQLite",
    },
    {
      image: logo.mongodb,
      title: "Mongo Db",
    },
    {
      image: logo.firebaseFirestore,
      title: "Firebase Firestore",
    },
  ]
  return (
    <div>
      <h1>SGBDR</h1>
      <ImageIconList list={data} />
    </div>
  )
}
