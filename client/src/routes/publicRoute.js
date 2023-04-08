import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart/Cart";
import WishList from "../pages/WishList/WishList";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// Export.
export default publicRoute;
