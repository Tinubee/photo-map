import { useEffect, useState } from "react";
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
  let count = 0;
  const [picture, setPicture] = useState("");

  const handlePictureClick = () => {};

  useEffect(() => {
    showImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showImage = () => {
    setPicture(picturePath[count]);
    count++;
    if (count >= picturePath.length) {
      count = 0;
    }
    setTimeout(showImage, 3000);
  };

  return (
    <CImage
      href={picturePath.length === 1 ? picturePath[0] : picture}
      style={{
        clipPath: `path('${name}')`,
      }}
      onClick={handlePictureClick}
    />
  );
}

export default Image;
