import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { hoverRegionAtom } from "../../atoms";
import Korea from "../../components/maps/Korea";
import PageTitle from "../../components/PageTitle";
import { KoreaDetail } from "../../MapInfo";
import { Wrapper } from "../header/Home";

function UserKoreaMap() {
  const hoverRegion = useRecoilValue(hoverRegionAtom);
  return (
    <Wrapper>
      <PageTitle title="KoreaMap"></PageTitle>
      <RegionText>{hoverRegion}</RegionText>
      <Korea ref={null} data={KoreaDetail} />
    </Wrapper>
  );
}

export default UserKoreaMap;

const RegionText = styled.div`
  height: 100vh;
  width: 90vw;
  position: absolute;
  pointer-events: none;
  padding: 30px 0px;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.4);
`;
