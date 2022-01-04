import React, { useState } from "react";
import Footer from "../common/Footer";
import NavFile from "../common/NavFile";
import { Container } from "react-bootstrap";
import "./Login.css";
import {siteLogin} from '../conexion/auth'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
   
   

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.campo === "" || pass.campo === "") {
      return;
    }
    const login = {username: username, password: pass}
    siteLogin(login).then(res => {
      if(res.token) {
        localStorage.setItem('token', res.token)
        navigate('/pages/Songs')
      }
    });
  }
  
  
  return (
    <>
      <NavFile />
      <Container className="form-wrapper">
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
            <form className="Form" onSubmit={handleSubmit}>
              <h3 className="login-title">Login</h3>

              <div className="form-group p-3">
                <label className="label">Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username.campo}
                   onChange={(e) => setUserName(e.target.value)}
                />
                
              </div>

              <div className="form-group p-3">
                <label className="label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={pass.campo}
                   onChange={(e) => setPass(e.target.value)}
                  
                />
                
              </div>

              <button className="btn btn-primary login-btn">Login</button>
            </form>
          </div>
        </div>
      </Container>

      <Footer />
      
    </>
  );
};


export default Login;
