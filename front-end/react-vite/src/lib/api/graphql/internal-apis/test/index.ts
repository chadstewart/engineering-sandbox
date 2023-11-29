import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const testGraphQLQuery = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
    query GetOrders($page: Int) {
      getOrders(page: $page) {
        order_id
      }
    }`),
    variables: {
      page: 1
    }
  };

  const data = api.graphqlQuery(
    `http://172.20.0.3:3000/graphql`,
    requestBody.query,
    requestBody.variables
  );

  return data; 
};