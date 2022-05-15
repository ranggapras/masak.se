import React from "react";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
