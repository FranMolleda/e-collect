import styled from "styled-components";

const FooterContainer = styled.div`
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .footer-bs {
    width: 100vw;
    background: linear-gradient(to right, #b1e2eb 0%, #1a5059 100%);
    padding: 10px 30px;
    color: #737980;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    .arbol-azul {
      height: 37px;
      float: right;
      margin-right: 20px;
      margin-top: -42px;
    }
  }

  .size-footer {
    height: 80px;
  }

  .row {
    justify-content: space-between;
  }

  .footer-bs .footer-brand,
  .footer-bs .footer-nav,
  .footer-bs .footer-social,
  .footer-bs .footer-ns {
    padding: 10px 25px;
  }

  .footer-bs .footer-nav,
  .footer-bs .footer-social,
  .footer-bs .footer-ns {
    border-color: transparent;
  }

  .footer-bs .footer-brand h2 {
    margin: 0px 0px 10px;
  }

  .footer-bs .footer-brand p {
    font-size: 12px;
    color: #737980;
  }

  .footer-bs .footer-nav ul.pages {
    list-style: none;
    padding: 0px;
  }

  .footer-bs .footer-nav ul.pages li {
    padding: 5px 0px;
  }

  .footer-bs .footer-nav ul.pages a {
    color: #737980;
    font-weight: bold;
    text-transform: uppercase;
  }

  .footer-bs .footer-nav ul.pages a:hover {
    color: #737980;
    text-decoration: none;
  }

  .footer-bs .footer-nav h4 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  .footer-bs .footer-nav ul.list {
    list-style: none;
    padding: 0px;
  }

  .footer-bs .footer-nav ul.list li {
    padding: 5px 0px;
  }

  .footer-bs .footer-nav ul.list a {
    color: #737980;
  }

  .footer-bs .footer-nav ul.list a:hover {
    color: #737980;
    text-decoration: none;
  }

  .footer-bs .footer-social ul {
    list-style: none;
    padding: 0px;
  }

  .footer-bs .footer-social h4 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .footer-bs .footer-social li {
    padding: 5px 4px;
  }

  .footer-bs .footer-social a {
    color: #737980;
  }

  .footer-bs .footer-social a:hover {
    color: #737980;
    text-decoration: none;
  }

  .footer-bs .footer-ns h4 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  .footer-bs .footer-ns p {
    font-size: 12px;
    color: #737980;
  }

  @media (min-width: 768px) {
    .footer-bs .footer-nav,
    .footer-bs .footer-social,
    .footer-bs .footer-ns {
      border-left: solid 1px rgba(255, 255, 255, 0.1);
    }
  }
`;

export default FooterContainer;
