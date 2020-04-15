import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
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
          className="container-navbar"
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
              <Nav.Link as="div">
                <Link to="/about">Conócenos</Link>
              </Nav.Link>
              <NavDropdown
                className="mr-nav-left"
                title="Únete"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as="div">
                  <Link to="/joinin">Participa</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/organize">Organiza</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link to="/colaborate">Colabora</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as="div">
                <Link to="/contact">Contacta</Link>
              </Nav.Link>
              {!user && (
                <NavDropdown title="Inscríbete" id="collasible-nav-dropdown">
                  <NavDropdown.Item as="div">
                    <Link to="/auth/signup">Signup</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link to="/auth/login">Login</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {user && (
                <NavDropdown title={user.username} id="collasible-nav-dropdown">
                  <NavDropdown.Item as="div">
                    <Link to="/auth/profile">Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavbarContainer>
    </>
  );
};

export default LayoutNavbar;
