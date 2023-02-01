import styled from "styled-components";
import { KakaoButton } from "./KakaoLoginButton";

const NaverLoginBtn = styled(KakaoButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03c75a;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
const NaverIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("/image/Login/navericon.png") no-repeat center;
  background-size: 40px;
`;

const NaverLoginTitle = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-top: 3px;
`;

declare global {
  interface Window {
    naver: any;
  }
}

function NaverLoginButton() {
  const handleNaverLogin = () => {};

  return (
    <>
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon />
        <NaverLoginTitle>네이버 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
}

export default NaverLoginButton;
