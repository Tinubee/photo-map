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

export const Container = styled.div`
  display: flex;
`;

export const MapSvg = styled.svg`
  height: 150vh;
  width: 60vw;
  cursor: pointer;
  border: 1px solid white;
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
        {AllRegion.map((res) => (
          <Image key={res.name} name={res.path} />
        ))}
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
