import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import Authors from "../pages/Authors/Authors";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);