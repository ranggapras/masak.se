import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://massive-goose-68.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "6z7LE7srzgisVM50edm38wwYagop7rEXr506EbW0vchKLx1QzljIVkTNNaA6pNIo",
  },
});
export default client;
