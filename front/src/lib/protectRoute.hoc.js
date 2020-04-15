import React from "react";
import { useUser, useUserIsLoading } from "./auth.api";
//https://reacttraining.com/react-router/web/guides/quick-start
import { Redirect } from "react-router-dom";

const ProtectedPagePlaceholder = () => <div>PROTECTED PAGE</div>;

// This is a HOC -> High Order Component
export const withProtected = (
  //Con Component, le pasamos el componente para pintar que ponemos entre parentesis de withProtected(Organizer). Organizer es component en este caso
  Component,
  { redirect = true, redirectTo = "/auth/login" } = {} // options are always present
) => (props) => {
  const user = useUser();
  const isUserLoading = useUserIsLoading();

  if (user) {
    // Si hay usuario logueado pinta el componente
    return <Component />;
  } else {
    // Si el usuarion está cargando en el back renderiza el placeholder
    if (isUserLoading) return <ProtectedPagePlaceholder />;
    else {
      // Si ha sido completada la autenticacion eligo si quiero hacer reditrect o no
      if (redirect) {
        return <Redirect to={redirectTo} />;
      } else {
        return <ProtectedPagePlaceholder />;
      }
    }
  }
};
