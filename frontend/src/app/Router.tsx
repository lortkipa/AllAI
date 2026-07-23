import { createBrowserRouter, redirect } from "react-router";

export let router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/new"),
  },
  {
    path: "/new",
    element: <h1>New</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
