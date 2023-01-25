import { useRecoilState } from "recoil";
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
import Daegu from "../detail/Daegu";
import Daejeon from "../detail/Daejeon";
import GyeonggiDo from "../detail/GyeonggiDo";
import Jeju from "../detail/Jeju";
import Jeonbuk from "../detail/Jeonbuk";
import Jeonnam from "../detail/Jeonnam";
import Seoul from "../detail/Seoul";
import Korea from "../Korea";
import { Container } from "./GeneralMap";

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
  };

  const [selectRegion, setSelectRegion] = useRecoilState(selectRegionAtom);
  const clickReturnAllRegion = () => {
    setSelectRegion("");
  };
  return (
    <Container>
      {/* <PageTitle title="About"></PageTitle> */}
      {selectRegion === "" ? (
        <Korea AllRegion={AllRegion} />
      ) : (
        <div>
          <button onClick={clickReturnAllRegion}>전체 지도 보기</button>
          {detailRegion[selectRegion]}
        </div>
      )}
    </Container>
  );
}

export default PictureMap;
