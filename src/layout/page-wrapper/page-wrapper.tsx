import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

import Cart from "./../../components/cart/cart";
import Topbar from "./components/topbar";

const PageWrapper: React.FC = () => {
  return (
    <>
      <Cart />
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;
