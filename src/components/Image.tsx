import styled from "styled-components";

const CImage = styled.image`
  position: absolute;
  object-fit: cover;
  /* outline: 1px solid white; */
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
        clipPath: `path('${name}')`,
      }}
    />
  );
}

export default Image;
