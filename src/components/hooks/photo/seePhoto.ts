import { gql, useQuery } from "@apollo/client";

export const SEEPHOTO_QUERY = gql`
  query seePhoto($id: Int!) {
    seePhoto(id: $id) {
      likes
      isLiked
    }
  }
`;

export const useSeePhoto = (id: number) => {
  const { data } = useQuery(SEEPHOTO_QUERY, {
    variables: {
      id,
    },
  });

  return {
    data,
  };
};
