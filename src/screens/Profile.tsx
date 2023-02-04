import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { logUserOut } from "../apollo";
import { useSeeUser } from "../components/hooks/userProfile";
import PageTitle from "../components/PageTitle";

function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  const { data } = useSeeUser(username!);

  return (
    <Container>
      <PageTitle title="Profile"></PageTitle>
      <div>{`${data?.seeProfile?.username} 의 프로필`}</div>
      <button onClick={() => logUserOut(navigate)}>로그아웃</button>
    </Container>
  );
}

export default Profile;

const Container = styled.div``;
