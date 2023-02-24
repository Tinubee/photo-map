import styled from "styled-components";
import Avatar from "../components/auth/Avatar";
import { useSeeMe } from "../components/hooks/myProfile";
import PageTitle from "../components/PageTitle";
import { Container } from "./Profile";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const EDITPROFILE_MUTATION = gql`
  mutation editProfile(
    $username: String
    $email: String
    $password: String
    $avatar: Upload
    $bio: String
  ) {
    editProfile(
      username: $username
      email: $email
      password: $password
      avatar: $avatar
      bio: $bio
    ) {
      ok
      error
    }
  }
`;

function EditProfile() {
  const { data: myData, refetch: refetchMyData } = useSeeMe();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    if (event.target.files?.length === 0) return;

    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);

    setAvatarUrl(imgUrl);
    setAvatarFile(file);
  };

  const handleAvatarSave = () => {
    editProfileMutation({
      variables: {
        avatar: avatarFile,
      },
    });
  };

  const avatarUploadFinish = () => {
    console.log("complete");
    refetchMyData();
  };

  const [editProfileMutation] = useMutation(EDITPROFILE_MUTATION, {
    onCompleted: avatarUploadFinish,
  });

  return (
    <Container>
      <PageTitle title="EditProfile"></PageTitle>
      <ProfileCard>
        <Title>Avatar</Title>
        <Form>
          <Avatar url={avatarUrl ? avatarUrl : myData?.me?.avatar} lg={true} />
          <div>
            <FileUpload>
              사진 선택
              <ImageInput
                type="file"
                accept="image/*"
                onChange={handleAvatarFile}
              />
            </FileUpload>
          </div>
        </Form>
        <BtnContainer>
          <SaveBtn onClick={handleAvatarSave}>저장하기</SaveBtn>
        </BtnContainer>
      </ProfileCard>
    </Container>
  );
}

export default EditProfile;

const ProfileCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 800px;
  margin: auto;
`;

const Title = styled.span`
  font-size: 36px;
  padding: 0px 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
`;

const ImageInput = styled.input`
  display: none;
`;

const FileUpload = styled.label`
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  margin: 4px 2px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 12px;
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
  }
  transition: background-color 0.5s, color 0.5s;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SaveBtn = styled.div`
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: #0091ff;
  color: ${(props) => props.theme.textColor};
  padding: 8px 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  margin: 4px 2px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 12px;
  :hover {
    opacity: 0.75;
  }
  transition: 0.5s;
`;
