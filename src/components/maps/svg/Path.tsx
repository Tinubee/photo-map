import styled from "styled-components";
import { ImagePath } from "./ImagePath";

export const Path = styled(ImagePath)<{ issame: number }>`
  stroke-width: ${(props) => (props.issame ? "0" : "0.5")};
  :hover {
    stroke-width: 0;
    fill: ${(props) => props.theme.mapHoverColor};
  }
  fill: ${(props) => (props.issame ? props.theme.mapHoverColor : "")};
`;
