import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useCookies } from "react-cookie";

const Layout = ({ children }) => {
  const [cookies] = useCookies(["isLogin"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.isLogin) {
      navigate("/login");
    }
  }, [cookies, navigate]);

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
