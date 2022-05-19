import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import Button from "../../Elements/Button/Button";
import IlluAuth from "../../Elements/IlluAuth/IlluAuth";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 flex-column d-flex justify-content-center align-items-center">
          <img
            style={{ height: "7.5rem", margin: " 0 0 5rem" }}
            src={Logo}
            alt="..."
          />
          <div className="d-flex flex-column" style={{ width: "30rem" }}>
            <h1 className="mb-5">Register</h1>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                Nama
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                No Handphone
              </label>
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="username"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                Password
              </label>
              <div class="input-group">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/login">Login</Link>
              <Button style={{ alignSelf: "flex-end" }}>Daftar</Button>
            </div>
          </div>
        </div>
        <IlluAuth />
      </div>
    </div>
  );
};

export default Register;
