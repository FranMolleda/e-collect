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
  background: #d9d9d9;
  color: #262626;
  margin: 5px;
`;
