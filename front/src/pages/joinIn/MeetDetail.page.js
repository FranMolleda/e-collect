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
const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

const JoininOne = (props) => {
  const [meet, setMeet] = useState({});
  const user = useUser();
  const setUser = useUserSetter({});

  const AddMeetToUser = withRouter(({ history }) => (
    <button
      className="button-card"
      onClick={async () => {
        try {
          user && user.meetings.push(meet.id);
          await history.push("/meet");
        } catch (e) {
          console.log(e.message);
        }
      }}
    >
      Me apunto
    </button>
  ));

  const addUserMeet = () => {
    try {
      getAddMeet(user && user.id).then(setUser(user));
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchMeet = () => {
    try {
      getMeet(props.meetId).then((meet) => setMeet(meet));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    let unmounted = false;
    addUserMeet();
    fetchMeet();
    return () => {
      unmounted = true;
    };
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
                <AddMeetToUser
                  to="#"
                  className="button-card"
                  idUser={user && user.id}
                  onClick={addUserMeet()}
                >
                  Me Apunto!
                </AddMeetToUser>
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
