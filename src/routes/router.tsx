import App from "@/App";
import Search from "@/components/shared/hotelpage/Search";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>404</h1>,
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
