import React, { useState, useEffect } from "react";
import { getMeetings } from "../../lib/frontRoutes/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./StyleMeetings";
import { useUser } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

const Joinin = () => {
  const [meetings, setMeeting] = useState([]);
  const user = useUser();

  //Esta finción coge todas las meetings y setea la variable
  useEffect(() => {
    getMeetings().then((meeting) => setMeeting(meeting));
  }, []);

  return (
    <CardContainer className="cards-container">
      <h1>Listado de Regogidas organizadas</h1>
      {meetings.map((meeting, i) => {
        return (
          <CardMeeting key={i}>
            <Container>
              <Card className="text-center">
                <Card.Header className="backround-title">
                  Organizado por:
                </Card.Header>
                <Card.Body>
                  <Card.Title>{meeting.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {meeting.city}
                  </Card.Subtitle>
                  <Card.Text>{meeting.streetAddress}</Card.Text>
                  <Button as="div" className="button-card">
                    <Link to={`/meet/${meeting.id}`} className="button-card">
                      Información
                    </Link>
                  </Button>{" "}
                </Card.Body>
                <Card.Footer className="backround-bottom-card">
                  Fecha: {meeting.date} - Hora: {meeting.hour}
                </Card.Footer>
              </Card>
            </Container>
          </CardMeeting>
        );
      })}
    </CardContainer>
  );
};

export default Joinin;
