import { gql, useMutation } from "@apollo/client";
import { IDetailType } from "../../MapDetail";
import { Path } from "./Korea";
import { MapSvg } from "./types/PictureMap";
import { useRecoilValue } from "recoil";
import { selectImageAtom } from "../../atoms";

interface IDetailRegionType {
  data: IDetailType[];
}

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

function KoreaSplite({ data }: IDetailRegionType) {
  const imageFile = useRecoilValue(selectImageAtom);
  const handleRegionClick = (region: IDetailType, width: any, height: any) => {
    if (loading) return;
    console.log(region);
    console.log(imageFile);
    const { path, transform, name } = region;

    uploadPhotoMutation({
      variables: { file: imageFile, path, transform, region: name },
    });
  };

  const onCompleted = (data: any) => {
    console.log(data);
  };

  const [uploadPhotoMutation, { loading }] = useMutation(UPLOAD_MUTATION, {
    onCompleted,
  });

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
      </defs>

      <g filter="url(#dropshadow)">
        {data.map((res) => {
          return (
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
          );
        })}
      </g>
    </MapSvg>
  );
}

export default KoreaSplite;
