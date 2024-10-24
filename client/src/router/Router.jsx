import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login, Signup } from "../components";
import Home from "../pages/Home";
import About from "../components/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
]);

export default router;