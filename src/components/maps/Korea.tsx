import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { IDetailType } from "../../MapInfo";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  addresInfoAtom,
  errMsgAtom,
  hoverRegionAtom,
  isErrorAtom,
  myRegionAtom,
  selectImageAtom,
  selectRegionAtom,
} from "../../atoms";
import { forwardRef, useEffect } from "react";
import styled from "styled-components";
import { imageAnimation } from "../Image";
import { useMatch, useParams } from "react-router-dom";
import Feed from "../photos/Feed";
import { useSeeUserPhotos } from "../hooks/photo/seeUserPhotos";
import { Path } from "./svg/Path";
import { ImagePath } from "./svg/ImagePath";
import { MapSvg } from "./svg/MapSvg";
import Defs from "./svg/Defs";

interface IDetailRegionType {
  data: IDetailType[];
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

export const UPLOAD_MUTATION = gql`
  mutation uploadPhoto(
    $file: Upload!
    $path: String!
    $transform: String
    $region: String!
    $latitude: Float
    $longitude: Float
    $address: String
  ) {
    uploadPhoto(
      file: $file
      path: $path
      transform: $transform
      region: $region
      latitude: $latitude
      longitude: $longitude
      address: $address
    ) {
      region
      path
      id
    }
  }
`;

const svgAnimation = {
  start: { pathLength: 0, fill: "rgb(255, 255, 255)" },
  end: {
    fill: "#9ed6ad",
    pathLength: 1,
  },
};

const Korea = forwardRef(function Korea(
  { data }: IDetailRegionType,
  forwardedRef: any
) {
  const PHOTO_MAX_COUNT = 9;
  const { userId } = useParams();
  const userMapMatch = useMatch("user/:userId/koreamap");
  const [myRegion, setMyRegion] = useRecoilState(myRegionAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);
  const [selectRegion, setSelectRegion] = useRecoilState(selectRegionAtom);
  const [hoverRegion, setHoverRegion] = useRecoilState(hoverRegionAtom);
  const setIsError = useSetRecoilState(isErrorAtom);
  const setErrMsg = useSetRecoilState(errMsgAtom);
  const [addressInfo, setAddressInfo] = useRecoilState(addresInfoAtom);

  const {
    data: myPhotos,
    loading: myPhotosLoading,
    refetch: myPhtosRefetch,
  } = useSeeUserPhotos(+userId!);

  const [RegionSetting, { data: myRegionPhotos, refetch }] = useLazyQuery(
    SEEUSERREGIONPHOTOS_QUERY,
    {
      variables: { region: selectRegion, userId: +userId! },
    }
  );

  const handleImageClick = async (region: IDetailType) => {
    const { path, transform, name } = region;
    const { latitude, longitude, address } = addressInfo;
    setSelectRegion(name);

    const { data } = await RegionSetting();

    if (userMapMatch) return;

    if (!imageFile) {
      setErrMsg("No Image");
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    if (data.seeUserRegionPhotos.length >= PHOTO_MAX_COUNT) {
      setErrMsg("사진은 최대 9개");
      setImageFile(null);
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    uploadPhotoMutation({
      variables: {
        file: imageFile,
        path,
        transform,
        region: name,
        latitude,
        longitude,
        address,
      },
    });
  };

  const handleRegionClick = async (region: IDetailType) => {
    const { path, transform, name } = region;
    const { latitude, longitude, address } = addressInfo;

    setSelectRegion(name);
    const { data } = await RegionSetting();

    if (userMapMatch) return;

    if (!imageFile) {
      setErrMsg("No Image");
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    if (data.seeUserRegionPhotos.length >= PHOTO_MAX_COUNT) {
      setErrMsg("사진은 최대 9개");
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      return;
    }

    uploadPhotoMutation({
      variables: {
        file: imageFile,
        path,
        transform,
        region: `${name}⭐️`,
        latitude,
        longitude,
        address,
      },
    });
  };

  const uploadFinish = async (data: any) => {
    setImageFile(null);
    setAddressInfo({
      address: null,
      longitude: null,
      latitude: null,
    });
    myPhtosRefetch();
    //window.location.reload();
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
      {myPhotosLoading ? (
        ""
      ) : (
        <MapSvg
          ref={forwardedRef}
          viewBox="0 -50 550 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Defs myPhotos={myPhotos} />
          <G>
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
                  onHoverStart={() => setHoverRegion(res.name)}
                  onHoverEnd={() => setHoverRegion("")}
                  issame={res.name === hoverRegion ? 1 : 0}
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
                  onHoverStart={() => setHoverRegion(res.name)}
                  onHoverEnd={() => setHoverRegion("")}
                  issame={res.name === hoverRegion ? 1 : 0}
                />
              );
            })}
          </G>
        </MapSvg>
      )}
      {userMapMatch?.pathname && (
        <Feed
          myRegionPhotos={myRegionPhotos}
          region={selectRegion}
          refetch={refetch}
        />
      )}
    </>
  );
});

export default Korea;

const G = styled.g`
  filter: url("#dropshadow");
`;
