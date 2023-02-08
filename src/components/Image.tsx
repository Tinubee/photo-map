import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CImage = styled(motion.image)`
  position: absolute;
  object-fit: cover;
  height: 150vh;
  width: auto;
`;

interface INameType {
  path: string;
  picturePath: string[];
  location: string;
  transform?: string;
}

const Image = ({ path, picturePath, location, transform }: INameType) => {
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
  const imageAnimation = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };

  return (
    <CImage
      variants={imageAnimation}
      initial="start"
      animate="end"
      transition={{
        default: { duration: 2 },
      }}
      href={picturePath.length === 1 ? picturePath[0] : picture}
      style={{
        clipPath: `path('${path}')`,
        transform,
      }}
      onClick={handlePictureClick}
    />
  );
};
export default Image;
