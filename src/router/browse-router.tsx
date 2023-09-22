import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../pages/default-page";
import Home from "../pages/home";
import Checkout from "../pages/checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "checkout", 
        element: <Checkout />,
      },
    ],
  },
]);