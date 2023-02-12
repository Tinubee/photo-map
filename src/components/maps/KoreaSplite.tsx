import { gql, useMutation, useQuery } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { Path } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilState, useRecoilValue } from "recoil";
import { myRegionAtom, selectImageAtom } from "../../atoms";
import { useEffect } from "react";

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
  query seeMyPhotos($userId: Int!) {
    seeMyPhotos(userId: $userId) {
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

function KoreaSplite({ data, userId }: IDetailRegionType) {
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);

  console.log(userId);
  const onCompleted = () => {};

  const { data: myPhotos } = useQuery(SEEMYPHOTOS_QUERY, {
    variables: {
      userId,
    },
    onCompleted,
  });

  const imageFile = useRecoilValue(selectImageAtom);

  const handleRegionClick = (region: IDetailType, width: any, height: any) => {
    if (loading) return;
    const { path, transform, name } = region;

    uploadPhotoMutation({
      variables: { file: imageFile, path, transform, region: name },
    });
  };

  const uploadFinish = (data: any) => {
    console.log(data);
  };

  const [uploadPhotoMutation, { loading }] = useMutation(UPLOAD_MUTATION, {
    onCompleted: uploadFinish,
  });

  useEffect(() => {
    myPhotos?.seeMyPhotos.map((photo: any) => {
      setMyRegion((data) => [...new Set([...data, photo.region])]);
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
            <image href={photo.file} />;
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
                  e.currentTarget.getBoundingClientRect().width,
                  e.currentTarget.getBoundingClientRect().height
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
                  e.currentTarget.getBoundingClientRect().width,
                  e.currentTarget.getBoundingClientRect().height
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
