import { gql, useMutation } from "@apollo/client";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  addresInfoAtom,
  photoUploadCheckAtom,
  selectImageAtom,
  uploadRegionAtom,
} from "../../atoms";
import { Icon } from "../header/Mode";

const UPLOAD_MUTATION = gql`
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

function CheckUpload({ image }: any) {
  const setUploadCheck = useSetRecoilState(photoUploadCheckAtom);
  const [imageFile, setImageFile] = useRecoilState(selectImageAtom);
  const [addressInfo, setAddressInfo] = useRecoilState(addresInfoAtom);
  const [uploadRegion, setUploadRegion] = useRecoilState(uploadRegionAtom);

  const handleCloseUploadCheck = () => {
    setUploadCheck(false);
  };
  const handlePhotoUpload = () => {
    const { path, transform, region } = uploadRegion;
    const { latitude, longitude, address } = addressInfo;
    //photo upload
    uploadPhotoMutation({
      variables: {
        file: imageFile,
        path,
        transform,
        region,
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
    setUploadRegion({
      path: "",
      transform: "",
      region: "",
    });
    setUploadCheck(false);
  };

  const [uploadPhotoMutation] = useMutation(UPLOAD_MUTATION, {
    onCompleted: uploadFinish,
  });

  return (
    <Wrapper>
      <Icon mode="normal" onClick={handleCloseUploadCheck}>
        <FontAwesomeIcon icon={faClose} />
      </Icon>
      <PreviewImage image={image}></PreviewImage>
      <button onClick={handlePhotoUpload}>업로드</button>
    </Wrapper>
  );
}

export default CheckUpload;

const Wrapper = styled.div`
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  position: absolute;
`;

const PreviewImage = styled.div<{ image: any }>`
  width: 100%;
  height: 50%;
  background-image: ${(props) =>
    props.image === null ? "" : `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
