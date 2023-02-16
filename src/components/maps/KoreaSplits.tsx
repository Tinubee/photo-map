import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { ImagePath, Path, svgAnimation } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  hoverRegionAtom,
  myRegionAtom,
  selectImageAtom,
  selectRegionAtom,
} from "../../atoms";
import { useEffect } from "react";
import styled from "styled-components";
import { imageAnimation } from "../Image";
import { useMatch, useParams } from "react-router-dom";
import Feed from "../photos/Feed";
import { useSeeUserPhotos } from "../hooks/photo/seeUserPhotos";

interface IDetailRegionType {
  data: IDetailType[];
}

interface IPhoto {
  id: number;
  path: string;
  file: string;
  region: string;
  transform?: string;
}

export const SEEUSERREGIONPHOTOS_QUERY = gql`
  query seeUserRegionPhotos($region: String!, $userId: Int!) {
    seeUserRegionPhotos(region: $region, userId: $userId) {
      user {
        username
      }
      id
      userId
      file
      region
      transform
      path
      isLiked
      likes
    }
  }
`;

const UPLOAD_MUTATION = gql`
  mutation uploadPhoto(
    $file: Upload!
    $path: String!
    $transform: String
    $region: String!
  ) {
    uploadPhoto(
      file: $file
      path: $path
      transform: $transform
      region: $region
    ) {
      region
      path
      id
    }
  }
`;

const Image = styled.image`
  height: 150px;
`;

function KoreaSplits({ data }: IDetailRegionType) {
  const PHOTO_MAX_COUNT = 9;
  const { userId } = useParams();
  const userMapMatch = useMatch("user/:userId/koreamap");
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);
  const [selectRegion, setSelectRegion] = useRecoilState(selectRegionAtom);
  const sethoverRegion = useSetRecoilState(hoverRegionAtom);

  const { data: myPhotos } = useSeeUserPhotos(+userId!);

  const [RegionSetting, { data: myRegionPhotos, refetch }] = useLazyQuery(
    SEEUSERREGIONPHOTOS_QUERY,
    {
      variables: { region: selectRegion, userId: +userId! },
    }
  );

  const handleImageClick = async (region: IDetailType) => {
    const { path, transform, name } = region;
    setSelectRegion(name);

    const { data } = await RegionSetting();

    if (userMapMatch) return;

    if (!imageFile) {
      console.log("이미지 파일 불러와야함");
      return;
    }

    if (data.seeUserRegionPhotos.length >= PHOTO_MAX_COUNT) {
      console.log("사진은 최대 9개");
      setImageFile("");
      return;
    }

    uploadPhotoMutation({
      variables: { file: imageFile, path, transform, region: name },
    });
  };

  const handleRegionClick = async (region: IDetailType) => {
    const { path, transform, name } = region;
    setSelectRegion(name);

    const { data } = await RegionSetting();

    if (userMapMatch) return;

    if (!imageFile) {
      console.log("이미지 파일 불러와야함");
      return;
    }

    if (data.seeUserRegionPhotos.length >= PHOTO_MAX_COUNT) {
      console.log("사진은 최대 9개");
      return;
    }

    uploadPhotoMutation({
      variables: { file: imageFile, path, transform, region: `${name}⭐️` },
    });
  };

  const uploadFinish = async (data: any) => {
    setImageFile("");
    window.location.reload();
  };

  const [uploadPhotoMutation] = useMutation(UPLOAD_MUTATION, {
    onCompleted: uploadFinish,
  });

  useEffect(() => {
    setMyRegion([]);
    myPhotos?.seeUserPhotos?.map((photo: any) => {
      if (photo.region.includes("⭐️")) {
        setMyRegion((data) => [...new Set([...data, photo.region])]);
      }
      return "";
    });
    RegionSetting();
  }, [RegionSetting, myPhotos?.seeUserPhotos, setMyRegion]);

  return (
    <>
      <MapSvg viewBox="0 -50 550 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="dropshadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {myPhotos?.seeUserPhotos?.map((photo: IPhoto) =>
            photo.region.includes("⭐️") ? (
              <pattern
                key={photo.id}
                id={`imgpattern_${photo.region}`}
                x="0"
                y="0"
                width="1"
                height="1"
              >
                <Image href={photo.file} />
              </pattern>
            ) : null
          )}
        </defs>

        <g filter="url(#dropshadow)">
          {data.map((res) => {
            return myRegion.indexOf(`${res.name}⭐️`) === -1 ? (
              <Path
                variants={svgAnimation}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 1 },
                  fill: { duration: 1 },
                }}
                key={res.id}
                d={res.path}
                transform={res?.transform}
                onClick={(e) => handleRegionClick(res)}
                onHoverStart={() => sethoverRegion(res.name)}
                onHoverEnd={() => sethoverRegion("")}
              />
            ) : (
              <ImagePath
                variants={imageAnimation}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 1 },
                }}
                fill={
                  document.getElementById(`imgpattern_${res.name}⭐️`) !==
                  undefined
                    ? `url(#imgpattern_${res.name}⭐️)`
                    : undefined
                }
                key={res.id}
                d={res.path}
                transform={res?.transform}
                onClick={() => handleImageClick(res)}
                onHoverStart={() => sethoverRegion(res.name)}
                onHoverEnd={() => sethoverRegion("")}
              />
            );
          })}
        </g>
      </MapSvg>
      {userMapMatch?.pathname && (
        <Feed
          myRegionPhotos={myRegionPhotos}
          region={selectRegion}
          refetch={refetch}
        />
      )}
    </>
  );
}

export default KoreaSplits;
