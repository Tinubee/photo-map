import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Layout from "../components/auth/Layout";
import Separator from "../components/auth/Separator";
import KakaoLoginButton from "../components/auth/social-login/KakaoLoginButton";
import NaverLoginButton from "../components/auth/social-login/NaverLoginButton";
import PageTitle from "../components/PageTitle";
import { FormContainer, FormTitle, SocialLoginBtnContainer } from "./Login";

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  passwordCheck: string;
  result: string;
}

const SIGNUP_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password) {
      ok
      error
    }
  }
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    setError,
  } = useForm<SignUpFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordCheck: "",
    },
  });

  useEffect(() => {
    setError("username", { type: "required", message: "이름을 입력해주세요." });
    setError("email", { type: "required", message: "이메일을 입력해주세요." });
    setError("password", {
      type: "required",
      message: "비밀번호를 입력해주세요.",
    });
    setError("passwordCheck", {
      type: "required",
      message: "비밀번호를 입력해주세요.",
    });
  }, [setError]);

  const onSubmitValid: SubmitHandler<SignUpFormValues> = async () => {
    if (loading) return;
    const { username, email, password, passwordCheck } = getValues();
    if (password !== passwordCheck) {
      setError("passwordCheck", { message: "비밀번호가 일치 하지 않습니다." });
      return;
    }

    signUpMutation({
      variables: { username, email, password },
    });

    setValue("username", "");
    setValue("email", "");
    setValue("password", "");
    setValue("passwordCheck", "");
  };

  const onCompleted = (data: any) => {
    if (!data?.createAccount) return;
    const {
      createAccount: { ok, error },
    } = data;

    console.log(data?.createAccount);

    if (ok) {
      console.log("회원가입성공");
    }
    if (!ok) {
      setError("result", { message: error! });
    }
  };

  const [signUpMutation, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted,
  });

  return (
    <Layout>
      <PageTitle title="Sign Up"></PageTitle>
      <FormContainer>
        <FormTitle>회원 가입</FormTitle>
        <FormError message={errors?.result?.message} />
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <FormError message={errors?.username?.message} />
          <Input
            {...register("username", {
              required: "이름을 입력해주세요.",
            })}
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
            autoComplete="off"
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
          <FormError message={errors?.passwordCheck?.message} />
          <Input
            {...register("passwordCheck", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "최소 8자 이상의 비밀번호를 입력해주세요.",
              },
            })}
            placeholder="Password Again"
            type="password"
            hasError={Boolean(errors?.passwordCheck?.message)}
            autoComplete="off"
          />
          <Button
            type="submit"
            value={loading ? "회원 가입중..." : "회원 가입"}
            disabled={!isValid || loading}
          />
        </form>
        <Separator cta="" />
        <SocialLoginBtnContainer>
          <KakaoLoginButton cta="카카오 회원가입" />
          <NaverLoginButton cta="네이버 회원가입" />
        </SocialLoginBtnContainer>
        <Separator cta="Or" />
        <BottomBox
          cta="계정이 있습니까 ?"
          link={"/login"}
          linkText="로그인 하기"
        />
      </FormContainer>
    </Layout>
  );
}

export default SignUp;
