import logo from "../../assets/logo"
import {
  FaLightbulb,
  FaUsers,
  FaClock,
  FaBrain,
  FaComments,
  FaTools,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaMicrophone,
  FaSync,
  FaCheckCircle,
} from "react-icons/fa";
import { IconInfo, ImageInfo } from "./typesAndFunctions";
// import { ImageIcon } from "./typesAndFunctions"

export const languageSkills: ImageInfo[] = [
  {
    image: logo.madagascarFlag,
    title: "Malagasy",
  },
  {
    image: logo.frenchFlag,
    title: "French",
  },
  {
    image: logo.englishFlag,
    title: "English",
  },
  {
    image: logo.indonesianFlag,
    title: "Indonesian",
  },
  {
    image: logo.malaisianFlag,
    title: "Malaysian",
  },
]

// ✅ Professional Aptitudes (Using icons)
export const professionalAptitudes: IconInfo[] = [
  {
    icon: FaBrain,
    title: "Analytical Thinking",
  },
  {
    icon: FaSync,
    title: "Adaptability",
  },
  {
    icon: FaClock,
    title: "Time Management",
  },
  {
    icon: FaCheckCircle,
    title: "Strong Work Ethic",
  },
  {
    icon: FaTools,
    title: "Technical Expertise",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Management",
  },
]

// ✅ Collaboration & Leadership
export const collaborationLeadership: IconInfo[] = [
  {
    icon: FaUsers,
    title: "Team Collaboration",
  },
  {
    icon: FaMicrophone,
    title: "Public Speaking",
  },
  {
    icon: FaComments,
    title: "Interpersonal Skills",
  },
  {
    icon: FaPuzzlePiece,
    title: "Problem Solving",
  },
]

// ✅ Problem Solving & Creativity
export const problemSolvingCreativity: IconInfo[] = [
  {
    icon: FaLightbulb,
    title: "Creativity",
  },
  {
    icon: FaBrain,
    title: "Critical Thinking",
  },
  {
    icon: FaClock,
    title: "Resilience",
  },
]
