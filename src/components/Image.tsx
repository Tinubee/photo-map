import { motion } from "framer-motion";
import styled from "styled-components";

const CImage = styled(motion.image)`
  position: absolute;
  object-fit: cover;
  height: 150vh;
  width: auto;
`;

interface INameType {
  path: string;
  file: string;
  location: string;
  transform?: string;
}

const Image = ({ path, file, location, transform }: INameType) => {
  const handlePictureClick = () => {};
  console.log(transform);
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
        default: { duration: 1 },
      }}
      href={file}
      style={{
        clipPath: `path('${path}')`,
      }}
      transform={transform}
      onClick={handlePictureClick}
    />
  );
};
export default Image;
