import styled from "styled-components";

function Photo({ photo }: any) {
  return (
    <Wrapper>
      <Image src={photo.file} alt="" />
      <PhotoData>
        <Likes>{photo.likes === 1 ? "1 like" : `${photo.likes} likes`}</Likes>
      </PhotoData>
    </Wrapper>
  );
}

export default Photo;

const Wrapper = styled.div`
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 99%;
  height: 50%;
  object-fit: contain;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;

const Likes = styled.span`
  display: block;
`;
