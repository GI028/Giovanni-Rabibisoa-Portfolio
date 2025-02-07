import NavBar from "./components/Navigation/NavBar"
import Educations from "./pages/Educations"
import Home from "./pages/Home"

function App() {
  const containerClass="px-4 md:px-20 lg:px-40"
  return (
    <>
      <NavBar className={containerClass}/>
      <main className={containerClass+' mt-10'}>
        <Home />
        <Educations />
      </main>
    </>
  )
}

export default App
