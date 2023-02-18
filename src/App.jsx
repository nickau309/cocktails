import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import About from "./pages/About";
import SingleCocktail, {
  loader as singleCocktailLoader,
} from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cocktail/:id",
          element: <SingleCocktail />,
          loader: singleCocktailLoader,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ],
  {
    basename: "/cocktails/",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
