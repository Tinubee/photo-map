import styled from "styled-components";

const ErrorBoxLayout = styled.div`
  width: 45vw;
  padding: 30px;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border-radius: 10px;
  position: absolute;
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

function ErrorBox({ msg }: any) {
  return (
    <ErrorBoxLayout>
      <ErrorMsg>
        <Type>Error!</Type>
        <Msg>{msg}</Msg>
      </ErrorMsg>
    </ErrorBoxLayout>
  );
}

export default ErrorBox;
