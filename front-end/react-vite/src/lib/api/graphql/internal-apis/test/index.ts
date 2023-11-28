import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const testGraphQLQuery = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
    query GetOrders($authorization: String!) {
      getOrders(authorization: $authorization) {
        order_id
      }
    }`),
    variables: {
      authorization: "test"
    }
  };

  const data = api.graphqlQuery(
    `http://172.20.0.3:3000/graphql`,
    requestBody.query,
    requestBody.variables
  );

  return data; 
};