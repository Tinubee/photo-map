import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { ImagePath, Path, svgAnimation } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilState } from "recoil";
import { myRegionAtom, selectImageAtom } from "../../atoms";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { imageAnimation } from "../Image";
import { useMatch } from "react-router-dom";
import Feed from "../photos/Feed";
import { SEEMYPHOTOS_QUERY, useSeeMyPhotos } from "../hooks/photo/seeMyPhotos";

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

export const SEEMYREGIONPHOTOS_QUERY = gql`
  query seeMyRegionPhoto($region: String!) {
    seeMyRegionPhoto(region: $region) {
      user {
        username
      }
      id
      file
      region
      transform
      path
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
  const homeMatch = useMatch("");
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);
  const [selectRegion, setSelectRegion] = useState("");

  const { data: myPhotos } = useSeeMyPhotos();

  const [RegionSetting, { data: myRegionPhotos }] = useLazyQuery(
    SEEMYREGIONPHOTOS_QUERY,
    {
      variables: { region: selectRegion },
    }
  );

  const handleImageClick = (region: IDetailType) => {
    const { name } = region;
    if (homeMatch?.pathname) {
      setSelectRegion(name);
      RegionSetting();
    } else {
      if (!imageFile) return;
    }
  };

  const handleRegionClick = (region: IDetailType, width: any, height: any) => {
    console.log(`region : ${region.name}`);
    console.log(`width : ${width}`);
    console.log(`height : ${height}`);
    setSelectRegion("");
    if (!imageFile) return;

    const { path, transform, name } = region;

    uploadPhotoMutation({
      variables: { file: imageFile, path, transform, region: name },
    });
  };

  const uploadFinish = (data: any) => {
    setImageFile("");
  };

  const [uploadPhotoMutation] = useMutation(UPLOAD_MUTATION, {
    onCompleted: uploadFinish,
    refetchQueries: [
      {
        query: SEEMYPHOTOS_QUERY,
      },
    ],
  });

  useEffect(() => {
    myPhotos?.seeMyPhotos.map((photo: any) => {
      setMyRegion((data) => [...new Set([...data, photo.region])]);
      return "";
    });
  }, [myPhotos?.seeMyPhotos, setMyRegion]);

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
          {myPhotos?.seeMyPhotos?.map((photo: IPhoto) => (
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
          ))}
        </defs>

        <g filter="url(#dropshadow)">
          {data.map((res) => {
            return myRegion.indexOf(res.name) === -1 ? (
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
                onClick={(e) =>
                  handleRegionClick(
                    res,
                    e.currentTarget.getBBox().width,
                    e.currentTarget.getBBox().height
                  )
                }
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
                  document.getElementById(`imgpattern_${res.name}`) !==
                  undefined
                    ? `url(#imgpattern_${res.name})`
                    : undefined
                }
                key={res.id}
                d={res.path}
                transform={res?.transform}
                onClick={() => handleImageClick(res)}
              />
            );
          })}
        </g>
      </MapSvg>
      {homeMatch?.pathname && <Feed myRegionPhotos={myRegionPhotos} />}
    </>
  );
}

export default KoreaSplits;
