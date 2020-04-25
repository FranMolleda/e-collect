import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className="form-container">
        <div>
          <h3 style={{ textAlign: "center" }}>
            {" "}
            ¡Sé parte del cambio y únete a otras personas que también quieren
            formar parte de él!
          </h3>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                ¿Que somos?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h5>e-Collect</h5> es una plataforma digital que permite
                  conectar a personas comprometidas con el medio ambiente en una
                  labor de ayuda. <h5>Únete!!</h5>
                  ¿Cómo funciona? El objetivo consiste en organizar y/o
                  participar en acciones de recogida de residuos en entornos
                  naturales.
                  <h5>¡ACTÍVATE!</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Paso 1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Registrate en nuestra Web</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Paso 2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Organiza una reunion y/o participa en alguna ya creada.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Paso 3
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Consigue puntos con tu participación y canjealos en
                  establecimientos de Ecoturismo colaboradores.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                POR CONCIENCIA ECOLÓGICA{" "}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Los seres humanos hemos llevado al planeta hasta la
                  extenuación pero también podemos contribuir a su cuidado y
                  conservación. ¡Informa, educa y fomenta el respeto al medio
                  ambiente!.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                POR COMPROMISO SOCIAL
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Un voluntariado activo contribuye a la transformación social
                  no sólo desde la tarea realizada sino desde las actitudes
                  demostradas.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default About;
