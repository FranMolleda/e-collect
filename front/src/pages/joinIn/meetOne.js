import React, { useState, useEffect } from "react";
import { getMeet } from "../../lib/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./style";
import { useUser } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

const JoininOne = (props) => {
  const { id } = props.match.params;
  const [meet, setMeet] = useState([]);
  console.log(props);
  useEffect(() => {
    getMeet(id).then((meet) => setMeet(meet));
  }, []);
  //   const [meet, setMeet] = useState([]);
  //   const user = useUser();

  //   useEffect(() => {
  //     getMeet(props).then((meet) => setMeeting(meet));
  //   }, []);

  return (
    <CardContainer className="cards-container">
      <h1>detalle de Regogida</h1>
      {/* {meet.map((meeting, i) => { */}
      {/* return ( */}
      <CardMeeting>
        <Container>
          <Card className="text-center">
            <Card.Header className="backround-title">
              Organizado por:
            </Card.Header>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.city}
              </Card.Subtitle>
              <Card.Text>{meet.streetAddress}</Card.Text>
              <Button as="div" className="button-card">
                <Link to="/meet/:id" className="button-card">
                  Información
                </Link>
              </Button>{" "}
              {/* <Card.Text>{meeting.description}</Card.Text> */}
            </Card.Body>
            <Card.Footer className="backround-bottom-card">
              Fecha: {props.date} - Hora: {meet.hour}
            </Card.Footer>
          </Card>
        </Container>
      </CardMeeting>
      );
      {/* })} */}
    </CardContainer>
  );
};

export default JoininOne;
