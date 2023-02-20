import styled from "styled-components";

export const MapSvg = styled.svg<{ mapBgColor: string | null }>`
  height: 100vh;
  width: 45vw;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.mapBgColor};
  transition: 0.5s;
`;
