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
      }
    `),
    variables: {}
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
