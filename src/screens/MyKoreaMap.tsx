import styled from "styled-components";
import KoreaSplite from "../components/maps/KoreaSplite";
import { Container } from "../components/maps/types/PictureMap";
import PageTitle from "../components/PageTitle";

export const Map = styled.div`
  padding: 100px;
  margin: auto;
`;

function MyKoreaMap() {
  return (
    <Container>
      <PageTitle title="MyKoreaMap"></PageTitle>
      <Map>
        <KoreaSplite />
      </Map>
    </Container>
  );
}

export default MyKoreaMap;
