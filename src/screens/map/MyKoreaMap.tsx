import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { hoverRegionAtom, selectImageAtom } from "../../atoms";
import { useSeeMe } from "../../components/hooks/myProfile";
import KoreaSplits from "../../components/maps/KoreaSplits";
import { Container } from "../../components/maps/types/PictureMap";
import PageTitle from "../../components/PageTitle";
import { KoreaDetail } from "../../MapDetail";

export const Wrapper = styled.div`
  text-align: center;
  padding: 100px;
  margin: auto;
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

export const Map = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: block;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  border: 2px dashed ${(props) => props.theme.borderColor};
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
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

const RegionText = styled.div`
  font-size: 36px;
  color: rgba(0, 0, 0, 0.4);
`;

function MyKoreaMap() {
  const { data } = useSeeMe();

  const [imgFile, setImgFile] = useRecoilState(selectImageAtom);
  const hoverRegion = useRecoilValue(hoverRegionAtom);
  const [imageUrl, setImageUrl] = useState("");
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
      <Wrapper>
        <Title>
          {data?.me?.username}님의 국내 지도
          <FontAwesomeIcon icon={faDownload} onClick={handleDownLoadMap} />
        </Title>
        <Form>
          <Label>
            {imgFile ? (
              <PreviewImage image={imageUrl}></PreviewImage>
            ) : (
              <FontAwesomeIcon icon={faImage} />
            )}
            <Input type="file" accept="image/*" onChange={saveImgFile} />
          </Label>
        </Form>
        <Region>
          <RegionText>{hoverRegion}</RegionText>
        </Region>
        <Map>
          <KoreaSplits data={KoreaDetail} />
        </Map>
      </Wrapper>
    </Container>
  );
}

export default MyKoreaMap;
