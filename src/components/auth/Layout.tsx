import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  width: 50vh;
  height: 80vh;
  padding: 0 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      cursor: pointer;
      :hover {
        color: red;
      }
    }
  }
`;

export default Layout;
