import styled from "styled-components";

export const InputText = styled.input`
  font-size: 1.2em;
  &.error {
    border-color: green;
  }
`;
export const InputTextareaStyle = styled.textarea`
  font-size: 1.2em;
  &.error {
    border-color: green;
  }
`;
export const ErrorMessage = styled.div`
  background: #6b9ca5;
  color: #e4eff1;
  margin: 5px;
`;
