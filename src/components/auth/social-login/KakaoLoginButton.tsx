import { faArrowRight, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icta } from "../Separator";

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
  svg:nth-child(2) {
    margin-left: 5px;
  }
  :hover {
    opacity: 0.75;
  }
`;

function KakaoLoginButton({ cta }: Icta) {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <KakaoButton href={KAKAO_AUTH_URL}>
      <FontAwesomeIcon icon={faComment} /> {cta}
      <FontAwesomeIcon icon={faArrowRight} />
    </KakaoButton>
  );
}

export default KakaoLoginButton;
