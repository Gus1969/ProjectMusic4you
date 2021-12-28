import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavFile.css";

const NavFile = () => {
  


  return (
    <>
      

      <Navbar collapseOnSelect expand="lg" className="Navigation">
        <Container>
          <Navbar.Brand className="content" as={Link} to={"/"}>
            {" "}
            Music<span>4</span>You
          </Navbar.Brand>{" "}
          <i class="fal fa-cloud-music"></i>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" m-auto links">
              <Nav.Link className="enlace" as={Link} to={"../pages/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"../pages/Songs"}>
                {" "}
                Songs
              </Nav.Link>
            </Nav>
            <Nav className="farrightlinks">
              <Nav.Link as={Link} to={"../pages/Login"} >
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"../pages/Register"}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavFile;
