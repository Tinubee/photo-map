import { gql, useQuery } from "@apollo/client";

export const SEEUSERPHOTOS_QUERY = gql`
  query seeUserPhotos($userId: Int!) {
    seeUserPhotos(userId: $userId) {
      user {
        username
      }
      id
      userId
      file
      region
      transform
      path
    }
  }
`;

export const useSeeUserPhotos = (userId: number) => {
  const { data } = useQuery(SEEUSERPHOTOS_QUERY, {
    variables: {
      userId,
    },
  });

  return {
    data,
  };
};
