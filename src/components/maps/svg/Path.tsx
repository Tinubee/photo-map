import styled from "styled-components";
import { ImagePath } from "./ImagePath";

export const Path = styled(ImagePath)`
  stroke-width: 0.5;
  :hover {
    stroke-width: 0;
    fill: ${(props) => props.theme.mapHoverColor};
  }
`;
