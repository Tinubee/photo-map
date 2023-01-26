import { useRecoilValue } from "recoil";
import { selectRegionAtom } from "../../../atoms";
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
import Busan from "../detail/Busan";
import Daegu from "../detail/Daegu";
import Daejeon from "../detail/Daejeon";
import Gangwon from "../detail/Gangwon";
import GyeonggiDo from "../detail/GyeonggiDo";
import Incheon from "../detail/Incheon";
import Jeju from "../detail/Jeju";
import Jeonbuk from "../detail/Jeonbuk";
import Jeonnam from "../detail/Jeonnam";
import Sejong from "../detail/Sejong";
import Seoul from "../detail/Seoul";
import Korea from "../Korea";
import { Container } from "./PictureMap";

function GeneralMap() {
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
    제주: <Jeju />,
    세종: <Sejong />,
    강원도: <Gangwon />,
    인천: <Incheon />,
    부산: <Busan />,
  };

  const selectRegion = useRecoilValue(selectRegionAtom);

  return (
    <Container>
      {selectRegion === "" ? (
        <Korea AllRegion={AllRegion} />
      ) : (
        detailRegion[selectRegion]
      )}
      <div>ddd</div>
    </Container>
  );
}

export default GeneralMap;
