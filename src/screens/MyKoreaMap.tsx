import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import KoreaSplite from "../components/maps/KoreaSplite";
import { Container } from "../components/maps/types/PictureMap";
import PageTitle from "../components/PageTitle";

export const Map = styled.div`
  text-align: center;

  padding: 100px;
  margin: auto;
`;

const Title = styled.div`
  margin: 10px 0px;
  font-size: 28px;

  svg {
    cursor: pointer;
    margin-left: 10px;
    transition: 0.5s;
  }
`;

function MyKoreaMap() {
  const { username } = useParams();

  const handleDownLoadMap = () => {
    console.log("download click");
  };

  return (
    <Container>
      <PageTitle title="MyKoreaMap"></PageTitle>
      <Map>
        <Title>
          {username}님의 국내 지도
          <FontAwesomeIcon icon={faDownload} onClick={handleDownLoadMap} />
        </Title>

        <KoreaSplite />
      </Map>
    </Container>
  );
}

export default MyKoreaMap;
