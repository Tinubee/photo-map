import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectRegionAtom } from "../../atoms";
import { IMapType } from "../../MapName";
import { MapSvg } from "./types/PictureMap";

export const Path = styled(motion.path)`
  stroke-linejoin: round;
  stroke: #ffffff;
  stroke-width: 2;
  cursor: pointer;
  :hover {
    fill: ${(props) => props.theme.mapHoverColor};
  }
`;

export const Text = styled.text`
  fill: #ffffff;
  font-size: 16;
  font-weight: bold;
  text-anchor: middle;
`;

interface IAllRegion {
  AllRegion: IMapType[];
}

export const svgAnimation = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "#000000",
    pathLength: 1,
  },
};

function Korea({ AllRegion }: IAllRegion) {
  const setSelectRegion = useSetRecoilState(selectRegionAtom);
  const handleClick = (name: string) => {
    setSelectRegion(name);
  };

  return (
    <MapSvg viewBox="0 0 850 1150" xmlns="http://www.w3.org/2000/svg">
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
            variants={svgAnimation}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 2 },
              fill: { duration: 2 },
            }}
            key={reg.name}
            d={reg.path}
            onClick={() => handleClick(reg.name)}
          />
        ))}
      </g>
      <g>
        {AllRegion.map((reg) => (
          <Text key={reg.name} x={reg.coordinate.x} y={reg.coordinate.y}>
            {reg.name}
          </Text>
        ))}
      </g>
    </MapSvg>
  );
}

export default Korea;
