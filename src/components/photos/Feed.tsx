import { gql, useMutation } from "@apollo/client";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faClose,
  faHeart as SolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { goScrollTop } from "../header/Header";
import { Icon } from "../header/Mode";
import { useSeeMe } from "../hooks/myProfile";
import AddPhotoBox from "./AddPhotoBox";
import Photo from "./Photo";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { bounce: 0 },
  },
};

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

function Feed({ myRegionPhotos, region }: any) {
  const { userId } = useParams();
  const [id, setId] = useState<null | string>(null);
  const [photo, setPhoto] = useState<any>(null);
  const { data } = useSeeMe();

  const handlePhotoClick = (photo: any, index: string) => {
    goScrollTop(false);
    setId(index + 1);
    setPhoto(photo);
  };

  const handleClosePhoto = () => {
    setId(null);
    setPhoto(null);
  };

  const updateToggleLike = (cache: any, result: any) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;

    if (ok) {
      const photoId = `Photo:${photo.id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev: boolean) {
            return !prev;
          },
          likes(prev: number) {
            return photo.isLiked ? prev - 1 : prev + 1;
          },
        },
      });
    }
  };

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE_MUTATION, {
    update: updateToggleLike,
  });

  const handleLikeClick = async (photo: any) => {
    await setPhoto(photo);
    toggleLikeMutation({
      variables: {
        id: photo.id,
      },
    });
  };

  return (
    <>
      <PhotoBoxContainer>
        <Region>
          <RegionName>{region}</RegionName>
        </Region>
        <Container variants={container} initial="hidden" animate="visible">
          {myRegionPhotos?.seeUserRegionPhotos?.length === 0 ? (
            data?.me?.id === +userId! ? null : (
              <Message>해당 유저는 현재 지역에 등록된 사진이 없습니다.</Message>
            )
          ) : (
            myRegionPhotos?.seeUserRegionPhotos?.map(
              (photo: any, index: string) => {
                return (
                  <PhotoBox
                    variants={item}
                    key={index + 1}
                    layoutId={index + 1}
                  >
                    <Image
                      src={photo?.file}
                      onClick={() => handlePhotoClick(photo, index)}
                    />
                    <PhotoAction onClick={() => handleLikeClick(photo)}>
                      <FontAwesomeIcon
                        style={{
                          color: photo.isLiked ? "tomato" : "inherit",
                        }}
                        icon={photo.isLiked ? SolidHeart : faHeart}
                      />
                    </PhotoAction>
                  </PhotoBox>
                );
              }
            )
          )}
          {data?.me?.id === +userId! &&
          myRegionPhotos?.seeUserRegionPhotos?.length < 9 ? (
            <AddPhotoBox />
          ) : null}
        </Container>
      </PhotoBoxContainer>
      <AnimatePresence>
        {id ? (
          <Overlay>
            <Box layoutId={id}>
              <Top>
                <span>{photo.region}</span>
                <Icon mode="normal" onClick={handleClosePhoto}>
                  <FontAwesomeIcon icon={faClose} />
                </Icon>
              </Top>
              <Photo photo={photo} />
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Feed;

const Message = styled.div`
  position: absolute;
`;

const Region = styled.div`
  display: flex;
  justify-content: center;
`;

const RegionName = styled.span`
  background-color: ${(props) => props.theme.stempLabelbgColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-weight: 500;
  padding: 5px 100px;
  border-radius: 5px;
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  height: 100%;
  margin-top: 20px;
`;

const PhotoBoxContainer = styled(motion.div)`
  height: 100vh;
  width: 45vw;
  border-radius: 10px;
  padding: 10px;
`;

const PhotoBox = styled(motion.div)`
  width: 100%;
  height: 300px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: contain;
  :hover {
    border: 1px solid ${(props) => props.theme.mapHoverColor};
  }
`;

const PhotoAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.mapHoverColor};
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  width: 40vw;
  height: 80vh;
`;
