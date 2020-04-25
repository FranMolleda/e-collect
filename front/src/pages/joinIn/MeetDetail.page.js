import React, { useState, useEffect } from "react";
import {
  getMeet,
  deleteMeet,
  getAddMeet,
} from "../../lib/frontRoutes/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./StyleMeetings";
import { useUser, useUserSetter } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

// const DeleteMeet = ({ idMeet, deleteReady }) => (
//   <Link
//     to="/meet"
//     className="button-card"
//     onClick={async () => {
//       await deleteMeet(idMeet);
//       await deleteReady();
//     }}
//   >
//     Eliminar
//   </Link>
// );

const JoininOne = (props) => {
  const [meet, setMeet] = useState({});
  const user = useUser();
  const setUser = useUserSetter();
  const id = props.meetId;

  const handleSubmit = (e) => {
    e.preventDefault();
    getAddMeet(id).then(async (data) => {
      console.log(data.user);
      return await setUser(data.user);
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
    <main>
      <CardContainer className="cards-container">
        <CardMeeting>
          <Container className="align-card-detail">
            <Card className="text-center font-color">
              {meet.organizer && (
                <Card.Header className="backround-title">
                  Organizado por: {meet.organizer.username}{" "}
                </Card.Header>
              )}
              <Card.Body>
                <Card.Subtitle as="h4" className="mb-3">
                  Título: {meet.title}
                </Card.Subtitle>
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
                  {user && (
                    <Link
                      to="/"
                      className="button-card"
                      iduser={user && user.id}
                      onClick={handleSubmit}
                    >
                      Me Apunto!
                    </Link>
                  )}
                  {!user && (
                    <Link to="/auth/login" className="button-card">
                      Me Apunto!
                    </Link>
                  )}
                </Button>{" "}
                {/* <Button as="div" className="button-card">
                <DeleteMeet
                  to="/"
                  idMeet={meet.id}
                  deleteReady={fetchMeet}
                  className="button-card"
                />
              </Button>{" "} */}
              </Card.Body>
              <Card.Footer className="backround-bottom-card">
                Fecha: {meet.date} - Hora: {meet.hour}
              </Card.Footer>
            </Card>
          </Container>
        </CardMeeting>
      </CardContainer>
    </main>
  );
};

export default JoininOne;
