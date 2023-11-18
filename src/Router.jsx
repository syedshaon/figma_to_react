import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "team",
    element: <Team />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "testimonials",
    element: <Testimonials />,
  },
  { path: "products/:productId", element: <Home /> },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
