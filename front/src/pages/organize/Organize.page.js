import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Input, InputTextarea } from "../../forms/input";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useUser } from "../../lib/auth/auth.api";
import { withProtected } from "../../lib/auth/protectRoute.hoc";

const Organize = withRouter(({ history }) => {
  const [error, setError] = useState();
  const user = useUser();
  //Si quisiese que salga el aviso (error) de que hay que completar el campo anted de hacer submit sería useForm({mode: "onBlur"} )
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;
  const messageError = "Campo vacío";

  const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true,
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await api.post("/meet/create", data).then();
      history.push("/joinin");
    } catch (e) {
      setError(e.message);
      history.push("/");
    }
  };

  console.log(user);

  return (
    <>
      <h1>Soy Organiza</h1>
      {/* FormContext methods lo traemos de forms/input para no tener que poner los errores en cada input */}

      <FormContext {...methods}>
        <Container>
          <input
            type="hidden"
            placeholder={user.id}
            name="organizer"
            label="Organizador"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="username"
              label="Nombre"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="city"
              label="Ciudad"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="streetAddress"
              label="Calle"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="postalCode"
              label="Código Postal"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="country"
              label="País"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="title"
              label="Title"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              name="hour"
              label="Hora"
              type="time"
              min="00:00"
              max="23:59"
              step="600"
              ref={register({
                required: messageError,
              })}
            />
            <InputTextarea
              name="description"
              label="Descripción"
              type="textarea"
              ref={register({
                required: messageError,
              })}
            />
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Container>
      </FormContext>
    </>
  );
});

export const PrivateOrganize = withProtected(Organize);
