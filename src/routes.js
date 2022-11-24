import Home from "./pages/Home";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Products from "./pages/Products";
import NotFound from "./pages/404.js";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
    exact: true,
  },
  {
    path: "/products",
    name: "Products",
    component: <Products />,
    exact: true,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: <ProductDetails />,
    exact: true,
  },
  {
    path: "/about",
    name: "About",
    component: <About />,
    exact: true,
  },
  {
    path: "*",
    name: "NotFound",
    component: <NotFound />,
  },
];
