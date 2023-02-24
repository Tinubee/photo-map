import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar, logUserOut } from "../../apollo";

export const ME_QUERY = gql`
  query me {
    me {
      id
      email
      username
      avatar
    }
  }
`;

export const useSeeMe = () => {
  const navigate = useNavigate();
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data, refetch } = useQuery(ME_QUERY, {
    skip: !isLoggedIn,
  });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut(navigate);
    }
  }, [data, navigate]);
  return {
    data,
    refetch,
  };
};
