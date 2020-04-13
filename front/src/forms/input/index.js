import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage, InputTextareaStyle, InputText } from "./style";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

//Pasamos las props label y name para no repetir código en los formularios. {label en etiqueta <label> y name en classname y en name (lo que antes era, organizer, title, etc) del input}
//Para que coja ref del padre, al referirse a una etiqueta del Dom, hay que pasarle React.forwardRef. Ponemos la propo ref fuera del resto de las otras props
export const Input = React.forwardRef(({ label, name, type = "text" }, ref) => {
  const { errors } = useFormContext();
  return (
    <div>
      <div>
        <label>{label}</label>
        {/* Si hay algun campo vacío que se imprima este mensage (el cual hemos declarado en organize) */}
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </div>
      <InputText
        type={type}
        className={hasError(errors, name)}
        name={name}
        ref={ref}
      />
    </div>
  );
});
export const InputTextarea = React.forwardRef(
  ({ label, name, type = "text" }, ref) => {
    const { errors } = useFormContext();
    return (
      <div>
        <div>
          <label>{label}</label>
          {/* Si hay algun error que se imprima este mensage */}
          {errors[name]?.message && (
            <ErrorMessage>{errors[name].message}</ErrorMessage>
          )}
        </div>
        <InputTextareaStyle
          type={type}
          className={hasError(errors, name)}
          name={name}
          ref={ref}
        />
      </div>
    );
  }
);
