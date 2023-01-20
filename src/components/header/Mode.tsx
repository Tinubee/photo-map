import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";
import { Tab } from "./Header";

const ModeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!darkAtom));
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
      <Tab>
        <Link to={"/login"}>Login</Link>
      </Tab>
    </ModeContainer>
  );
}

export default Mode;
