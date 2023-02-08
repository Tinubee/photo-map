import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";

export const SEEUSER_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      id
      email
      username
      avatar
      photos {
        file
        region
        transform
      }
    }
  }
`;

export const useSeeUser = (username: string) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(SEEUSER_QUERY, {
    variables: {
      username,
    },
    skip: !isLoggedIn,
  });
  return { data };
};
