import styled from "styled-components";

const CImage = styled.image`
  position: absolute;
  object-fit: cover;
  height: 150vh;
  width: auto;
`;

interface INameType {
  name: string;
  picturePath: string[];
}

function Image({ name, picturePath }: INameType) {
  let Count = 0;

  const handlePictureClick = () => {
    console.log("dd");
  };

  const loopImage = () => {
    Count++;
    if (Count < picturePath.length) {
      return picturePath[Count];
    } else {
      Count = 0;
    }
  };

  return (
    <CImage
      href={picturePath.length === 1 ? picturePath[0] : loopImage()}
      style={{
        clipPath: `path('${name}')`,
      }}
      onClick={handlePictureClick}
    />
  );
}

export default Image;
