import React, { useState, useRef, useEffect } from "react";
import "./Styles/register.css";
import Select from "react-select";
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    regNumber: "",
    role: "",
    specialization: "",
    password: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post('http://localhost:8000/user/register',{...user})
      console.log('x')
      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 regimage"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="card-body p-md-5 text-black">
              <form onSubmit={registerSubmit}>
                <h3 className="login-heading mb-6">Let's Get Started</h3>
                <br />

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1m">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1n">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" for="form3Example1m1">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        name="regNumber"
                        className="form-control form-control-lg"
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div>
                      <label className="form-label" for="form3Example1m1">
                        Role
                      </label>
                      <select name="role" class="form-select" aria-label="Default select example" onChange={onChange}>
                        <option selected>Select your role</option>
                        <option value="Student">Student</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Co_Supervisor">Co-Supervisor</option>
                        <option value="Panel_Member">Panel Member</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1m">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password1"
                        id="pwd1"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1n">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="pwd2"
                        className="form-control form-control-lg"
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                <div className="col-md-6 mb-4">
                    <div>
                      <label className="form-label" for="form3Example1m1">
                        Specialization
                      </label>
                      <select name="specialization" class="form-select" aria-label="Default select example" onChange={onChange}>
                        <option selected>Select your degree specialization</option>
                        <option value="SE">Softwate Engineering</option>
                        <option value="CS">Cyber Security</option>
                        <option value="N">Networking</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div>
                      <label className="form-label" for="form3Example1m1">
                        Interested Research Area
                      </label>
                      <select class="form-select" aria-label="Default select example" onChange={onChange}>
                        <option selected>Select your reasearch area</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="submit" className="btn btn-success btn-lg ms-2">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
