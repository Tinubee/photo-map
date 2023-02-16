import { motion } from "framer-motion";
import styled from "styled-components";

export const ImagePath = styled(motion.path)<{ issame: number }>`
  stroke-linejoin: round;
  stroke: #000000;
  stroke-width: 0;
  cursor: pointer;
  :hover {
    fill: ${(props) => props.theme.mapHoverColor};
  }
  fill: ${(props) => (props.issame ? props.theme.mapHoverColor : "")};
`;
