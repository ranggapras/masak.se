import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import { useCookies } from "react-cookie";
import { useLazyQuery } from "@apollo/client";
import Button from "../../Elements/Button/Button";
import IlluAuth from "../../Elements/IlluAuth/IlluAuth";
import { login } from "../../Models/User";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["isLogin", "idUser"]);

  const refUsername = useRef();
  const refPassword = useRef();

  const [userLogin, { data }] = useLazyQuery(login);

  useEffect(() => {
    if (cookies.isLogin) {
      navigate("/");
    }
  }, [cookies, navigate]);

  useEffect(() => {
    if (data?.user.length > 0) {
      setCookie("isLogin", true, { path: "/" });
      setCookie("idUser", data.user[0].id, { path: "/" });
    }
  }, [data, setCookie]);

  const submit = () => {
    userLogin({
      variables: {
        username: refUsername.current.value,
        password: refPassword.current.value,
      },
    });
  };

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
            <h1 className="mb-5">Login</h1>
            <div className="d-flex flex-column mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  ref={refUsername}
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
                  ref={refPassword}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/register">Register</Link>
              <Button
                onClick={() => submit()}
                style={{ alignSelf: "flex-end" }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <IlluAuth />
      </div>
    </div>
  );
};

export default Login;
