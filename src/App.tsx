import { Header } from "./common/components/Header"
import { About } from "./features/about/About"
import { Home } from "./features/home/Home"
import { Info } from "./features/info/Info"
import { Projects } from "./features/projects/Projects"


export default function App(){

  return (
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Projects />
      <Info />
    </div>
  )
}

