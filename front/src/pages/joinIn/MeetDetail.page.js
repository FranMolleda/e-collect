import React, { useState, useEffect } from "react";
import { getMeet, deleteMeet } from "../../lib/frontRoutes/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./StyleMeetings";
import { useUser, useUserSetter } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getAddMeet } from "../../lib/frontRoutes/meetings.api";

const DeleteMeet = ({ idMeet, deleteReady }) => (
  <Link
    to="/meet"
    className="button-card"
    onClick={async () => {
      await deleteMeet(idMeet);
      await deleteReady();
    }}
  >
    Eliminar
  </Link>
);

const JoininOne = (props) => {
  const [meet, setMeet] = useState({});
  const user = useUser();
  const setUser = useUserSetter();
  const id = props.meetId;

  const handleSubmit = (e) => {
    e.preventDefault();
    getAddMeet(id).then((data) => {
      setUser(data.user);
    });
  };

  const fetchMeet = () => {
    try {
      getMeet(props.meetId).then((meet) => setMeet(meet));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchMeet();
  }, []);
  return (
    <CardContainer className="cards-container">
      <h1>Detalle de Regogida</h1>
      <CardMeeting>
        <Container>
          <Card className="text-center">
            {meet.organizer && (
              <Card.Header className="backround-title">
                Organizado por: {meet.organizer.username}{" "}
              </Card.Header>
            )}
            <Card.Body>
              <Card.Title>Título: {meet.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Ciudad: {meet.city}
              </Card.Subtitle>
              <Card.Text>Zona: {meet.zone}</Card.Text>
              <Card.Text>Descripción: {meet.description}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Tipo: {meet.type}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Dificultad: {meet.difficulty}
              </Card.Subtitle>{" "}
              <Button as="div" className="button-card">
                <Link to="/meet" className="button-card">
                  Volver
                </Link>
              </Button>{" "}
              <Button as="div" className="button-card">
                <Link
                  to="/"
                  className="button-card"
                  iduser={user && user.id}
                  onClick={handleSubmit}
                >
                  Me Apunto!
                </Link>
              </Button>{" "}
              <Button as="div" className="button-card">
                <DeleteMeet
                  to="/"
                  idMeet={meet.id}
                  deleteReady={fetchMeet}
                  className="button-card"
                />
              </Button>{" "}
            </Card.Body>
            <Card.Footer className="backround-bottom-card">
              Fecha: {meet.date} - Hora: {meet.hour}
            </Card.Footer>
          </Card>
        </Container>
      </CardMeeting>
    </CardContainer>
  );
};

export default JoininOne;
