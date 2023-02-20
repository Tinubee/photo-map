import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { CirclePicker } from "react-color";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { mapColorAtom, mapColorSetAtom } from "../../atoms";
import { Icon } from "../header/Mode";

function MapColor({ layoutId }: any) {
  const setMapColor = useSetRecoilState(mapColorSetAtom);
  const setMapColors = useSetRecoilState(mapColorAtom);

  const handleCloseMapColorSet = () => {
    setMapColor(null);
  };
  const handleColorChange = ({ hex }: any) => {
    if (layoutId === "mapColor") {
      setMapColors({
        mapColor: hex,
        mapBgColor: localStorage.getItem("mapBgColor"),
      });
    } else if (layoutId === "mapBgColor") {
      setMapColors({
        mapColor: localStorage.getItem("mapColor"),
        mapBgColor: hex,
      });
    }

    localStorage.setItem(layoutId, hex);
    //setMapColor(null);
  };
  return (
    <AnimatePresence>
      <Wrapper layoutId={layoutId}>
        <Icon mode="normal" onClick={handleCloseMapColorSet}>
          <FontAwesomeIcon icon={faClose} />
        </Icon>
        <Box>
          <CirclePicker onChangeComplete={handleColorChange} />
        </Box>
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.div)`
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  position: absolute;
  margin-top: 250px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export default MapColor;
