import { motion } from "framer-motion";
import styled from "styled-components";

const Button = styled(motion.button)`
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 12px;
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
  }
  transition: background-color 0.5s, color 0.5s;
`;

export default Button;
