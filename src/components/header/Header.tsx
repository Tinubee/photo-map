import { motion } from "framer-motion";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mode from "./Mode";

export const Line = styled(motion.span)`
  position: absolute;
  width: 50px;
  height: 2px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

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
  position: relative;
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
  const homeMatch = useMatch("");
  const aboutMatch = useMatch("about");
  return (
    <HeaderContainer>
      <Tabs>
        <Tab>
          <Link to={"/"}>
            Home {homeMatch?.pathname && <Line layoutId="circle" />}
          </Link>
        </Tab>
        <Tab>
          <Link to={"/about"}>
            About {aboutMatch?.pathname && <Line layoutId="circle" />}
          </Link>
        </Tab>
      </Tabs>
      <Mode />
    </HeaderContainer>
  );
}
export default Header;
