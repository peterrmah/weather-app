import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import { httpLinkConfigs } from "./configs/apolloConfigs";

const httpLink = createHttpLink(httpLinkConfigs);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
