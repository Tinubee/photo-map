import { useState } from "react";
import styled from "styled-components";
import GyeonggiDo from "./detail/GyeonggiDo";
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
} from "../../MapName";
import Seoul from "./detail/Seoul";
import Daejeon from "./detail/Daejeon";
import Jeonnam from "./detail/Jeonnam";
import Daegu from "./detail/Daegu";
import Jeonbuk from "./detail/Jeonbuk";
import Jeju from "./detail/Jeju";
import Jeju2 from "./detail/Jeju2";
import { MapSvg } from "../Map";

export const Path = styled.path`
  stroke-linejoin: round;
  stroke: #ffffff;
  stroke-width: 2;
  cursor: pointer;
  :hover {
    fill: red;
  }
`;

export const Text = styled.text`
  fill: #ffffff;
  font-size: 16;
  font-weight: bold;
  text-anchor: middle;
`;

function Korea() {
  const [region, setRegion] = useState<string>("");
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

  type IDetailType = {
    [key: string]: JSX.Element;
  };

  const detailRegion: IDetailType = {
    서울: <Seoul />,
    경기도: <GyeonggiDo />,
    대전: <Daejeon />,
    전라남도: <Jeonnam />,
    전라북도: <Jeonbuk />,
    대구: <Daegu />,
    제주: <Jeju2 />,
  };

  const handleClick = (name: string) => {
    console.log(name);
    setRegion(name);
  };

  return (
    <>
      {region === "" ? (
        <MapSvg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="dropshadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g>
            {AllRegion.map((reg) => (
              <Path
                key={reg.name}
                d={reg.path}
                onClick={() => handleClick(reg.name)}
              />
            ))}
          </g>
          <g>
            {AllRegion.map((reg, index) => (
              <Text key={reg.name} x={reg.coordinate.x} y={reg.coordinate.y}>
                {reg.name}
              </Text>
            ))}
          </g>
        </MapSvg>
      ) : (
        detailRegion[region]
      )}
    </>
  );
}

export default Korea;
