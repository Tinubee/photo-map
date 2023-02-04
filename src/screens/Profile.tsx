import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useSeeUser } from "../components/hooks/userProfile";
import PageTitle from "../components/PageTitle";

function Profile() {
  const { username } = useParams();
  const { data } = useSeeUser(username!);

  return (
    <Container>
      <PageTitle title="Profile"></PageTitle>
      <div>{`${data?.seeProfile?.username} 의 프로필`}</div>
    </Container>
  );
}

export default Profile;

const Container = styled.div``;
