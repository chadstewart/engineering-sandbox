import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getOrderData = async (page = 1) => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetOrderData($page: Int) {
        getOrders(page: $page) {
          order {
            order_date
            shipped_date
            ship_name
            ship_country
            ship_city
            ship_address
          }
          totalPages
        }
      }
    `),
    variables: {
      page
    }
  };

  const data = api.graphqlQuery(import.meta.env.VITE_API_GATEWAY_URL, requestBody.query, requestBody.variables);

  return data;
};
