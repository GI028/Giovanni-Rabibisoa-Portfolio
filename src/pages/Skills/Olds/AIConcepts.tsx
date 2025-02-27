import {
  FaBrain,
  FaLanguage,
  FaChartLine,
  FaEye,
  FaDatabase,
  FaCogs,
  FaFlask,
} from "react-icons/fa"
import Tooltip from "../../../components/HTML/Tooltip";

// const skills = [
//   { icon: <FaBrain />, name: "Deep Learning (CNN, RNN)" },
//   { icon: <FaLanguage />, name: "Natural Language Processing (NLP)" },
//   { icon: <FaChartLine />, name: "Machine Learning Algorithms" },
//   { icon: <FaEye />, name: "Computer Vision" },
//   { icon: <FaDatabase />, name: "Data Preprocessing & Feature Engineering" },
//   { icon: <FaCogs />, name: "Model Optimization & Tuning" },
//   { icon: <FaFlask />, name: "AI Research & Development" },
// ]

// const skills = [
//   { icon: <FaBrain />, name: "Deep Learning" },
//   { icon: <FaLanguage />, name: "NLP" },
//   { icon: <FaChartLine />, name: "ML Algorithms" },
//   { icon: <FaEye />, name: "Computer Vision" },
//   { icon: <FaDatabase />, name: "Data Processing" },
//   { icon: <FaCogs />, name: "Model Tuning" },
//   { icon: <FaFlask />, name: "AI Research" },
// ];

const skills = [
  { icon: <FaBrain />, name: "Deep Learning", info: "Neural networks for pattern recognition and decision making." },
  { icon: <FaLanguage />, name: "NLP", info: "Processing and understanding human language." },
  { icon: <FaChartLine />, name: "ML Algorithms", info: "Supervised and unsupervised learning models." },
  { icon: <FaEye />, name: "Computer Vision", info: "Image processing and object detection." },
  { icon: <FaDatabase />, name: "Data Processing", info: "Cleaning and transforming raw data." },
  { icon: <FaCogs />, name: "Model Tuning", info: "Optimizing AI models for performance." },
  { icon: <FaFlask />, name: "AI Research", info: "Exploring and developing new AI methodologies." },
];

export default function AiConcepts() {
  return (
    <div>
      <h1>My Artificial Intelligence Skills</h1>
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
      </div> */}
      <div className="flex flex-wrap gap-2">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {skills.map((skill, index) => (
          <Tooltip tip={skill.info} >
          <div
            key={index}
            className="flex w-max cursor-default items-center bg-bg-3 text-text-2 py-1 px-2 rounded shadow-md transform transition-transform hover:-translate-y-1"
          >
            <span className="text-xl mr-3">{skill.icon}</span>
            <span className="">{skill.name}</span>
          </div>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
