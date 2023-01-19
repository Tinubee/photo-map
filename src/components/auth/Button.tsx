import styled from "styled-components";

const Button = styled.input`
  border: none;
  border-radius: 3px;
  margin: 12px 0px;
  color: black;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default Button;
