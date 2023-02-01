import styled from "styled-components";

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
`;

interface IMsg {
  message: string | undefined;
}

function FormError({ message }: IMsg) {
  return message === "" ? null : <SFormError>{message}</SFormError>;
}

export default FormError;
