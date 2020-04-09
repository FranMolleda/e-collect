import React, { useContext } from "react";
import "../../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LataImg from "../../../public/styles/Images/lata";
import {
  ButtonParticipa,
  ButtonOrganiza,
} from "../../components/ui/buttons/ButtonsHome";
import { Container } from "react-bootstrap";
import { UserContext } from "../../lib/auth.api";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>
        <h1>Welcome {user.username}</h1>
        <Container fluid>
          <LataImg>
            <ButtonParticipa variant="outline-secondary">
              Participa
            </ButtonParticipa>
            <ButtonOrganiza variant="outline-secondary">
              Organiza
            </ButtonOrganiza>
          </LataImg>
        </Container>
      </div>
    </>
  );
};

export default Home;
