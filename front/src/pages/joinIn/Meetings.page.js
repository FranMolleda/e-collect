import React, { useState, useEffect } from "react";
import { getMeetings, deleteMeet } from "../../lib/frontRoutes/meetings.api";
import { Card, Button, Container } from "react-bootstrap";
import { CardMeeting, CardContainer } from "./StyleMeetings";
import { useUser } from "../../lib/auth/auth.api";
import { Link } from "react-router-dom";

//Creamos función para borrar el elemento seleccionado, por un lado tenemos el recibimos la id como una prop (idMeet) y por otro pasamos una funcion que se llama deleteReady, que lo que hace es que una vez clicado el botón, le llega al componente de abajo DeleteMeet, y le pasamos dentro de deleteReady(fetchMeets), para que se modifique modifique y pasarlo por useEfect para que cambie el estado y se pinte sin el artículo modificado
const DeleteMeet = ({ idMeet, deleteReady }) => (
  <a
    href="#"
    onClick={async () => {
      //Al hacer click, llama a deleteMeet con el idMeet
      await deleteMeet(idMeet);
      //En el componente DeleteMeet, deleteReady, vuelve a llamar a fetchMeet, al llamar a fetchMeet, se vuelven a llamar las Meetings y se vuelve a renderizar
      deleteReady();
    }}
  >
    Delete
  </a>
);

const Joinin = () => {
  const [meetings, setMeeting] = useState([]);
  const user = useUser();

  //Para que al borrar el elemento, se recargue la página sin el eliminado, pasamos el estado por la función fetchMeets. y esta función al useEffect

  //Esta finción coge todas las meetings y setea la variable
  const fetchMeets = () => getMeetings().then((meeting) => setMeeting(meeting));
  useEffect(() => {
    fetchMeets();
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
                  <Button as="div" className="button-card">
                    <DeleteMeet
                      idMeet={meeting.id}
                      deleteReady={fetchMeets}
                      className="button-card"
                    />
                  </Button>{" "}
                  {/* <Card.Text>{meeting.description}</Card.Text> */}
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
