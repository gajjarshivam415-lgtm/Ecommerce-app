import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import SingIn from './pages/singIn'
import LogIn from "./pages/login";
import Product from "./pages/product";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/singIn", element: <SingIn /> },
  { path: "/login", element: <LogIn /> },
  { path: "/product/:id", element: <Product /> },
]);

export default function App() {
  return <RouterProvider router={router} />;

}