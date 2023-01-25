import { useRecoilState } from "recoil";
import { mapTypeAtom } from "../atoms";
import GeneralMap from "../components/maps/types/GeneralMap";
import PictureMap from "../components/maps/types/PictureMap";

import PageTitle from "../components/PageTitle";

function Home() {
  const [mapType, setMapType] = useRecoilState(mapTypeAtom);

  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <button onClick={() => setMapType(!mapType)}>맵타입 변경</button>
      {mapType ? <GeneralMap /> : <PictureMap />}
    </>
  );
}

export default Home;
