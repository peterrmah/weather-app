import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_HOST,
  // credentials: "include",
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
