import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isLoggedInVar, logUserOut } from "../../apollo";
import { isDarkAtom, showMenuAtom } from "../../atoms";
import Avatar from "../auth/Avatar";
import { useSeeMe } from "../hooks/myProfile";
import { Line, Tab } from "./Header";

const ModeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  place-items: center;
  div:hover {
    cursor: pointer;
    color: "${(props) => props.theme.textColor}";
    transition: 0.5s;
  }
`;

export const Icon = styled.div<{ mode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  transition: background-color 0.5s, color 0.5s;
  padding: 25px;
  color: ${(props) =>
    props.mode === "normal" ? props.theme.icontextColor : "#b10000"};
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) =>
      props.mode === "normal" ? props.theme.textColor : "#ff0000"};
  }
  :active {
    transform: scale(1.02);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const SelectMenu = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  margin-top: 200px;
  margin-right: 100px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 10px 20px ${(props) => props.theme.menuBoxShadowColor},
    0 6px 6px ${(props) => props.theme.menuBoxShadowColor2};
  border-radius: 10px;
  a {
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 7px;
    transition: background-color 0.5s;
    text-align: center;
    color: ${(props) => props.theme.icontextColor};
  }
  a:last-child {
    border: none;
  }
  a:hover {
    color: ${(props) => props.theme.textColor};
  }
`;

function Mode() {
  const [darkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const [showMenu, setShowMenu] = useRecoilState(showMenuAtom);
  const loginMatch = useMatch("login");
  const myProfileMatch = useMatch("user/:userId");
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const navigate = useNavigate();

  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!darkAtom));
  };

  const { data } = useSeeMe();

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <ModeContainer>
      {!darkAtom ? (
        <Icon mode="normal" onClick={toggleMode}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      ) : (
        <Icon mode="normal" onClick={toggleMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
      )}
      {isLoggedIn ? (
        <AvatarContainer onClick={handleProfileClick}>
          <Avatar url={data?.me?.avatar} />
          {decodeURI(myProfileMatch?.pathname!) ===
            `/user/${data?.me?.username}` && <Line />}
        </AvatarContainer>
      ) : (
        <Tab>
          <Link to={"/login"}>Login{loginMatch?.pathname && <Line />}</Link>
        </Tab>
      )}
      {showMenu ? (
        <SelectMenu>
          <Link to={`/user/${data?.me?.username}/profile`}>내 프로필</Link>
          <Link to={`/user/${data?.me?.username}/mykoreamap`}>국내 지도</Link>
          <Link to={`/user/${data?.me?.username}/myworldmap`}>해외 지도</Link>
          <Link to="/login" onClick={() => logUserOut(navigate)}>
            로그아웃
          </Link>
        </SelectMenu>
      ) : null}
    </ModeContainer>
  );
}

export default Mode;
