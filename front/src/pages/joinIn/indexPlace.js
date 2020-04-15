import React, { useState, useEffect } from "react";
import { getPlaces } from "../../lib/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./style";
import { useUser } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

const JoininPlace = (props) => {
  const [places, setPlace] = useState([]);
  const user = useUser();

  useEffect(() => {
    getPlaces(props).then((place) => setPlace(place));
  }, []);

  return (
    <CardContainer className="cards-container">
      <h1>Listado de Regogidas organizadas</h1>
      {places.map((place, i) => {
        return (
          <CardMeeting key={i}>
            <Container>
              <Card className="text-center">
                <Card.Header className="backround-title">
                  Organizado por: {user.username}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Zona de actuación: {place.zone} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Ciudad: {place.cityPlace}
                  </Card.Subtitle>
                  <Card.Text>Tipo:{place.type}</Card.Text>
                  <Button as="div" className="button-card">
                    <Link to="/meet">Punto de partida</Link>
                  </Button>
                  <Card.Text>Dificultad:{place.difficulty}</Card.Text>
                </Card.Body>
                <Card.Footer className="backround-bottom-card">
                  Fecha de creación:{" "}
                  {place.date
                    .toString()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </Card.Footer>
              </Card>
            </Container>
          </CardMeeting>
        );
      })}
    </CardContainer>
  );
};

export default JoininPlace;
