type Diploma = {
  date: number
  name: string
  cursus: string
}
type Institue = {
  name: string
  logo: string
  diploma: Diploma[]
}

const datas: Institue[] = [
  {
    name: "CNTEMAD",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6ULzSM7KZXHSCZRilW-vhpwZ5jceT6ZqZAD_bDCiRRTToupN_49rNDftsb52YgVkF4Y&usqp=CAU",
    diploma: [
      {
        date: 2023,
        name: "Master en Informatique",
        cursus: " base de données et génie logiciel ",
      },
      {
        date: 2020,
        name: "Licence en Informatique",
        cursus: " base de données et génie logiciel ",
      },
    ],
  },
  {
    name: "ESP d’Antsiranana",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnCz_ktgLqw2zGdtLom6yUH9x4uvdJtQ8aQ&s",
    diploma: [
      {
        date: 2021,
        name: "Licence en Sciences et technologies de l’information et de la communication ",
        cursus: "Electronique",
      },
    ],
  },
  {
    name: "Collège Sacrée Coeur Tsianaloka",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0s-__XhczE7SlqehFNrVhukAKT9rwGe6h7w&s",
    diploma: [
      {
        date: 2016,
        name: "Baccalauréat",
        cursus: "Serie D",
      },
    ],
  },
]

export default function Educations() {
  return (
    <section className="snap-start scroll-mt-16 mb-6 flex gap-2 space-y-4 justify-around">
      {datas.map((institue: Institue) => (
        <div key={institue.name} className="bg-bg-2 w-75 p-2 shadow-md shadow-gray-700/50 rounded space-y-2">
          <div className="w-full aspect-square overflow-hidden  rounded flex">
            <img src={institue.logo} className="object-cover w-full h-full" />
          </div>
          <h2>{institue.name}</h2>
          <ul>
            {institue.diploma.map((diploma: Diploma) => (
              <li key={diploma.name}>{diploma.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
