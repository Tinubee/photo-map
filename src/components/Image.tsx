import styled from "styled-components";

const CImage = styled.image`
  position: absolute;
  object-fit: cover;
`;

interface INameType {
  name: string;
}

function Image({ name }: INameType) {
  const handlePictureClick = () => {
    console.log("dd");
  };
  return (
    <CImage
      height="1200px"
      width="1200px"
      href="img/test-image2.jpeg"
      style={{
        clipPath: `path('${name}')`,
      }}
      onClick={handlePictureClick}
    />
  );
}

export default Image;
