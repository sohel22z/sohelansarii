import Home from "../pages/home"
import About from "../pages/about"
import { Link, Route } from "react-router-dom";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(Routes, { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' })

  return (

    <>
      <Link to={<Home />}>Home</Link>

      <div>
        <h1>Hello World! </h1>
      </div>

      <Link to={<About />}>About</Link>

      <BrowserRouter
        basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
      >
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <h1>Hello World</h1>
                <Link to='about'>About Us</Link>
              </div>
            }
          />
          <Route path='/about' element={<div>About</div>} />
        </Routes>
      </BrowserRouter>

      <RouterProvider router={router} />
    </>

  )

}

export default App;