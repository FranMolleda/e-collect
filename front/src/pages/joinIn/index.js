import React, { useState, useEffect } from "react";
import { getMeetings } from "../../lib/meetings";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./style";
import { useUser } from "../../lib/auth.api";

const Joinin = (props) => {
  const [meetings, setMeeting] = useState([]);
  const user = useUser();

  useEffect(() => {
    getMeetings(props).then((meeting) => setMeeting(meeting));
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
                  {meeting.title}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Organizado por: </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {meeting.city}
                  </Card.Subtitle>
                  <Card.Text>{meeting.streetAddress}</Card.Text>
                  <Button className="button-card">Me apunto!</Button>
                  <Card.Text>{meeting.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="backround-bottom-card">
                  {meeting.hour}
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
