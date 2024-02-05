import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getHomeData = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetHomeData {
        getOrders {
          totalRows
        }
        getTotalRevenue {
          total_revenue
        }
        getProducts {
          totalRows
        }
        getCustomers {
          totalRows
        }
        getCustomerCountryDistribution {
          country
          customerCount
        }
      }
    `),
    variables: {}
  };

  const data = api.graphqlQuery(import.meta.env.VITE_API_GATEWAY_URL, requestBody.query, requestBody.variables);

  return data;
};
