import styled from "styled-components";

const SAvatar = styled.div<{ lg: boolean }>`
  display: flex;
  width: ${(props) => (props.lg ? "150px" : "35px")};
  height: ${(props) => (props.lg ? "150px" : "35px")};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 25px;
  transition: background-color 0.5s;
  background-color: ${(props) => (props.lg ? props.theme.iconbgColor : "")};
  :hover {
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const ImgContainer = styled.div`
  display: flex;
`;

const Img = styled.img<{ lg: boolean }>`
  width: ${(props) => (props.lg ? "150px" : "35px")};
  height: ${(props) => (props.lg ? "150px" : "35px")};
  border-radius: 50%;
  object-fit: cover;
`;

function Avatar({ url = "", lg = false }) {
  return (
    <SAvatar lg={lg}>
      <ImgContainer>
        {url !== null ? (
          <Img src={url} lg={lg} />
        ) : (
          <Img src="/defalut_profile.png" lg={lg} />
        )}
      </ImgContainer>
    </SAvatar>
  );
}

export default Avatar;
