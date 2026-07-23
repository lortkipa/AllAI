import { createBrowserRouter, redirect } from "react-router";
import New from "../pages/New/New";
import Error from "../pages/Error/Error";

export let router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/new"),
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
