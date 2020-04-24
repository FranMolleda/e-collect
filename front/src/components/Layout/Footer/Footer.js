import React from "react";
import FooterContainer from "./styleFooter";
import logo from "../../../../public/images/logo500Verde.png";
import arbol from "../../../../public/images/arbolfooterazul.png";
import { Container } from "react-bootstrap";

const Footer = () => (
  <>
    <FooterContainer>
      <footer className="footer-bs">
        <img className="arbol-azul" src={arbol} alt="Arbol azul Image" />
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft size-footer">
            <img
              src={logo}
              alt="Logo Image"
              style={{ width: "80px", height: "15px" }}
            />
          </div>
          <div className="col-md-3 footer-nav animated fadeInUp size-footer">
            <p className="text-footer align">
              {" "}
              &copy; 2020 Webdev Part time - Francisco Molleda
            </p>
          </div>
          <div className="col-md-3 align footer-nav">
            ✉️ fmjerez@ecollect.com  📞666 666 666
          </div>
        </div>
      </footer>
    </FooterContainer>
  </>
);

export default Footer;
