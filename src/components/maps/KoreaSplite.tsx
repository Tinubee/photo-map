import { IDetailType } from "../../MapDetail";
import { Path } from "./Korea";
import { MapSvg } from "./types/PictureMap";

interface IDetailRegionType {
  data: IDetailType[];
}

function KoreaSplite({ data }: IDetailRegionType) {
  //내사진 불러오기

  const handleRegionClick = (region: IDetailType) => {
    //사진 업로드
    console.log(region);
  };
  return (
    <MapSvg viewBox="0 -50 550 800" xmlns="http://www.w3.org/2000/svg">
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
      <g filter="url(#dropshadow)">
        {data.map((res) => {
          return (
            <Path
              key={res.name}
              d={res.path}
              transform={res?.transform}
              onClick={() => handleRegionClick(res)}
            />
          );
        })}
      </g>
    </MapSvg>
  );
}

export default KoreaSplite;
