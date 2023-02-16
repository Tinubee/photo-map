import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import {
  Email,
  EmailContainer,
  Info,
  ProfileInfo,
  Username,
  UsernameContainer,
} from "../Profile";

interface IUserData {
  id: number;
  username: string;
  email: string;
  avatar: string;
}

const SEEALLUSERS_QUERY = gql`
  query seeAllUsers {
    seeAllUsers {
      id
      username
      email
      avatar
    }
  }
`;

function Community() {
  const { data, refetch } = useQuery(SEEALLUSERS_QUERY);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ProfileCardContainer>
      <PageTitle title="Community"></PageTitle>
      {data?.seeAllUsers?.map((user: IUserData) => {
        return (
          <ProfileCard key={user.id}>
            <ProfileInfo>
              <AvatarContainer>
                {user.avatar !== null ? (
                  <AvatarImg src={user.avatar} />
                ) : (
                  <AvatarImg src="/defalut_profile.png" />
                )}
                <Link to={`/user/${user.id}/koreamap`}>국내 지도</Link>
                <Link to={`/user/${user.id}/worldmap`}>해외 지도</Link>
              </AvatarContainer>
              <Info>
                <UsernameContainer>
                  <h1>Username</h1>
                  <Username>{user.username}</Username>
                </UsernameContainer>
                <EmailContainer>
                  <h1>Email</h1>
                  <Email>{user.email}</Email>
                </EmailContainer>
              </Info>
            </ProfileInfo>
          </ProfileCard>
        );
      })}
    </ProfileCardContainer>
  );
}

export default Community;

const AvatarContainer = styled.div`
  align-items: center;
  text-align: center;
  a {
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    white-space: nowrap;
    border: 1px solid #aaaaaa;
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    transition: 0.5s;
    margin-top: 10px;
    :hover {
      opacity: 0.75;
      border: 1px solid ${(props) => props.theme.mapHoverColor};
      color: ${(props) => props.theme.mapHoverColor};
    }
  }
`;

const AvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ProfileCardContainer = styled.div`
  width: 100vw;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0px 20px;
  padding-top: 120px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
