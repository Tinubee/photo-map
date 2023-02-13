import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { logUserIn } from "../../../apollo";
import { kakaoLogInUserDataAtom } from "../../../atoms";
import { LOGIN_MUTATION } from "../../../screens/Login";
import { SIGNUP_MUTATION } from "../../../screens/SignUp";

interface IConfig {
  grant_type: string;
  client_id: string | undefined;
  redirect_uri: string | undefined;
  code: string | null;
  client_secret: string | undefined;
}

function KakaoAuth() {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const [kakaoUser, setKakaoUser] = useRecoilState(kakaoLogInUserDataAtom);
  const signUpCompleted = (data: any) => {
    if (!data?.createAccount) return;
    const {
      createAccount: { ok, error },
    } = data;

    if (ok) {
      loginMutation({
        variables: { email: kakaoUser.email, password: "", socialLogin: true },
      });
    }

    if (!ok) {
      console.log(`카카오 회원가입 오류 : ${error}`);
    }
  };

  const logInCompleted = (data: any) => {
    if (!data?.login) return;
    const {
      login: { ok, error, token },
    } = data;
    console.log(data);
    if (ok && token) {
      logUserIn(token);
      navigate("/");
    }
    if (!ok) {
      console.log(`Login Error : ${error}`);
    }
  };

  const getToken = async () => {
    const baseURL = "https://kauth.kakao.com/oauth/token";
    const config: IConfig = {
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_KAKAO_REST_API,
      redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
      code,
      client_secret: process.env.REACT_APP_KAKAO_CLIENT_SECRET_KEY,
    };

    try {
      const params = new URLSearchParams({
        grant_type: config.grant_type,
        client_id: config.client_id ? config.client_id : "",
        redirect_uri: config.redirect_uri ? config.redirect_uri : "",
        code: config.code ? config.code : "",
        client_secret: config.client_secret ? config.client_secret : "",
      }).toString();

      const finalUrl = `${baseURL}?${params}`;

      const tokenRequest = await (
        await fetch(finalUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        })
      ).json();

      if ("access_token" in tokenRequest) {
        const { access_token } = tokenRequest;
        const apiUrl = `https://kapi.kakao.com/v2/user/me`;
        const userData = await (
          await fetch(`${apiUrl}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
        ).json();

        const {
          kakao_account: {
            email,
            profile: { profile_image_url, nickname },
          },
        } = userData;

        setKakaoUser({
          username: nickname,
          email,
          avatar: profile_image_url,
        });

        signUpMutation({
          variables: {
            username: nickname,
            email,
            password: "",
            socialLogin: true,
            avatar: profile_image_url,
          },
        });

        return null;
      } else {
        return null;
      }
    } catch (err) {
      console.log(`Kakao Login Error : ${err}`);
    }
  };

  const [signUpMutation] = useMutation(SIGNUP_MUTATION, {
    onCompleted: signUpCompleted,
  });

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: logInCompleted,
  });

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default KakaoAuth;
