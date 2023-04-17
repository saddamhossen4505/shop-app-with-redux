import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart/Cart";
import WishList from "../pages/WishList/WishList";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Brands from "../components/Brands/Brands";
import Tags from "../components/Tags/Tags";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

// Create PublicRoute.
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "brand",
            element: <Brands />,
          },
          {
            path: "tag",
            element: <Tags />,
          },
          {
            path: "category",
            element: <Categories />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// Export.
export default publicRoute;
