import { Project } from "./typesAndFunctions"

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description: "A personal website showcasing my skills and projects.",
    image: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg",
    url: "/",
    technologies: ["react", "ts", "tailwind"]
  },
  {
    title: "React Calculator",
    description: "A simple calculator built with React.",
    image: "https://www.figma.com/community/resource/fb1a4efc-5870-4685-bfaa-3fc6a3f7c3b8/thumbnail",
    url: "https://react-calculator-giovanni-rossi.vercel.app/",
    technologies: ["react", "ts", "html", "css"]
  },
  {
    title: "Task Management System",
    description: "A collaborative task management tool for teams with real-time updates.",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/lqv7fip1-1-hero-photo-568x520?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1360&hei=765&qlt=100&fit=constrain",
    url: "https://github.com/yourusername/task-manager",
    technologies: ["react", "ts", "css", "firebaseFirestore"]
  },
]