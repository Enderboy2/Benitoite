import SideBar from "@/components/SideBar";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
