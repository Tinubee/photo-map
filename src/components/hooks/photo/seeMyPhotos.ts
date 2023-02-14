import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../../apollo";

export const SEEMYPHOTOS_QUERY = gql`
  query seeMyPhotos {
    seeMyPhotos {
      user {
        username
      }
      id
      file
      region
      transform
      path
    }
  }
`;

export const useSeeMyPhotos = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data } = useQuery(SEEMYPHOTOS_QUERY, {
    skip: !isLoggedIn,
  });

  return {
    data,
  };
};
