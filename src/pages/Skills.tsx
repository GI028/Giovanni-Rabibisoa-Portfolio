import Container from "../components/HTML/Container"
import AiConcepts from "./Skills/AIConcepts"
import Backend from "./Skills/Backend"
import Databases from "./Skills/Databases"
import Electronics from "./Skills/Electronics"
import Frameworks from "./Skills/Frameworks"
import Languages from "./Skills/Languages"
import MobileDevelopment from "./Skills/MobileDevelopment"
import OtherLanguages from "./Skills/OtherLanguages"
import OverView from "./Skills/OverView"
import ProgramingLanguages from "./Skills/ProgramingLanguages"
import Python from "./Skills/Python"
import Software from "./Skills/Software"
import WebDevelopment from "./Skills/WebDevelopment"

export default function Skills() {
  return (
    <>
      <OverView />
      <Container>
        <ProgramingLanguages />
        <Frameworks />
        <Databases />
        <Languages />
        <WebDevelopment />
        <Backend />
        <MobileDevelopment />
        <Databases />
        <OtherLanguages />
        <AiConcepts />
        <Python />
        <Electronics />
        <Software />
        <Languages />
      </Container>
    </>
  )
}
