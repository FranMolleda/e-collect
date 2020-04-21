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
import { useUser } from "../../lib/auth/auth.api";

const Home = () => {
  const user = useUser();
  return (
    <>
      {/* Al no existir inicialmente el usuario, le decimos que lo pinte cuando exista */}
      {user && (
        <div>
          <p>{user.username}Holaaaaaaaa</p>
          <img src={user.profilePic?.path} width="200" />
        </div>
      )}
      <div>
        <h1>Holaaaaaaaa </h1>
        <Container fluid>
          <LataImg>
            <ButtonParticipa as="div" variant="outline-secondary">
              <Link to="meet">Participa</Link>
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
