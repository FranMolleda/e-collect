import React, { useState, useEffect } from "react";
import { getMeetings } from "../../lib/frontRoutes/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./StyleMeetings";
import { useUser } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

const Joinin = () => {
  const [filterStart, setFilterStart] = useState("");
  const [meetings, setMeeting] = useState([]);
  const user = useUser();
  const allMeetings = () =>
    getMeetings().then((meeting) => setMeeting(meeting));

  //Esta función coge todas las meetings y setea la variable
  useEffect(() => {
    allMeetings();
  }, []);

  //Filtro para buscar por ciudad o titulo
  const filtered_meets = meetings.filter((meet) =>
    meet.city.includes(filterStart)
  );

  return (
    <>
      <Container>
        <CardContainer className="cards-container">
          <h1>Listado de Regogidas organizadas</h1>
          <div>
            <label>Filter Meetings: </label>
            <input
              value={filterStart}
              onChange={(e) => setFilterStart(e.target.value)}
            />
          </div>
          {filtered_meets.map((meeting, i) => {
            return (
              <CardMeeting key={i}>
                <Card className="text-center">
                  {meeting.organizer && (
                    <Card.Header className="backround-title">
                      Organizado por: {meeting.organizer.username}{" "}
                    </Card.Header>
                  )}
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
                    <Button as="div" className="button-card">
                      <Link to="/" className="button-card">
                        Volver
                      </Link>
                    </Button>{" "}
                  </Card.Body>
                  <Card.Footer className="backround-bottom-card">
                    Fecha: {meeting.date} - Hora: {meeting.hour}
                  </Card.Footer>
                </Card>
              </CardMeeting>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
};

export default Joinin;
