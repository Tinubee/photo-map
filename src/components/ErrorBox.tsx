import { motion } from "framer-motion";
import styled from "styled-components";

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { bounce: 0 },
  },
};

function ErrorBox({ msg }: any) {
  return (
    <Container variants={item} initial="hidden" animate="visible">
      <ErrorBoxLayout>
        <ErrorMsg>
          <Type>Error!</Type>
          <Msg>{msg}</Msg>
        </ErrorMsg>
      </ErrorBoxLayout>
    </Container>
  );
}

export default ErrorBox;

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 99;
`;

const ErrorBoxLayout = styled.div`
  width: 45vw;
  padding: 30px;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border-radius: 10px;
`;

const ErrorMsg = styled.div`
  width: 100%;
  height: 40%;
  top: 47%;
`;

const Type = styled.h1`
  text-align: center;
  font-weight: 600;
  letter-spacing: 5px;
  color: red;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Msg = styled.span`
  text-align: start;
  white-space: pre-wrap;
`;
