import logo from "../../assets/logo"
import {
  FaBrain,
  FaLanguage,
  FaChartLine,
  FaEye,
  FaDatabase,
  FaCogs,
  FaFlask,
} from "react-icons/fa"
import { IconInfo, imageIcon, ImageInfo } from "./typesAndFunctions"

const programingLanguages: ImageInfo[] = [
  imageIcon(logo.js, "JavaScript"),
  imageIcon(logo.ts, "TypeScript"),
  imageIcon(logo.php, "PHP"),
  imageIcon(logo.python, "Python"),
  imageIcon(logo.matlab, "Matlab"),
  imageIcon(logo.dart, "Dart"),
  imageIcon(logo.c, "C"),
  imageIcon(logo.cpp, "C++"),
  imageIcon(logo.cSharp, "C#"),
  imageIcon(logo.java, "Java"),
]

const frameworksAndLibraries: ImageInfo[] = [
  imageIcon(logo.bootstrap, "Bootstrap"),
  imageIcon(logo.tailwind, "Tailwind"),
  imageIcon(logo.w3schools, "W3 CSS"),
  imageIcon(logo.jquery, "JQuery"),
  imageIcon(logo.react, "React"),
  imageIcon(logo.symfony, "Symfony"),
  imageIcon(logo.laravel, "Laravel"),
  imageIcon(logo.django, "Django"),
  imageIcon(logo.flutter, "Flutter"),
  imageIcon(logo.tensorflow, "Tensorflow"),
  imageIcon(logo.pytorch, "PyTorch"),
  imageIcon(logo.keras, "Keras"),
  imageIcon(logo.openCV, "OpenCV"),
]

const databases: ImageInfo[] = [
  imageIcon(logo.mysql, "MySQL"),
  imageIcon(logo.postgreSql, "PostgreSQL"),
  imageIcon(logo.sqlite, "SQLite"),
  imageIcon(logo.mongodb, "MongoDB"),
  imageIcon(logo.firebaseFirestore, "Firebase Firestore"),
  imageIcon(logo.msAccess, "Microsoft Access"),
]

const softwares: ImageInfo[] = [
  imageIcon(logo.photoshop, "Adobe Photoshop"),
  imageIcon(logo.illustrator, "Adobe Illustrator"),
  imageIcon(logo.msWord, "Microsoft Word"),
  imageIcon(logo.msExcel, "Microsoft Excel"),
  imageIcon(logo.msPPT, "Microsoft PowerPoint"),
  imageIcon(logo.blender, "Blender"),
  imageIcon(logo.git, "Git"),
]

const aiConcepts: IconInfo[] = [
  {
    icon: FaBrain,
    title: "Deep Learning",
    description: "Neural networks for pattern recognition and decision making.",
  },
  {
    icon: FaLanguage,
    title: "NLP",
    description: "Processing and understanding human language.",
  },
  {
    icon: FaChartLine,
    title: "ML Algorithms",
    description: "Supervised and unsupervised learning models.",
  },
  {
    icon: FaEye,
    title: "Computer Vision",
    description: "Image processing and object detection.",
  },
  {
    icon: FaDatabase,
    title: "Data Processing",
    description: "Cleaning and transforming raw data.",
  },
  {
    icon: FaCogs,
    title: "Model Tuning",
    description: "Optimizing AI models for performance.",
  },
  {
    icon: FaFlask,
    title: "AI Research",
    description: "Exploring and developing new AI methodologies.",
  },
]

export {
  programingLanguages,
  frameworksAndLibraries,
  databases,
  softwares,
  aiConcepts,
}
