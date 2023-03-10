import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/auth/Avatar";
import { useSeeMe } from "../components/hooks/myProfile";
import { useSeeUser } from "../components/hooks/userProfile";
import PageTitle from "../components/PageTitle";
import { KoreaRegion } from "../MapInfo";

function Profile() {
  const { userId } = useParams();
  const { data } = useSeeUser(+userId!);
  const { data: myData } = useSeeMe();

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
          {myData?.me?.username === data?.seeProfile?.username ? (
            <Link to={`/user/${myData?.me?.id}/edit`}>Edit Profile</Link>
          ) : null}
          <Link to={`/user/${data?.seeProfile?.id}/koreamap`}>See Profile</Link>
        </ButtonContainer>
      </ProfileCard>
      <ProfileCard>
        <StempContainer>
          {KoreaRegion.map((name) => {
            return (
              <Stemp key={name.code}>
                <StempImage src={`/logo/${name.region}.svg`} alt="" />
                <Icon>
                  <FontAwesomeIcon icon={faLock} />
                </Icon>
                <StempText>{name.region}</StempText>
              </Stemp>
            );
          })}
        </StempContainer>
      </ProfileCard>
    </Container>
  );
}

export default Profile;

const Icon = styled.div`
  background-color: rgba(0, 0, 0, 1);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
  position: absolute;
`;

const StempContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  text-align: center;
`;
const Stemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StempImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  object-fit: contain;
`;
const StempText = styled.span`
  background-color: ${(props) => props.theme.stempLabelbgColor};
  color: ${(props) => props.theme.textColor};
  margin-top: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 6px;
`;

export const Container = styled.div`
  padding-top: 200px;
`;

export const ProfileCard = styled.div`
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
`;

export const ProfileInfo = styled.div`
  display: flex;
`;

export const Info = styled.div`
  width: 100%;
  margin-left: 50px;
  h1 {
    opacity: 0.5;
  }
`;

export const UsernameContainer = styled.div``;
export const Username = styled.span`
  font-size: 36px;
`;

export const EmailContainer = styled.div`
  margin-top: 20px;
`;

export const Email = styled.span`
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
