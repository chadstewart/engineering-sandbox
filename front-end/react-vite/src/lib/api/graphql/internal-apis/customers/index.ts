import api from "@/lib/api/config/api";
import { graphql } from "@/gql";

export const getCustomerData = async (page = 1) => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query GetCustomerData($page: Int) {
        getCustomers(page: $page) {
          customer {
            company_name
            contact_name
            contact_title
            city
            region
          }
          totalPages
        }
      }
    `),
    variables: {
      page
    }
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
