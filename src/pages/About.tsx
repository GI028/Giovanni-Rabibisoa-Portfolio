import Home from "./About/Home"
import Hobbies from "./About/Hobbies"
import Container from "../components/HTML/Container"

export default function About() {
  return (
    <>
    <Container>
      <Home />
    </Container>
    <div className="px-4 md:px-20">
      <Hobbies />
    </div>
    </>
  )
}
