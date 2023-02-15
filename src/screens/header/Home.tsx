import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import { isLoggedInVar } from "../../apollo";
import { useReactiveVar } from "@apollo/client";
import { useSeeMe } from "../../components/hooks/myProfile";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 120px;
  justify-content: space-around;
  height: 150vh;
`;

const GoTo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

function Home() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useSeeMe();

  return (
    <Wrapper>
      <PageTitle title="Home"></PageTitle>
      {isLoggedIn ? (
        <GoTo>
          <Link to={`/user/${data?.me?.id}/koreamap`}>내 지도 보러가기</Link>
        </GoTo>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default Home;
