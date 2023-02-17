import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchRegionAtom } from "../../atoms";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 2px solid ${(props) => props.theme.borderColor};
  padding: 5px 10px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  border-radius: 5px;
  width: 200px;
`;

function SearchBox() {
  const setSearchRegion = useSetRecoilState(searchRegionAtom);

  const searchIDFuntion = (e: any) => {
    e.preventDefault();
    const searchRegionName = e.target.value;
    setSearchRegion(searchRegionName);
  };

  return (
    <Container>
      <Input placeholder="지역 검색" onChange={searchIDFuntion} />
    </Container>
  );
}

export default SearchBox;
