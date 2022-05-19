import { useMutation } from "@apollo/client";
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import Button from "../../Elements/Button/Button";
import IlluAuth from "../../Elements/IlluAuth/IlluAuth";
import { register } from "../../Models/User";

const Register = () => {
  const navigate = useNavigate();
  const refUsername = useRef();
  const refPassword = useRef();
  const refHandphone = useRef();
  const refName = useRef();

  const [registerUser, { data }] = useMutation(register);

  useEffect(() => {
    if (data?.insert_user_one) {
      navigate("/login");
    }
  }, [data, navigate]);

  const submitRegister = () => {
    registerUser({
      variables: {
        object: {
          username: refUsername?.current.value,
          password: refPassword?.current.value,
          phoneNumber: refHandphone?.current.value,
          name: refName?.current.value,
        },
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
            <h1 className="mb-5">Register</h1>
            <div className="d-flex flex-column mb-3">
              <label for="name" class="form-label">
                Nama
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  ref={refName}
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
                  ref={refUsername}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-3">
              <label for="hanphone" class="form-label">
                No Handphone
              </label>
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="hanphone"
                  ref={refHandphone}
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
              <Link to="/login">Login</Link>
              <Button
                onClick={() => submitRegister()}
                style={{ alignSelf: "flex-end" }}
              >
                Daftar
              </Button>
            </div>
          </div>
        </div>
        <IlluAuth />
      </div>
    </div>
  );
};

export default Register;
