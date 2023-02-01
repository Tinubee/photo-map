import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Layout from "../components/auth/Layout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import BottomBox from "../components/auth/BottomBox";
import { useForm } from "react-hook-form";
import Input from "../components/auth/Input";
import FormError from "../components/auth/FormError";
import { useEffect } from "react";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 500px;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setError("email", { type: "required", message: "이메일을 입력해주세요." });
    setError("password", {
      type: "required",
      message: "비밀번호를 입력해주세요.",
    });
  }, [setError]);

  const onSubmitValid = async () => {};

  return (
    <Layout>
      <PageTitle title="Login"></PageTitle>
      <FormContainer>
        <FormTitle>로그인</FormTitle>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <FormError message={errors?.email?.message} />
          <Input
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "이메일의 형식이 맞지 않습니다.",
              },
            })}
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}
            autoComplete="off"
          />
          <FormError message={errors?.password?.message} />
          <Input
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "최소 8자 이상의 비밀번호를 입력해주세요.",
              },
            })}
            placeholder="Password"
            type="password"
            hasError={Boolean(errors?.password?.message)}
            autoComplete="off"
          />
          <Button type="submit" value="로그인" disabled={!isValid} />
        </form>
        <Separator />
        <BottomBox
          cta="계정이 없습니까 ?"
          link={"/signup"}
          linkText="계정 만들기"
        />
      </FormContainer>
    </Layout>
  );
}

export default Login;
