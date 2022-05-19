import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavbarData } from "./NavbarData";
import { Cookies } from "react-cookie";
import { IconContext } from "react-icons";
import Logo from "../../Assets/logo.svg";
import SearchIcon from "../../Assets/search.svg";

import "./style.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const refSearch = useRef();
  const cookie = new Cookies();
  const navigate = useNavigate();

  const search = () => {
    console.log(refSearch.current.value);
  };

  const logout = () => {
    cookie.remove("isLogin");
    cookie.remove("idUser");
    navigate("/login");
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="d-flex align-items-center">
      <IconContext.Provider value={{ color: "#9D763C" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li>
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((d, i) => {
              return (
                <li key={i} className={d.cName}>
                  <Link to={d.path}>{d.icon}</Link>
                </li>
              );
            })}
            <li className="nav-text" onClick={() => logout()}>
              <BiLogOut size={55} />
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      <div>
        <img
          src={Logo}
          style={{ marginLeft: "5rem", height: "4rem" }}
          alt="logo"
        />
      </div>
      <div
        style={{
          border: ".2rem solid #FFAD61",
          borderRadius: "2rem",
          padding: "0 1rem",
        }}
      >
        <input
          style={{
            width: "30rem",
            border: "none",
          }}
          ref={refSearch}
        ></input>
        <img
          onClick={() => search()}
          alt="..."
          src={SearchIcon}
          style={{ width: "1.5rem", margin: ".5rem 0", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
