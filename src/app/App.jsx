import Home from "../pages/home"
import About from "../pages/about"
import { Link } from "react-router-dom";

const App = () => {

  return (

    <>
      <Link to={<Home />}>Home</Link>

      <div>
        <h1>Hello World! </h1>
      </div>

      <Link to={<About />}>About</Link>
    </>

  )

}

export default App;