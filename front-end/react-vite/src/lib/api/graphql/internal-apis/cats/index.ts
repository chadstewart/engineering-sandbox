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
      }
    `),
    variables: {
      getDog
    }
  };

  const data = api.graphqlQuery(import.meta.env.VITE_API_GATEWAY_URL, requestBody.query, requestBody.variables);

  return data;
};
