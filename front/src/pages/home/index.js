//Metemos el hook UseContext
import React from "react";
import { Link } from "react-router-dom";
import "../../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LataImg from "../../../public/styles/Images/lata";
import {
  ButtonParticipa,
  ButtonOrganiza,
} from "../../components/ui/buttons/ButtonsHome";
import { Container } from "react-bootstrap";
//Importamos UserContext
import { useUser } from "../../lib/auth.api";

const Home = () => {
  const user = useUser();
  return (
    <>
      {/* Al no existir inicialmente el usuario, le decimos que lo pinte cuando exista */}
      {user && (
        <div>
          <p>{user.username}</p>
        </div>
      )}
      <div>
        <Container fluid>
          <LataImg>
            <ButtonParticipa as="div" variant="outline-secondary">
              <Link to="joinin">Participa</Link>
            </ButtonParticipa>
            <ButtonOrganiza as="div" variant="outline-secondary">
              <Link to="organize">Organiza</Link>
            </ButtonOrganiza>
          </LataImg>
        </Container>
      </div>
    </>
  );
};

export default Home;
