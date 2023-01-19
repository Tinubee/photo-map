import { Helmet } from "react-helmet-async";

interface ITitleType {
  title: string;
}

function PageTitle({ title }: ITitleType) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageTitle;
