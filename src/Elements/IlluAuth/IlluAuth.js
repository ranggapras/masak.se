import React from "react";
import LogoWhite from "../../Assets/logo-white.svg";
import Illustration from "../../Assets/illu-login.png";

const IlluAuth = () => {
  return (
    <div
      className="col-6 position-relative"
      style={{ background: "#FFAD61", height: "100vh" }}
    >
      <img
        style={{ position: "absolute", left: "16.5vw", top: "7.75rem" }}
        src={LogoWhite}
        alt="..."
      />
      <img
        style={{ position: "absolute", bottom: 0, left: 0, width: "50vw" }}
        src={Illustration}
        alt="..."
      />
    </div>
  );
};

export default IlluAuth;
