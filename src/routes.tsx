import { createBrowserRouter } from "react-router-dom";
import AddBook from "./components/books/AddBook";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";
import EditBook from "./components/books/EditBook";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> },
      {
        path: "admin",
        children: [
          { index: true, element: <Admin /> },
          { path: "add", element: <AddBook /> },
          { path: ":title", element: <EditBook  /> },
        ],
      },
    ],
  },
]);

export default router;
