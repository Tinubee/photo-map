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
import { Path, svgAnimation, Text, textAnimation } from "../Korea";

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

  const handleClick = () => {
    //Image File Upload
  };

  return (
    <Container>
      <MapSvg viewBox="0 0 850 1150" xmlns="http://www.w3.org/2000/svg">
        {AllRegion.map((res) =>
          res.picture.length === 0 ? (
            <Path
              variants={svgAnimation}
              initial="start"
              animate="end"
              transition={{
                default: { duration: 1 },
                fill: { duration: 1 },
              }}
              key={res.name}
              d={res.path}
              onClick={() => handleClick()}
            />
          ) : (
            <Image
              key={res.name}
              path={res.path}
              picturePath={res.picture}
              location={res.name}
            />
          )
        )}
        <g>
          {AllRegion.map((reg) => (
            <Text
              variants={textAnimation}
              initial="start"
              animate="end"
              transition={{
                default: { duration: 1 },
              }}
              key={reg.name}
              x={reg.coordinate.x}
              y={reg.coordinate.y}
            >
              {reg.name}
            </Text>
          ))}
        </g>
      </MapSvg>
    </Container>
  );
}

export default PictureMap;
