import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/auth/Avatar";
import { useSeeUser } from "../components/hooks/userProfile";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  padding-top: 200px;
`;

const ProfileCard = styled.div`
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
`;

const ProfileInfo = styled.div`
  display: flex;
`;

const Info = styled.div`
  width: 100%;
  margin-left: 50px;
  h1 {
    opacity: 0.5;
  }
`;

const UsernameContainer = styled.div``;
const Username = styled.span`
  font-size: 36px;
`;

const EmailContainer = styled.div`
  margin-top: 20px;
`;

const Email = styled.span`
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
  a {
    color: ${(props) => props.theme.textColor};
    text-align: center;
    white-space: nowrap;
    border: 1px solid #aaaaaa;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
    :hover {
      opacity: 0.75;
    }
  }
  a:last-child {
    color: #ffffff;
    background-color: #0091ff;
  }
  a:first-child {
    :hover {
      background-color: ${(props) => props.theme.iconbgColor};
    }
  }
`;

function Profile() {
  const { username } = useParams();
  const { data } = useSeeUser(username!);

  return (
    <Container>
      <PageTitle title="My Profile"></PageTitle>
      <ProfileCard>
        <ProfileInfo>
          <Avatar url={data?.seeProfile?.avatar} lg={true} />
          <Info>
            <UsernameContainer>
              <h1>Username</h1>
              <Username>{data?.seeProfile?.username}</Username>
            </UsernameContainer>
            <EmailContainer>
              <h1>Email</h1>
              <Email>{data?.seeProfile?.email}</Email>
            </EmailContainer>
          </Info>
        </ProfileInfo>
        <ButtonContainer>
          <Link to={`/user/${data?.seeProfile?.username}/edit`}>
            Edit Profile
          </Link>
          <Link to={""}>See Profile</Link>
        </ButtonContainer>
      </ProfileCard>
      <ProfileCard></ProfileCard>
    </Container>
  );
}

export default Profile;
