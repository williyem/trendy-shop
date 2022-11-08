import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Topbar from "./components/topbar";

const PageWrapper: React.FC = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;
