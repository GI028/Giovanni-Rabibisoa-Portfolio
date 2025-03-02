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
    description: "Native language with full fluency in speaking and writing.",
  },
  {
    image: logo.frenchFlag,
    title: "French",
    description:
      "Fluent in speaking, reading, and writing with professional proficiency.",
  },
  {
    image: logo.englishFlag,
    title: "English",
    description:
      "Strong command of English for professional and academic communication.",
  },
  {
    image: logo.indonesianFlag,
    title: "Indonesian",
    description:
      "Proficient in Indonesian for verbal and written communication.",
  },
  {
    image: logo.malaisianFlag,
    title: "Malay",
    description:
      "Conversational level with good understanding of spoken Malay.",
  },
]

// ✅ Professional Aptitudes (Using icons)
export const professionalAptitudes: IconInfo[] = [
  {
    icon: FaBrain,
    title: "Analytical Thinking",
    description:
      "Ability to analyze complex situations and provide effective solutions.",
  },
  {
    icon: FaSync,
    title: "Adaptability",
    description:
      "Quick to learn and adjust to new challenges and technologies.",
  },
  {
    icon: FaClock,
    title: "Time Management",
    description:
      "Highly organized, meeting deadlines and handling multiple projects efficiently.",
  },
  {
    icon: FaCheckCircle,
    title: "Strong Work Ethic",
    description: "Dedicated and committed to delivering high-quality results.",
  },
  {
    icon: FaTools,
    title: "Technical Expertise",
    description: "Strong grasp of technical concepts and execution.",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Management",
    description: "Organizes and leads projects successfully.",
  },
]

// ✅ Collaboration & Leadership
export const collaborationLeadership: IconInfo[] = [
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description: "Works effectively with diverse teams.",
  },
  {
    icon: FaMicrophone,
    title: "Public Speaking",
    description: "Confident in presenting and engaging audiences.",
  },
  {
    icon: FaComments,
    title: "Interpersonal Skills",
    description: "Excellent communicator and team player.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Problem Solving",
    description: "Finds solutions in complex scenarios.",
  },
]

// ✅ Problem Solving & Creativity
export const problemSolvingCreativity: IconInfo[] = [
  {
    icon: FaLightbulb,
    title: "Creativity",
    description: "Innovative and always looking for new ideas.",
  },
  {
    icon: FaBrain,
    title: "Critical Thinking",
    description: "Strong logical reasoning for effective solutions.",
  },
  {
    icon: FaClock,
    title: "Resilience",
    description: "Adapts well to change and challenges.",
  },
]
