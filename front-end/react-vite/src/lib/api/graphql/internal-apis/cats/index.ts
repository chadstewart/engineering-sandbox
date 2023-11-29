import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getCats = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
    query GetCats {
      getCats {
        url
        width
        height
      }
    }`),
    variables: {
      
    }
  };

  const data = api.graphqlQuery(
    `http://172.20.0.3:3000/graphql`,
    requestBody.query,
    requestBody.variables
  );

  return data; 
};