import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layout/Homelayout";
import Home from "../feature/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
