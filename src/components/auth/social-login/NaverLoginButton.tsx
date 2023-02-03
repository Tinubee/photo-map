import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icta } from "../Separator";
import { KakaoButton } from "./KakaoLoginButton";

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
  const handleNaverLogin = () => {};

  return (
    <>
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
