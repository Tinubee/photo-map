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
  padding: 25px;
  transition: background-color 0.5s;
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const ImgContainer = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

function Avatar({ url = "", lg = false }) {
  return (
    <SAvatar lg={lg}>
      {url !== null ? (
        <ImgContainer>
          <Img src={url} />
        </ImgContainer>
      ) : (
        <FontAwesomeIcon icon={faUser} size="xl" />
      )}
    </SAvatar>
  );
}

export default Avatar;
