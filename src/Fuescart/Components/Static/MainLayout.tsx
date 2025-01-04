import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Static/Navbar/Navbar";
import { Footer } from "../Static/Footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 100px)" }}> {/* Adjust for Footer height */}
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
