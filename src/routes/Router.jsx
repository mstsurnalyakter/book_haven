import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import Authors from "../pages/Authors/Authors";
import AboutUs from "../pages/AboutUs/AboutUs";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishlistBooks from "../components/WishlistBooks/WishlistBooks";

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
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist-books",
            element:<WishlistBooks/>
          },
        ],
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
      {
        path: "/book-details/:bookId",
        element: <BookDetails />,
      },
    ],
  },
]);