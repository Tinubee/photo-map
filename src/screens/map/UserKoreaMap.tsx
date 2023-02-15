import KoreaSplits from "../../components/maps/KoreaSplits";
import PageTitle from "../../components/PageTitle";
import { KoreaDetail } from "../../MapDetail";
import { Wrapper } from "../header/Home";

function UserKoreaMap() {
  return (
    <Wrapper>
      <PageTitle title="KoreaMap"></PageTitle>
      <KoreaSplits data={KoreaDetail} />
    </Wrapper>
  );
}

export default UserKoreaMap;
