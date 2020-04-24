import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import { Input, InputTextarea } from "../../forms/input";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useUser } from "../../lib/auth/auth.api";
import { withProtected } from "../../lib/auth/protectRoute.hoc";
import "materialize-css";
import "../../../public/styles/App.css";
import { Button, Icon } from "react-materialize";

const Organize = withRouter(({ history }) => {
  const [error, setError] = useState();
  const user = useUser();
  //Si quisiese que salga el aviso (error) de que hay que completar el campo ante de hacer submit sería useForm({mode: "onBlur"} )
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;
  const messageError = "Ups, te dejaste este campo sin rellenar";

  const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true,
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await api.post("/meet/create", data).then();
      history.push("/meet");
    } catch (e) {
      setError(e.message);
      history.push("/");
    }
  };

  console.log(user);

  return (
    <>
      <h1>Organiza una recogida</h1>
      <input
        type="hidden"
        name="organizer"
        defaultValue={user.id}
        ref={register({
          required: messageError,
        })}
      />
      <FormContext {...methods}>
        <Container className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="title"
              label="Título"
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
              name="city"
              label="Ciudad"
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
              name="zone"
              label="Zona"
              ref={register({
                required: messageError,
              })}
            />
            <Input
              label="Fecha"
              name="date"
              placeholder="dd/mm/aaaa"
              type="text"
              ref={register({
                required: messageError,
                pattern: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
              })}
            />
            <Input
              label="Hora"
              type="time"
              placeholder="hour"
              name="hour"
              ref={register({
                required: messageError,
                pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/i,
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
            <p className="center-align">
              <Button
                className="button-no-green"
                waves-effect="true"
                waves-teal="true"
                flat
                type="submit"
              >
                enviar<Icon right>send</Icon>
              </Button>
            </p>{" "}
          </form>
        </Container>
      </FormContext>
    </>
  );
});

export const PrivateOrganize = withProtected(Organize);
