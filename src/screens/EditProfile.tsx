import styled from "styled-components";
import Avatar from "../components/auth/Avatar";
import { useSeeMe } from "../components/hooks/myProfile";
import PageTitle from "../components/PageTitle";
import { Container } from "./Profile";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/auth/Input";
import FormError from "../components/auth/FormError";

interface EditUserFormValues {
  username: string;
  email: string;
  result: string;
}

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
  const [ok, setOk] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    setError,
  } = useForm<EditUserFormValues>({
    mode: "onChange",
    defaultValues: {
      email: myData?.me?.email,
      username: myData?.me?.username,
    },
  });

  useEffect(() => {
    setValue("username", myData?.me?.username);
    setValue("email", myData?.me?.email);
  }, [myData, setValue]);

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

  const onSubmitValid: SubmitHandler<EditUserFormValues> = () => {
    const { username, email } = getValues();
    editProfileMutation({
      variables: {
        username,
        email,
      },
    });
  };

  const editProfileFinished = (data: any) => {
    const {
      editProfile: { ok, error },
    } = data;
    console.log(data);
    if (!ok) {
      setError("result", { message: error! });
      setOk(false);
      return;
    }
    setOk(true);
    setTimeout(() => setOk(false), 2000);
    refetchMyData();
  };

  const [editProfileMutation] = useMutation(EDITPROFILE_MUTATION, {
    onCompleted: editProfileFinished,
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
          <SaveBtn type="button" value="저장하기" onClick={handleAvatarSave} />
        </BtnContainer>
      </ProfileCard>
      <UEProfileCard>
        <Title>Username / Email</Title>
        <UEForm onSubmit={handleSubmit(onSubmitValid)}>
          <div>
            <FormError message={errors?.username?.message} />
            <Input
              {...register("username", {
                required: "이름을 입력해주세요.",
              })}
              autoComplete="off"
              hasError={Boolean(errors?.username?.message)}
            />
            <FormError message={errors?.email?.message} />
            <Input
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "이메일의 형식이 맞지 않습니다.",
                },
              })}
              autoComplete="off"
              hasError={Boolean(errors?.email?.message)}
              disabled={myData?.me?.socialLogin}
            />
          </div>
          <BtnContainer>
            <BtnInfo>
              {ok ? <BtnInfoText>변경완료 !</BtnInfoText> : null}
              <SaveBtn type="submit" value="저장하기" />
            </BtnInfo>
          </BtnContainer>
        </UEForm>
      </UEProfileCard>
    </Container>
  );
}

export default EditProfile;

const BtnInfo = styled.div`
  text-align: center;
`;

const BtnInfoText = styled.div`
  color: rgba(90, 240, 30, 0.8);
`;

const ProfileCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
`;

const UEProfileCard = styled(ProfileCard)`
  grid-template-columns: 1fr 2fr;
`;

const UEForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Title = styled.span`
  font-size: 28px;
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

const SaveBtn = styled.input`
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
