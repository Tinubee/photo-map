import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SBottomBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  font-size: 16px;
  a {
    display: inline-block;
    margin-top: 5px;
    font-weight: 600;
    color: rgba(0, 255, 20, 0.5);
    transition: color 0.5s;
    :hover {
      color: rgba(0, 255, 20, 1);
    }
  }
`;

interface IBottomBoxText {
  cta: string;
  link: string;
  linkText: string;
}

function BottomBox({ cta, link, linkText }: IBottomBoxText) {
  return (
    <SBottomBox>
      <div>{cta}</div>
      <Link to={link}>
        {linkText} <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </SBottomBox>
  );
}

export default BottomBox;
