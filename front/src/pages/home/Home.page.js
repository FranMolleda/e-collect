import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useUser } from "../../lib/auth/auth.api";
import { ImageHome, TextHome, TextHomeTwo } from "./StyleHome";
import CountUp from "react-countup";
import "materialize-css";
import "../../../public/styles/App.css";
import { Button, Icon } from "react-materialize";

const Home = () => {
  const user = useUser();
  return (
    <>
      <div>
        <ImageHome />

        {<ImageHome /> && (
          <Container fluid>
            <TextHome>
              <h1>e-collect</h1>
              <h4>
                e-collect es una plataforma digital que permite conectar a
                personas comprometidas con el medio ambiente en una labor de
                ayuda.{" "}
              </h4>
              <h2>Únete</h2>
            </TextHome>
            <p className="center-align">
              <Button
                className="button-no-green home-left"
                waves-effect="true"
                waves-teal="true"
                flat
                type="submit"
              >
                {" "}
                <Link to="meet" className="btn-home button-no-green noHover">
                  Participa
                  <Icon right>people</Icon>
                </Link>
              </Button>
            </p>{" "}
            <p className="center-align">
              <Button
                className="button-no-green home-right noHover"
                waves-effect="true"
                waves-teal="true"
                flat
                type="submit"
              >
                {" "}
                <Link
                  to="organize"
                  className="btn-home button-no-green noHover"
                >
                  Organiza
                  <Icon right>date_range</Icon>
                </Link>
              </Button>
            </p>{" "}
            <TextHomeTwo>
              <h3>
                Organiza y/o participa en acciones de recogida de residuos en
                entornos naturales.
              </h3>
            </TextHomeTwo>
            {/* <ButtonOrganiza as="div" variant="outline-secondary">
            <Link to="organize" className="btn">
              Organiza
            </Link>
          </ButtonOrganiza> */}
            {/* <CountUp
            start={0}
            end={150}
            delay={0}
            duration={10}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp> */}
          </Container>
        )}
        <img src="https://media.giphy.com/media/dYfbdQUuQjYDgdbvy3/giphy.gif" />
      </div>
    </>
  );
};

export default Home;
