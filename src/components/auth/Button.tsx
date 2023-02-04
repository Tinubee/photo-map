import styled from "styled-components";

const Button = styled.input`
  background-color: #4caf50;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: black;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  :hover {
    opacity: 0.75;
  }
`;

export default Button;
