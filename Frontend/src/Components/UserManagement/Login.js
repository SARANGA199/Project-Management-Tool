import React, {useState,useContext} from 'react';
import './Styles/login.css';
import axios from 'axios';

function Login() {
    const [user,setUser] = useState({email: '', password : ''});

    const onChange = e =>{
      const {name, value} = e.target;
        setUser({...user,[name] : value});
    }

    const loginSubmit = async e =>{
      e.preventDefault()
      try{
        await axios.post('http://localhost:8000/user/login', {...user})

        localStorage.setItem('firstLogin', true)
        swal("Done!", "You successfully logged in!", "success");
        window.location.href = "/"
      } catch (err){
        swal("ERROR!", err.response.data.msg, "error");
      }
    }



    return(
<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 logimage"></div>
    <div class="col-md-8 col-lg-5">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Welcome back!</h3>

              <form onSubmit={loginSubmit}>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" name="email" required onChange={onChange} placeholder="Email"></input>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" name="password" required onChange={onChange} placeholder="Password"></input>
                  <label for="floatingPassword">Password</label>
                </div>

                <div>
                    <a class="small" style={{color:"black"}} href={"/forgotpw"}>Forgot password?</a>
                  </div>
                <br/>
                <div class="d-grid">
                  <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                  <a class="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" href={"/register"} style={{height:'50px'}}>
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
    )
}

export default Login;