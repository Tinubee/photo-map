import { Link } from "react-router-dom";
import styled from "styled-components";
import Mode from "./Mode";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
export const Tab = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.icontextColor};
  a:hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    padding: 15px 25px;
    border-radius: 10px;
    transition: background-color 0.5s;
  }
  :active {
    transform: scale(1.02);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Tabs>
        <Tab>
          <Link to={"/"}>Home</Link>
        </Tab>
        <Tab>
          <Link to={"/about"}>About</Link>
        </Tab>
      </Tabs>
      <Mode />
    </HeaderContainer>
  );
}
export default Header;
