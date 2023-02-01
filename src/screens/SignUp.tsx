import { useEffect } from "react";
import { useForm } from "react-hook-form";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Layout from "../components/auth/Layout";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/PageTitle";
import { FormContainer, FormTitle } from "./Login";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    setError,
  } = useForm({
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

  const onSubmitValid = async () => {
    const userInfo = getValues();
    if (userInfo.password !== userInfo.passwordCheck) {
      setError("passwordCheck", { message: "비밀번호가 일치 하지 않습니다." });
      return;
    }

    setValue("username", "");
    setValue("email", "");
    setValue("password", "");
    setValue("passwordCheck", "");
  };
  return (
    <Layout>
      <PageTitle title="Sign Up"></PageTitle>
      <FormContainer>
        <FormTitle>회원 가입</FormTitle>
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
          <Button type="submit" value="회원 가입" disabled={!isValid} />
        </form>
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
