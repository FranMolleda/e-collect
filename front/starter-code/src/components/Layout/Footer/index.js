import React from "react";
import FooterContainer from "./styleFooter.js";
import logo from "../../../../public/images/logo500Verde.png";

const Footer = () => (
  <>
    <FooterContainer>
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft size-footer">
            <img
              src={logo}
              alt="Logo Image"
              style={{ width: "100px", height: "23px" }}
            />
            <p style={{ marginTop: "10px" }}>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor
            </p>
          </div>
          <div className="col-md-3 footer-nav animated fadeInUp size-footer">
            <h4>Menu </h4>
            <div className="col-md-6">
              <ul className="list">
                <li>
                  <a href="#">Conócenos</a>
                </li>
                <li>
                  <a href="#">Contacta</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 footer-nav animated fadeInUp size-footer">
            <h4>Únete</h4>
            <div className="col-md-6">
              <ul className="list">
                <li>
                  <a href="#">Participa</a>
                </li>
                <li>
                  <a href="#">Organiza</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 footer-social animated fadeInDown size-footer">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </FooterContainer>
  </>
);

export default Footer;
