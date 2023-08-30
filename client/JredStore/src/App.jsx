import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";

import React from "react";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products></Products>,
        },
        {
          path: "/product/:id",
          element: <Product></Product>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
