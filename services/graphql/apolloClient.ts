import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cla4ant1k3ggm01ui9s8ge08e/master",
  cache: new InMemoryCache(),
});
