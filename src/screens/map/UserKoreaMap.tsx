import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { hoverRegionAtom } from "../../atoms";
import { useSeeUser } from "../../components/hooks/userProfile";
import Korea from "../../components/maps/Korea";
import PageTitle from "../../components/PageTitle";
import { KoreaDetail } from "../../MapInfo";

function UserKoreaMap() {
  const hoverRegion = useRecoilValue(hoverRegionAtom);
  const { userId } = useParams();
  const { data } = useSeeUser(+userId!);

  return (
    <Wrapper>
      <PageTitle title="KoreaMap"></PageTitle>
      <Title>{`${data?.seeProfile?.username} 님의 국내지도`}</Title>
      <MapWrapper>
        <RegionText>{hoverRegion}</RegionText>
        <Korea ref={null} data={KoreaDetail} />
      </MapWrapper>
    </Wrapper>
  );
}

export default UserKoreaMap;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  justify-content: space-around;
  height: 150vh;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150vh;
`;

const RegionText = styled.div`
  height: 100vh;
  width: 90vw;
  position: absolute;
  pointer-events: none;
  padding: 30px 0px;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.4);
`;

const Title = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 24px;
`;
