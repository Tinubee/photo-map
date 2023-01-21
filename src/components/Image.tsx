import styled from "styled-components";

const CImage = styled.image`
  object-fit: cover;
`;

interface INameType {
  name: string;
}

function Image({ name }: INameType) {
  return (
    <CImage
      height="1200px"
      width="1200px"
      href="img/test-image2.jpeg"
      style={{
        clipPath: name,
      }}
    />
  );
}

export default Image;
