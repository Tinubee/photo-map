import { useRecoilState } from "recoil";
import { mapTypeAtom, selectRegionAtom } from "../atoms";
import PictureMap from "../components/maps/types/PictureMap";
import GeneralMap from "../components/maps/types/GeneralMap";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

function Home() {
  const [mapType, setMapType] = useRecoilState(mapTypeAtom);
  const [selectRegion, setSelectRegion] = useRecoilState(selectRegionAtom);
  const clickReturnAllRegion = () => {
    setSelectRegion("");
  };

  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Button onClick={() => setMapType(!mapType)}>
        {mapType ? "일반지도 보기" : "사진지도 보기"}
      </Button>
      {selectRegion === "" || mapType ? null : (
        <Button onClick={clickReturnAllRegion}>전체 지도 보기</Button>
      )}
      {mapType ? <PictureMap /> : <GeneralMap />}
    </>
  );
}

export default Home;
