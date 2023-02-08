import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectImageAtom } from "../atoms";
import KoreaSplite from "../components/maps/KoreaSplite";
import { Container } from "../components/maps/types/PictureMap";
import PageTitle from "../components/PageTitle";
import { KoreaDetail } from "../MapDetail";

const Wrapper = styled.div`
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

const Map = styled.div`
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

function MyKoreaMap() {
  const { username } = useParams();
  const [imgFile, setImgFile] = useRecoilState(selectImageAtom);
  const [imageUrl, setImageUrl] = useState("");
  const handleDownLoadMap = () => {
    console.log("download click");
  };

  const saveImgFile = (event: any) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setImgFile(file);
  };

  return (
    <Container>
      <PageTitle title="MyKoreaMap"></PageTitle>
      <Wrapper>
        <Title>
          {username}님의 국내 지도
          <FontAwesomeIcon icon={faDownload} onClick={handleDownLoadMap} />
        </Title>
        <Form>
          <Label>
            <PreviewImage image={imageUrl}></PreviewImage>
            {imgFile ? "" : <FontAwesomeIcon icon={faImage} />}
            <Input type="file" accept="image/*" onChange={saveImgFile} />
          </Label>
        </Form>
        <Map>
          <KoreaSplite data={KoreaDetail} />
        </Map>
      </Wrapper>
    </Container>
  );
}

export default MyKoreaMap;
