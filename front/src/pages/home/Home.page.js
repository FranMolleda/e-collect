//Metemos el hook UseContext
import React from "react";
import { Link } from "react-router-dom";
import "../../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonParticipa,
  ButtonOrganiza,
} from "../../components/ui/buttons/ButtonsHome";
import { Container } from "react-bootstrap";
import { useUser } from "../../lib/auth/auth.api";
import { ImageHome, TextHome } from "./StyleHome";
import CountUp from "react-countup";

const Home = () => {
  const user = useUser();
  return (
    <>
      <div>
        <ImageHome />
        <Container fluid>
          {" "}
          <TextHome>
            <h1>e-collect</h1>
            <h3>Únidos por un planeta sin basura</h3>
          </TextHome>
          {/* <ButtonParticipa as="div" variant="outline-secondary">
            <Link to="meet">Participa</Link>
          </ButtonParticipa>
          <ButtonOrganiza as="div" variant="outline-secondary">
            <Link to="organize">Organiza</Link>
          </ButtonOrganiza> */}
        </Container>
      </div>
      <CountUp start={0} end={150} delay={0} duration={10}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Home;
