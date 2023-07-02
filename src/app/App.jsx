import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home"
import About from "../pages/about"

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {

  return (

    <>

      <nav>
        <Link to="/vite-react-router/">Home</Link>
        {" | "}
        <Link to="/vite-react-router/contact">Contact</Link>
      </nav>

      <RouterProvider router={router} />
    </>

  )

}

export default App;