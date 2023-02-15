import { gql, useQuery } from "@apollo/client";

export const SEEALLUSERS_QUERY = gql`
  query seeAllUsers {
    seeAllUsers {
      id
      username
      email
      avatar
    }
  }
`;

export const useSeeAllUsers = () => {
  const { data } = useQuery(SEEALLUSERS_QUERY);
  return {
    data,
  };
};
