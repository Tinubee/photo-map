import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const KakaoButton = styled.a`
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  height: 50px;
  background-color: #fee500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  cursor: pointer;
  display: block;
  border: none;
`;

function KakaoLoginButton() {
  return (
    <KakaoButton>
      <FontAwesomeIcon icon={faComment} /> 카카오 로그인
    </KakaoButton>
  );
}

export default KakaoLoginButton;
