import React from "react";
import Footer from "../common/Footer";
import NavFile from "../common/NavFile";
import { Container } from "react-bootstrap";
import "./Login.css";
import LoginValidation from "../validation/LoginValidation";
import SetLoginErrors from "../validation/SetLoginErrors";

const Login = () => {
  const { changer, values, Submit, errores } = LoginValidation(SetLoginErrors);

  return (
    <>
      <NavFile />
      <Container className="form-wrapper">
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
            <form className="Form" onSubmit={Submit}>
              <h3 className="login-title">Login</h3>

              <div className="form-group p-3">
                <label className="label">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={changer}
                />
                {errores.email && <p>{errores.email}</p>}
              </div>

              <div className="form-group p-3">
                <label className="label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={values.password}
                  onChange={changer}
                />
                {errores.password && <p>{errores.password}</p>}
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
