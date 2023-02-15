import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { item } from "./Feed";

function AddPhotoBox() {
  const { userId } = useParams();
  return (
    <NonPhotoBox variants={item}>
      <Goto>
        <Link to={`/user/${userId}/mykoreamap`}>
          <Text>
            <FontAwesomeIcon icon={faPlus} size="2xl" />
          </Text>
        </Link>
      </Goto>
    </NonPhotoBox>
  );
}

export default AddPhotoBox;

const Goto = styled.div`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NonPhotoBox = styled(motion.div)`
  width: 100%;
  height: 300px;
  border: 1px dashed ${(props) => props.theme.borderColor};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.mapHoverColor};
    border: 1px dashed ${(props) => props.theme.mapHoverColor};
  }
  a {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;
