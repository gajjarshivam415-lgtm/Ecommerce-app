import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import SingIn from "./pages/singIn";
import LogIn from "./pages/login";
import Product from "./pages/product";
import ProductList from "./admin/productList";
import AddProduct from "./admin/addProduct";
import UpdateProduct from "./admin/updateProduct";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/singIn", element: <SingIn /> },
  { path: "/login", element: <LogIn /> },
  { path: "/product/:id", element: <Product /> },

  { path: "/admin/productList", element: <ProductList /> },
  { path: "/admin/updateProduct/:id", element: <UpdateProduct /> },
  { path: "/admin/addProduct", element: <AddProduct /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
