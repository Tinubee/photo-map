import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import Layout from "../../components/auth/Layout";
import Button from "../../components/auth/Button";
import Separator from "../../components/auth/Separator";
import BottomBox from "../../components/auth/BottomBox";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/auth/Input";
import FormError from "../../components/auth/FormError";
import { useEffect } from "react";
import KakaoLoginButton from "../../components/auth/social-login/KakaoLoginButton";
import NaverLoginButton from "../../components/auth/social-login/NaverLoginButton";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../../apollo";
import { useLocation, useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
  result: string;
}

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
  margin-bottom: 10px;
`;

export const SocialLoginBtnContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

const LoginForm = styled.form`
  margin-top: 10px;
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!, $socialLogin: Boolean!) {
    login(email: $email, password: $password, socialLogin: $socialLogin) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
    getValues,
    clearErrors,
  } = useForm<LoginFormValues>({
    mode: "onChange",
    defaultValues: {
      email: location?.state?.email || "",
      password: location?.state?.password || "",
    },
  });

  const onCompleted = (data: any) => {
    if (!data?.login) return;
    const {
      login: { ok, error, token },
    } = data;

    if (ok && token) {
      logUserIn(token);
      navigate("/");
    }
    if (!ok) {
      setError("result", { message: error! });
      setValue("email", "");
      setValue("password", "");
      setValue("result", "");
    }
  };

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  useEffect(() => {
    setError("email", { type: "required", message: "???????????? ??????????????????." });
    setError("password", {
      type: "required",
      message: "??????????????? ??????????????????.",
    });
  }, [setError, setValue]);

  const onSubmitValid: SubmitHandler<LoginFormValues> = async () => {
    if (loading) return;
    const { email, password } = getValues();
    loginMutation({
      variables: { email, password, socialLogin: false },
    });
  };

  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <Layout>
      <PageTitle title="Login"></PageTitle>
      <FormContainer>
        <FormTitle>?????????</FormTitle>
        <FormError message={errors?.result?.message} />
        <LoginForm onSubmit={handleSubmit(onSubmitValid)}>
          <FormError message={errors?.email?.message} />
          <Input
            {...register("email", {
              required: "???????????? ??????????????????.",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "???????????? ????????? ?????? ????????????.",
              },
            })}
            placeholder="Email"
            onFocus={clearLoginError}
            hasError={Boolean(errors?.email?.message)}
            autoComplete="off"
          />
          <FormError message={errors?.password?.message} />
          <Input
            {...register("password", {
              required: "??????????????? ??????????????????.",
              minLength: {
                value: 8,
                message: "?????? 8??? ????????? ??????????????? ??????????????????.",
              },
            })}
            placeholder="Password"
            type="password"
            hasError={Boolean(errors?.password?.message)}
            onFocus={clearLoginError}
            autoComplete="off"
          />
          <Button
            type="submit"
            value={loading ? "????????????..." : "?????????"}
            disabled={!isValid || loading}
          />
        </LoginForm>
        <Separator cta="" />
        <SocialLoginBtnContainer>
          <KakaoLoginButton cta="????????? ?????????" />
          <NaverLoginButton cta="????????? ?????????" />
        </SocialLoginBtnContainer>
        <Separator cta="Or" />
        <BottomBox
          cta="????????? ???????????? ?"
          link={"/signup"}
          linkText="?????? ?????????"
        />
      </FormContainer>
    </Layout>
  );
}

export default Login;
