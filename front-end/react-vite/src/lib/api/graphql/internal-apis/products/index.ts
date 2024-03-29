import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getProductData = async (page = 1) => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetProductData($page: Int) {
        getProducts(page: $page) {
          product {
            unit_price
            units_in_stock
            units_on_order
            discontinued
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
