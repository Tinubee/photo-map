import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SAvatar = styled.div<{ lg: boolean }>`
  display: flex;
  width: ${(props) => (props.lg ? "30px" : "35px")};
  height: ${(props) => (props.lg ? "30px" : "35px")};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
  padding: 25px;
  transition: background-color 0.5s;
`;

const Img = styled.img`
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
`;

function Avatar({ url = "", lg = false }) {
  console.log(url);
  return (
    <SAvatar lg={lg}>
      {url !== null ? <Img src={url} /> : <FontAwesomeIcon icon={faUser} />}
    </SAvatar>
  );
}

export default Avatar;
