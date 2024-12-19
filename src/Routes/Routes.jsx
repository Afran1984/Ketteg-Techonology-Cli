import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import Contact from "../Pages/Home/Contact/Contact";
import Abouts from "../Pages/Home/Abouts/Abouts";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <Abouts></Abouts>
        }
      ]
    }]);