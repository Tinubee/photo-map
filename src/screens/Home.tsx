import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import KoreaSplits from "../components/maps/KoreaSplits";
import { KoreaDetail } from "../MapDetail";
import { isLoggedInVar } from "../apollo";
import { useReactiveVar } from "@apollo/client";

const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-around;
`;

function Home() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Wrapper>
      <PageTitle title="Home"></PageTitle>
      {isLoggedIn ? <KoreaSplits data={KoreaDetail} /> : ""}
    </Wrapper>
  );
}

export default Home;
