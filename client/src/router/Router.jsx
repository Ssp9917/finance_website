import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login, Signup } from "../components";
import Home from "../pages/Home";
import About from "../components/About";
import Service from "../components/Service";
import User_details from "../components/User_details";
import AdminMain from "../layout/AdminMain";
import Dashboard from "../pages/admin/Dashboard";
import PrivateRoute from "../components/admin/PrivateRoute";
import AdminLogin from "../components/admin/AdminLogin";
import Profile from "../pages/Profile";
import SingleUserProfile from "../components/admin/SingleUserProfile";



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
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: "/apply-card",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/user-details",
        element: <User_details />
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  },
  {
    path: "/admin",
    element:
      <PrivateRoute>
        <AdminMain />
      </PrivateRoute>,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path:"profile/:id",
        element:<SingleUserProfile/>
      }
    ]
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  }
]);

export default router;