import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../pages/default-page";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
    ],
  },
]);