import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage, InputTextareaStyle, InputText } from "./style";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

export const Input = React.forwardRef(({ label, name, type = "text" }, ref) => {
  const { errors } = useFormContext();
  return (
    <div>
      <div>
        <label>{label}</label>
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
