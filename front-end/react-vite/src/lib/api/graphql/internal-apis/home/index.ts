import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getHomeData = async () => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetHomeData {
        getOrders {
          totalPages
        }
        getTotalRevenue {
          round
        }
        getProducts {
          totalPages
        }
        getCustomers {
          totalPages
        }
      }
    `),
    variables: {}
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
