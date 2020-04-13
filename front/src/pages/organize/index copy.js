// import React from "react";
// import { useForm } from "react-hook-form";
// import { Container } from "react-bootstrap";
// import styled from "styled-components";

// const Input = styled.input`
//   font-size: 1.2em;
//   &.error {
//     border-color: green;
//   }
// `;

// const hasError = (errors, name) => {
//   if (name in errors) return "error";
//   return "";
// };

// const Organize = () => {
//   //Si quisiese que salga el aviso (error) de que hay que completar el campo anted de hacer submit sería useForm({mode: "onBlur"} )
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <h1>Soy Organiza</h1>
//       <Container>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label>Organizador</label>
//             <Input
//               className={hasError(errors, "organizer")}
//               name="organizer"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>Ciudad</label>
//             <Input
//               className={hasError(errors, "city")}
//               name="city"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>Calle</label>
//             <Input
//               className={hasError(errors, "streetAddress")}
//               name="streetAddress"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>Código postal</label>
//             <Input
//               className={hasError(errors, "postalCode")}
//               name="postalCode"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>País</label>
//             <Input
//               className={hasError(errors, "country")}
//               name="country"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>Titulo</label>
//             <Input
//               className={hasError(errors, "title")}
//               name="title"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <label>Hora</label>
//             <Input
//               type="time"
//               min="00:00"
//               max="23:59"
//               step="600"
//               className={hasError(errors, "hour")}
//               name="hour"
//               ref={register({
//                 required: true,
//               })}
//             />
//           </div>
//           <div>
//             <label>Descripción</label>
//             <Input
//               className={hasError(errors, "description")}
//               name="description"
//               ref={register({ required: true })}
//             />
//           </div>
//           <div>
//             <button type="submit">Enviar</button>
//           </div>
//         </form>
//       </Container>
//     </>
//   );
// };

// export default Organize;
