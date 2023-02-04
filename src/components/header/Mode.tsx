import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInVar } from "../../apollo";
import { isDarkAtom, naverLogInUserDataAtom } from "../../atoms";
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
    transition: background-color 0.5s, color 0.5s;
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

function Mode() {
  const [darkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const loginMatch = useMatch("login");
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const naverUserData = useRecoilValue(naverLogInUserDataAtom);

  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!darkAtom));
  };

  const { data } = useSeeMe();

  console.log(naverUserData);

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
        <Link to={`/user/${data?.me?.username}`}>
          <Avatar url={data?.me?.avatar} />
        </Link>
      ) : (
        <Tab>
          <Link to={"/login"}>Login{loginMatch?.pathname && <Line />}</Link>
        </Tab>
      )}
    </ModeContainer>
  );
}

export default Mode;
