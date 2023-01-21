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
} from "../MapName";
import Image from "./Image";

const Container = styled.div``;

const MapSvg = styled.svg`
  height: 200vh;
  width: 200vw;
  cursor: pointer;
  overflow: visible;
  path {
    stroke-linejoin: round;
    stroke: #ffffff;
    stroke-width: 1;
  }
`;

const Text = styled.text`
  fill: #ffffff;
  font-size: 16;
  font-weight: bold;
  text-anchor: middle;
`;

function Map() {
  return (
    <Container>
      <MapSvg xmlns="http://www.w3.org/2000/svg">
        <Image name={GANGWON} />
        <Image name={SEOUL} />
        <Image name={BUSAN} />
        <Image name={DAEGU} />
        <Image name={INCHEON} />
        <Image name={GWANGJU} />
        <Image name={DAEJEON} />
        <Image name={ULSAN} />
        <Image name={SEJONG} />
        <Image name={GYEONGGI} />
        <Image name={CHUNGBUK} />
        <Image name={CHUNGNAM} />
        <Image name={JEONBUK} />
        <Image name={JEONNAM} />
        <Image name={GYEONGBUK} />
        <Image name={GYEONGNAM} />
        <Image name={JEJU} />
        <Text id="LCD11" x="156" y="214">
          서울특별시
        </Text>
        <Text id="LCD26" x="503" y="695">
          부산광역시
        </Text>
        <Text id="LCD27" x="418" y="567">
          대구광역시
        </Text>
        <Text id="LCD28" x="67" y="177">
          인천광역시
        </Text>
        <Text id="LCD29" x="127" y="707">
          광주광역시
        </Text>
        <Text id="LCD30" x="221" y="463">
          대전광역시
        </Text>
        <Text id="LCD31" x="531" y="622">
          울산광역시
        </Text>
        <Text id="LCD36" x="199" y="418">
          세종특별자치시
        </Text>
        <Text id="LCD41" x="216" y="245">
          경기도
        </Text>
        <Text id="LCD42" x="370" y="179">
          강원도
        </Text>
        <Text id="LCD43" x="294" y="381">
          충청북도
        </Text>
        <Text id="LCD44" x="105" y="449">
          충청남도
        </Text>
        <Text id="LCD45" x="179" y="592">
          전라북도
        </Text>
        <Text id="LCD46" x="138" y="764">
          전라남도
        </Text>
        <Text id="LCD47" x="447" y="460">
          경상북도
        </Text>
        <Text id="LCD48" x="367" y="672">
          경상남도
        </Text>
        <Text id="LCD50" x="76" y="1070">
          제주특별자치도
        </Text>
      </MapSvg>
    </Container>
  );
}

export default Map;
