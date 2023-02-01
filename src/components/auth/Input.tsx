import styled from "styled-components";

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
