import styled from "styled-components";
import {
  BUSAN,
  CHUNGBUK,
  CHUNGNAM,
  DAEGU,
  DAEJEON,
  GANGWON,
  GWANGJU,
  GYEONGBUK,
  GYEONGGI,
  GYEONGNAM,
  INCHEON,
  JEJU,
  JEONBUK,
  JEONNAM,
  SEJONG,
  SEOUL,
  ULSAN,
} from "../../../MapName";
import Image from "../../Image";
import { Path } from "../Korea";

export const Container = styled.div`
  display: flex;
`;

export const MapSvg = styled.svg`
  height: 100vh;
  width: 50vw;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 20px;
`;

const Text = styled.text`
  fill: #ffffff;
  font-size: 16;
  font-weight: bold;
  text-anchor: middle;
  pointer-events: none;
`;

function PictureMap() {
  const AllRegion = [
    BUSAN,
    CHUNGBUK,
    CHUNGNAM,
    DAEGU,
    DAEJEON,
    GANGWON,
    GWANGJU,
    GYEONGBUK,
    GYEONGGI,
    GYEONGNAM,
    INCHEON,
    JEJU,
    JEONBUK,
    JEONNAM,
    SEJONG,
    SEOUL,
    ULSAN,
  ];

  return (
    <Container>
      <MapSvg viewBox="0 0 850 1150" xmlns="http://www.w3.org/2000/svg">
        {AllRegion.map((res) =>
          res.picture.length === 0 ? (
            <Path key={res.name} d={res.path} />
          ) : (
            <Image key={res.name} name={res.path} picturePath={res.picture} />
          )
        )}
        <g>
          {AllRegion.map((reg) => (
            <Text key={reg.name} x={reg.coordinate.x} y={reg.coordinate.y}>
              {reg.name}
            </Text>
          ))}
        </g>
      </MapSvg>
    </Container>
  );
}

export default PictureMap;
