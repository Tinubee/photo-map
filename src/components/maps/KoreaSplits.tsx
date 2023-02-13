import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { ImagePath, Path, svgAnimation } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilState } from "recoil";
import { myRegionAtom, selectImageAtom } from "../../atoms";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { imageAnimation } from "../Image";
import { motion } from "framer-motion";
import { useMatch } from "react-router-dom";

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

export const SEEMYPHOTOS_QUERY = gql`
  query seeMyPhotos {
    seeMyPhotos {
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
  height: 100px;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function KoreaSplits({ data }: IDetailRegionType) {
  const homeMatch = useMatch("");
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);
  const [selectRegion, setSelectRegion] = useState("");

  const { data: myPhotos } = useQuery(SEEMYPHOTOS_QUERY);

  const [RegionSetting, { data: myRegionPhotos }] = useLazyQuery(
    SEEMYREGIONPHOTOS_QUERY,
    {
      variables: { region: selectRegion },
    }
  );

  const handleImageClick = (name: string) => {
    if (homeMatch?.pathname) {
      setSelectRegion(name);
      RegionSetting();
    } else {
      console.log("hljkhlashdgldskjh");
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
    console.log(data);
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
                onClick={() => handleImageClick(res.name)}
              />
            );
          })}
        </g>
      </MapSvg>
      {homeMatch?.pathname && (
        <PhotoBoxContainer>
          <Container variants={container} initial="hidden" animate="visible">
            {myRegionPhotos?.seeMyRegionPhoto?.map(
              (photo: any, index: number) => {
                return (
                  <PhotoBox variants={item} key={index} src={photo?.file} />
                );
              }
            )}
          </Container>
        </PhotoBoxContainer>
      )}
    </>
  );
}

export default KoreaSplits;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;

const PhotoBoxContainer = styled(motion.div)`
  height: 100vh;
  width: 45vw;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  overflow: auto;
`;

const PhotoBox = styled(motion.img)`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  object-fit: contain;
  border-radius: 10px;
`;
