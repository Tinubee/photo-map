import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectRegionAtom } from "../../atoms";
import { MapSvg } from "./types/PictureMap";

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

function Korea({ AllRegion }: any) {
  const setSelectRegion = useSetRecoilState(selectRegionAtom);
  const handleClick = (name: string) => {
    setSelectRegion(name);
  };

  return (
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
        {AllRegion.map((reg: any) => (
          <Path
            key={reg.name}
            d={reg.path}
            onClick={() => handleClick(reg.name)}
          />
        ))}
      </g>
      <g>
        {AllRegion.map((reg: any) => (
          <Text key={reg.name} x={reg.coordinate.x} y={reg.coordinate.y}>
            {reg.name}
          </Text>
        ))}
      </g>
    </MapSvg>
  );
}

export default Korea;
