import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./views/home/home";
import Shop from "./views/shop/shop";
import NotFoundView from "./views/errors/NotFoundView";
import MainLayout from "./layouts/MainLayout";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import Checkout from "./views/checkout/Checkout";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:'checkout',
        element: <Checkout/>

      },
      {
        path: "404",
        element: <NotFoundView />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];

export default routes;
