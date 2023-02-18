import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  errMsgAtom,
  hoverRegionAtom,
  isErrorAtom,
  myRegionAtom,
  searchRegionAtom,
  selectImageAtom,
  selectRegionAtom,
} from "../../atoms";
import SearchBox from "../../components/auth/SearchBox";
import Button from "../../components/Button";
import { useSeeMe } from "../../components/hooks/myProfile";
import Korea, {
  SEEUSERREGIONPHOTOS_QUERY,
  UPLOAD_MUTATION,
} from "../../components/maps/Korea";
import PageTitle from "../../components/PageTitle";
import { IDetailType, KoreaDetail } from "../../MapInfo";
import * as ExifReader from "exifreader";
import axios from "axios";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useMatch } from "react-router-dom";
import ErrorBox from "../../components/ErrorBox";

function MyKoreaMap() {
  const PHOTO_MAX_COUNT = 9;
  const { data } = useSeeMe();
  const [imgFile, setImgFile] = useRecoilState(selectImageAtom);
  const [hoverRegion, setHoverRegion] = useRecoilState(hoverRegionAtom);
  const [selectRegion, setSelectRegion] = useRecoilState(selectRegionAtom);
  const [isError, setIsError] = useRecoilState(isErrorAtom);
  const [errMsg, setErrMsg] = useRecoilState(errMsgAtom);
  const myRegion = useRecoilValue(myRegionAtom);

  const [imageUrl, setImageUrl] = useState("");
  const searchRegion = useRecoilValue(searchRegionAtom);
  const svgRef = useRef<SVGSVGElement>(null);
  const [address, setAddres] = useState("");
  const userMapMatch = useMatch("user/:userId/koreamap");

  const handleDownLoadMap = () => {
    console.log("DownLoad Image");
  };

  const saveImgFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    const address = await getAddress(file);

    setAddres(address);
    setImageUrl(imgUrl);
    setImgFile(file);
  };

  const getAddress = async (file: any) => {
    try {
      const tags = await ExifReader.load(file, { expanded: true });

      const latitude = tags.exif?.GPSLatitude?.description;
      const longitude = tags.exif?.GPSLongitude?.description;

      const getUrl = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`;
      const headers = {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API}`,
      };

      const {
        data: { documents },
      }: any = await axios.get(getUrl, {
        headers,
      });

      return documents[0].address.address_name;
    } catch {
      return "";
    }
  };

  const handlePhotoInit = () => {
    setImgFile(null);
    setImageUrl("");
    setAddres("");
  };

  const uploadFinish = async (data: any) => {
    setImgFile(null);
    setImageUrl("");
    window.location.reload();
  };

  const [uploadPhotoMutation] = useMutation(UPLOAD_MUTATION, {
    onCompleted: uploadFinish,
  });

  const [RegionSetting] = useLazyQuery(SEEUSERREGIONPHOTOS_QUERY, {
    variables: { region: selectRegion, userId: data?.me?.id },
  });

  const handleNameClick = async (region: IDetailType) => {
    const { path, transform, name } = region;
    setSelectRegion(name);

    const { data } = await RegionSetting();

    if (userMapMatch) return;

    if (!imgFile) {
      setErrMsg("No Image");
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    if (data.seeUserRegionPhotos.length >= PHOTO_MAX_COUNT) {
      setErrMsg("사진은 최대 9개");
      setImgFile(null);
      setImageUrl("");
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    uploadPhotoMutation({
      variables: {
        file: imgFile,
        path,
        transform,
        region: myRegion.indexOf(`${name}⭐️`) === -1 ? `${name}⭐️` : name,
      },
    });
  };

  return (
    <Container>
      {isError ? <ErrorBox msg={errMsg} /> : ""}
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
          <Korea ref={svgRef} data={KoreaDetail} />
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
          <div>사진 지역 정보 : {address ? address : "없음"}</div>
          <InputContainer>
            <SearchBox />
            <Button onClick={handlePhotoInit}>사진 초기화</Button>
          </InputContainer>
          <RegionGrid>
            {KoreaDetail.filter((res) => res.name.match(searchRegion)).map(
              (region) => {
                return (
                  <RegionName
                    issame={hoverRegion === region.name ? 1 : 0}
                    key={region.id}
                    onMouseOver={() => setHoverRegion(region.name)}
                    onMouseLeave={() => setHoverRegion("")}
                    onClick={() => handleNameClick(region)}
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

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

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
