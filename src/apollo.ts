import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { NavigateFunction } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = (navigate: NavigateFunction) => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem("com.naver.nid.access_token");
  localStorage.removeItem("com.naver.nid.oauth.state_token");
  isLoggedInVar(false);
  window.location.reload();
};

const uploadHttpLink = createUploadLink({
  uri:
    process.env.NODE_ENV === "production"
      ? ""
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
  }
  if (networkError) {
    console.log(networkError);
  }
});

const httpLink = authLink.concat(onErrorLink).concat(uploadHttpLink);

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: (obj) => `User:${obj.username}`,
      },
    },
  }),
});
