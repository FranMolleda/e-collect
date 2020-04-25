import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import logo from "../../../../public/images/logo500Verde.png";
import NavbarContainer from "./styleNavbar";
import { Link } from "react-router-dom";
import { useUser, useUserLogout } from "../../../lib/auth/auth.api";

const LayoutNavbar = () => {
  const user = useUser();
  const handleLogout = useUserLogout();

  return (
    <>
      <NavbarContainer>
        <Navbar
          className="container-navbar pad-nav"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand as="div">
            <Link to="/">
              <img
                src={logo}
                alt="Logo Image"
                style={{ width: "100px", height: "23px" }}
              />
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto mr-nav-left">
              <Nav.Link as="div" className="nav-font-size">
                <Link to="/about">Conócenos</Link>
              </Nav.Link>
              <NavDropdown
                className="mr-nav-left nav-font-size"
                title="Únete"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as="div">
                  <Link to="/meet" className="nav-font-size">
                    Participa
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/organize" className="nav-font-size">
                    Organiza
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/colaborate" className="nav-font-size">
                    Colabora
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as="div"></Nav.Link>
              {!user && (
                <NavDropdown
                  title="Inscríbete"
                  id="collasible-nav-dropdown"
                  className="nav-font-size"
                >
                  <NavDropdown.Item as="div" className="nav-font-size">
                    <Link to="/auth/signup" className="nav-font-size">
                      Signup
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link to="/auth/login" className="nav-font-size">
                      Login
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {user && (
                <NavDropdown
                  title={user.username}
                  id="collasible-nav-dropdown"
                  className="nav-font-size"
                >
                  <NavDropdown.Item as="div">
                    <Link to="/auth/profile" className="nav-font-size">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div" className="nav-font-size">
                    <Link
                      className="nav-font-size"
                      to="/"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <Link to="/contact" className="nav-font-size nav-font-size">
            Contacta
          </Link>
        </Navbar>
      </NavbarContainer>
    </>
  );
};

export default LayoutNavbar;
