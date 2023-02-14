import { motion } from "framer-motion";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import Mode from "./Mode";

export const Line = styled(motion.span)`
  position: absolute;
  width: 50px;
  height: 2px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #ff2200;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: ${(props) => props.theme.bgColor};
  top: 0;
  transition: 0.5s;
  user-select: none;
  div:last-child {
    margin-left: auto;
  }
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
export const Tab = styled.div`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.icontextColor};
  a:hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    white-space: nowrap;
    padding: 15px 25px;
    border-radius: 10px;
    transition: 0.5s;
  }
  :active {
    transform: scale(1.02);
  }
`;

export const goScrollTop = () => {
  window.scrollTo({ top: 0 });
};

function Header() {
  const homeMatch = useMatch("");
  const aboutMatch = useMatch("about");
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Tabs>
        <Tab onClick={goScrollTop}>
          <Link to={"/"}>
            Home {homeMatch?.pathname && <Line layoutId="line" />}
          </Link>
        </Tab>
        <Tab onClick={goScrollTop}>
          <Link to={"/about"}>
            About {aboutMatch?.pathname && <Line layoutId="line" />}
          </Link>
        </Tab>
      </Tabs>
      <Mode />
    </HeaderContainer>
  );
}
export default Header;
