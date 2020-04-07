import React from "react";
import "../../../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LataImg from "../../styles/Images/lata";
import {
  ButtonParticipa,
  ButtonOrganiza,
} from "../../components/Complements/buttons/ButtonsHome";

const Home = () => {
  return (
    <>
      <div>
        <LataImg>
          <ButtonParticipa variant="outline-secondary">
            Participa
          </ButtonParticipa>
          <ButtonOrganiza variant="outline-secondary">Organiza</ButtonOrganiza>
        </LataImg>
      </div>
    </>
  );
};

export default Home;
