import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '@/components/forms/Login'
import Signup from "@/components/forms/Signup";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import NotFound from "@/pages/Error/NotFound";

import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Account from "@/pages/account/Account";
import CheckOut from "@/pages/checkout/CheckOut";

import Product from "@/components/ecommerce/product/Product";
import Categories from "@/pages/Categories";
import  Cart  from "@/pages/cart/Cart";
import  Wishlist  from "@/pages/wishlist/Wishlist";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "checkOut",
        element: <CheckOut />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      // {
      //   path: "categories/product/:prefix",
      //   element: <ProductDetails />,
      //   loader: ({ params }) => {
      //     if (
      //       typeof params.prefix !== "string" ||
      //       !/^[a-z]+$/i.test(params.prefix)
      //     ) {
      //       throw new Response("Bad Request", {
      //         statusText: "Not Found",
      //         status: 400,
      //       });
      //     }
      //     return true;
      //   },
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);



function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
