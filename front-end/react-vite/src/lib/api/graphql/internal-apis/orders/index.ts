import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getOrderData = async (page = 1, accessToken = "") => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetOrderData($page: Int, $accessToken: String) {
        getOrders(page: $page, accessToken: $accessToken) {
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
      page,
      accessToken
    }
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
