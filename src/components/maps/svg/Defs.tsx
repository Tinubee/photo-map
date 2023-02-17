import styled from "styled-components";

interface IPhoto {
  id: number;
  path: string;
  file: string;
  region: string;
  transform?: string;
}

function Defs({ myPhotos }: any) {
  return (
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
            width="1"
            height="1"
          >
            <Image href={photo.file} />
          </pattern>
        ) : null
      )}
    </defs>
  );
}

export default Defs;

const Image = styled.image`
  height: 150px;
`;
