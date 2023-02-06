import KoreaSplite from "../components/maps/KoreaSplite";
import { Container } from "../components/maps/types/PictureMap";
import PageTitle from "../components/PageTitle";

function MyKoreaMap() {
  return (
    <Container>
      <PageTitle title="MyKoreaMap"></PageTitle>
      <KoreaSplite />
    </Container>
  );
}

export default MyKoreaMap;
