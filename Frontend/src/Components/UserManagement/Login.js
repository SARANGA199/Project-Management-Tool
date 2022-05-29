import React, { useState, useContext } from "react";
import "./Styles/login.css";
import axios from "axios";
// import Cookies from 'js-cookie';

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8070/user/login", {
        ...user,
      });

      localStorage.setItem("firstLogin", true);

      localStorage.setItem("User", JSON.stringify(data.result));
      localStorage.setItem("refreshtoken", data.accesstoken);
      // Cookies.set("refreshtoken",data.accesstoken,{expires:1})
      swal("Done!", "You successfully logged in!", "success");
      window.location.href = "/";
    } catch (err) {
      swal("ERROR!", err.response.data.msg, "error");
    }
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 logimage">
          <div className="topicName">
            SLIIT Research <br /> Project
            <br />
          </div>
        </div>
        <div className="col-md-8 col-lg-5">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="log-heading mb-4">Welcome back!</h3>

                  <form onSubmit={loginSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        onChange={onChange}
                        placeholder="Email"
                      ></input>
                      <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        required
                        onChange={onChange}
                        placeholder="Password"
                      ></input>
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div>
                      <a
                        className="small"
                        style={{ color: "black" }}
                        href={"/fpass"}
                      >
                        Forgot password?
                      </a>
                    </div>
                    <br />
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-warning btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <a
                        className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                        href={"/register"}
                        style={{ height: "50px" }}
                      >
                        Sign Up
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
