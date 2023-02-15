import { useMutation } from "@apollo/client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { logUserIn } from "../../../apollo";
import { naverLogInUserDataAtom } from "../../../atoms";
import { LOGIN_MUTATION } from "../../../screens/header/Login";
import { SIGNUP_MUTATION } from "../../../screens/SignUp";
import { Icta } from "../Separator";
import { KakaoButton } from "./KakaoLoginButton";

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled(KakaoButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03c75a;
  :hover {
    opacity: 0.75;
  }
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
const NaverIcon = styled.div`
  width: 25px;
  height: 25px;
  background: url("/image/Login/navericon.png") no-repeat center;
  background-size: 30px;
`;

const NaverLoginTitle = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-top: 3px;
  svg {
    margin-bottom: 3px;
    margin-left: 10px;
  }
`;

declare global {
  interface Window {
    naver: any;
  }
}

function NaverLoginButton({ cta }: Icta) {
  const navigate = useNavigate();
  const naverRef = useRef<HTMLDivElement>(null);
  const { naver } = window;
  const [naverUser, setNaverUser] = useRecoilState(naverLogInUserDataAtom);

  const signUpCompleted = (data: any) => {
    if (!data?.createAccount) return;
    const {
      createAccount: { ok, error },
    } = data;

    if (ok) {
      loginMutation({
        variables: { email: naverUser.email, password: "", socialLogin: true },
      });
    }

    if (!ok) {
      console.log(`네이버 회원가입 오류 : ${error}`);
    }
  };

  const logInCompleted = (data: any) => {
    if (!data?.login) return;
    const {
      login: { ok, error, token },
    } = data;

    if (ok && token) {
      logUserIn(token);
      navigate("/");
    }
    if (!ok) {
      console.log(`Login Error : ${error}`);
    }
  };

  const [signUpMutation] = useMutation(SIGNUP_MUTATION, {
    onCompleted: signUpCompleted,
  });

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: logInCompleted,
  });

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000/login",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 30 },
      callbackHandle: true,
    });

    naverLogin.init();

    naverLogin.getLoginStatus(async function (status: any) {
      if (status) {
        const username = naverLogin.user.nickname;
        const email = naverLogin.user.email;
        const avatar = naverLogin.user.profile_image;
        setNaverUser({
          username,
          email,
          avatar,
        });
        signUpMutation({
          variables: {
            username: username === undefined ? email.split("@")[0] : username,
            email,
            password: "",
            socialLogin: true,
            avatar,
          },
        });
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNaverLogin = () => {
    const element = naverRef?.current?.children[0];
    if (!element) {
      return;
    }
    const event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon />
        <NaverLoginTitle>
          {cta} <FontAwesomeIcon icon={faArrowRight} />
        </NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
}

export default NaverLoginButton;
