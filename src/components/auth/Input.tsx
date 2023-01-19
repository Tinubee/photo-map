import styled from "styled-components";

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 2px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  margin: 5px 0px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
