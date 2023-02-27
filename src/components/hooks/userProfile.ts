import { gql, useQuery } from "@apollo/client";

export const SEEUSER_QUERY = gql`
  query seeProfile($id: Int!) {
    seeProfile(id: $id) {
      id
      email
      username
      avatar
    }
  }
`;

export const useSeeUser = (id: number) => {
  const { data } = useQuery(SEEUSER_QUERY, {
    variables: {
      id,
    },
  });
  return { data };
};
