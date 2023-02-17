import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  hoverRegionAtom,
  searchRegionAtom,
  selectImageAtom,
} from "../../atoms";
import SearchBox from "../../components/auth/SearchBox";
import { useSeeMe } from "../../components/hooks/myProfile";
import Korea from "../../components/maps/Korea";
import PageTitle from "../../components/PageTitle";
import { KoreaDetail } from "../../MapInfo";

function MyKoreaMap() {
  const { data } = useSeeMe();
  const [imgFile, setImgFile] = useRecoilState(selectImageAtom);
  const [hoverRegion, setHoverRegion] = useRecoilState(hoverRegionAtom);
  const [imageUrl, setImageUrl] = useState("");
  const searchRegion = useRecoilValue(searchRegionAtom);

  const handleDownLoadMap = () => {
    console.log("download click");
  };

  const saveImgFile = (event: any) => {
    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImageUrl(imgUrl);
    setImgFile(file);
  };

  return (
    <Container>
      <PageTitle title="MyKoreaMap"></PageTitle>
      <Title>
        {data?.me?.username}님의 국내 지도
        <FontAwesomeIcon icon={faDownload} onClick={handleDownLoadMap} />
      </Title>
      <Wrapper>
        <Map>
          <Region>
            <RegionText exist={Boolean(hoverRegion)}>
              {hoverRegion || "🚀"}
            </RegionText>
          </Region>
          <Korea data={KoreaDetail} />
        </Map>
        <Setting>
          <Form>
            <Label>
              {imgFile ? (
                <PreviewImage image={imageUrl}></PreviewImage>
              ) : (
                <FontAwesomeIcon icon={faImage} />
              )}
              <ImageInput type="file" accept="image/*" onChange={saveImgFile} />
            </Label>
          </Form>
          <SearchBox />
          <RegionGrid>
            {KoreaDetail.filter((res) => res.name.match(searchRegion)).map(
              (region) => {
                return (
                  <RegionName
                    issame={hoverRegion === region.name ? 1 : 0}
                    key={region.id}
                    onMouseOver={() => setHoverRegion(region.name)}
                    onMouseLeave={() => setHoverRegion("")}
                  >
                    {region.name}
                  </RegionName>
                );
              }
            )}
          </RegionGrid>
        </Setting>
      </Wrapper>
    </Container>
  );
}

export default MyKoreaMap;

const Setting = styled.div`
  width: 45vw;
`;

const RegionGrid = styled.div`
  height: 45vh;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  overflow-y: scroll;
  padding: 10px;
`;

const RegionName = styled.div<{ issame: number }>`
  display: flex;
  background-color: ${(props) =>
    props.issame ? props.theme.mapHoverColor : props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Label = styled.label`
  border: 2px dashed ${(props) => props.theme.borderColor};
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    border: 2px dashed ${(props) => props.theme.mapHoverColor};
    svg {
      color: ${(props) => props.theme.mapHoverColor};
    }
  }
  svg {
    font-size: 56px;
    position: absolute;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  text-align: center;
  padding: 120px 0px;
`;

const Title = styled.div`
  margin: 10px 0px;
  font-size: 28px;

  svg {
    cursor: pointer;
    margin-left: 10px;
    transition: 0.5s;
  }
`;

const Map = styled.div`
  display: flex;
  width: 45vw;
`;

const Form = styled.form`
  display: block;
`;

const ImageInput = styled.input`
  display: none;
`;

const PreviewImage = styled.div<{ image: any }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${(props) =>
    props.image === null ? "" : `url(${props.image})`};

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Region = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 45vw;
  position: absolute;
  pointer-events: none;
`;

const RegionText = styled.div<{ exist: boolean }>`
  font-size: 36px;
  color: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.exist ? "1" : "0")};
`;
