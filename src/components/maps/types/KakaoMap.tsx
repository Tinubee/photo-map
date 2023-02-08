import { useEffect, useState } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

interface IType {
  latitude: number;
  longitude: number;
}

const { kakao } = window;

const Map = styled.div`
  width: 800px;
  height: 800px;
`;

const KakaoMap = ({ latitude, longitude }: IType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Map id="map"></Map>;
};

export default KakaoMap;
