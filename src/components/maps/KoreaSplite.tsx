import { gql, useMutation, useQuery } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { Path } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilState } from "recoil";
import { myRegionAtom, selectImageAtom } from "../../atoms";
import { useEffect } from "react";
import styled from "styled-components";

interface IDetailRegionType {
  data: IDetailType[];
  userId: number;
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

function KoreaSplite({ data, userId }: IDetailRegionType) {
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);

  const { data: myPhotos } = useQuery(SEEMYPHOTOS_QUERY);

  console.log(myPhotos);

  const handleRegionClick = (region: IDetailType, width: any, height: any) => {
    console.log(`region : ${region.name}`);
    console.log(`width : ${width}`);
    console.log(`height : ${height}`);

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
            key={photo.region}
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
              key={res.name}
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
            <Path
              fill={
                document.getElementById(`imgpattern_${res.name}`) !== undefined
                  ? `url(#imgpattern_${res.name})`
                  : undefined
              }
              key={res.name}
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
          );
        })}
      </g>
    </MapSvg>
  );
}

export default KoreaSplite;
