import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/auth/Avatar";
import { useSeeUser } from "../components/hooks/userProfile";
import PageTitle from "../components/PageTitle";

export const Container = styled.div`
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
          <Link to={`/user/${data?.seeProfile?.id}/edit`}>Edit Profile</Link>
          <Link to={`/user/${data?.seeProfile?.id}/koreamap`}>See Profile</Link>
        </ButtonContainer>
      </ProfileCard>
      <ProfileCard>
        <StempContainer>
          {[
            "서울특별시",
            "강원도",
            "경기도",
            "인천광역시",
            "세종특별자치시",
            "대전광역시",
            "충청북도",
            "충청남도",
            "광주광역시",
            "전라북도",
            "전라남도",
            "대구광역시",
            "경상북도",
            "경상남도",
            "울산광역시",
            "부산광역시",
            "제주특별자치도",
          ].map((name) => {
            return (
              <Stemp key={name}>
                <StempImage>
                  {name.match("광역시") ? null : (
                    <Icon>
                      <FontAwesomeIcon icon={faLock} />
                    </Icon>
                  )}
                </StempImage>
                <StempText>{name}</StempText>
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
  background-color: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
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
const StempImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0091ff;
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
