import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getOrderData = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetOrderData {
        getOrders {
          order_date
          totalPages
          shipped_date
          ship_name
          ship_country
          ship_city
          ship_address
        }
      }
    `),
    variables: {}
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
