import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";

import "./style.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
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
    </>
  );
};

export default Navbar;
