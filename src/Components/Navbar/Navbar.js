import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
import Logo from "../../Assets/logo.svg";
import SearchIcon from "../../Assets/search.svg";

import "./style.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

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
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
            <li>
              {NavbarData.map((d, i) => {
                return (
                  <li key={i} className={d.cName}>
                    <Link to={d.path}>{d.icon}</Link>
                  </li>
                );
              })}
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
      <div style={{ border: ".2rem solid #FFAD61", borderRadius: "2rem" }}>
        <input
          style={{
            width: "30rem",
            border: "none",
          }}
        ></input>
        <img src={SearchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
