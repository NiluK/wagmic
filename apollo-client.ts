import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config as env } from "dotenv";

env();
const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export default client;
