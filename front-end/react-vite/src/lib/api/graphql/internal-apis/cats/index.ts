import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getCats = async (getDog = false) => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
    query GetCats($getDog: Boolean) {
      getCats(getDog: $getDog) {
        url
        width
        height
      }
    }`),
    variables: {
      getDog
    }
  };

  const data = api.graphqlQuery(
    `http://172.20.0.3:3000/graphql`,
    requestBody.query,
    requestBody.variables
  );

  return data; 
};