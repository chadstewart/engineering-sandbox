import api from "@/lib/api/config/api";
import { graphql } from "@/gql";
import { updateCustomerType } from "@/lib/types/update-customer-schema";

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

export const updateCustomerData = async (customerData: updateCustomerType, accessToken: string) => {
  const customerId = `${customerData.customer_id}`;
  delete customerData.customer_id;
  const requestBody = {
    query: graphql(/* GraphQL */ `
      mutation UpdateCustomer($updateCustomerId: ID!, $accessToken: String!, $customerUserInput: CustomerUserInput) {
        updateCustomer(id: $updateCustomerId, accessToken: $accessToken, customerUserInput: $customerUserInput) {
          customer_id
        }
      }
    `),
    variables: {
      accessToken,
      customerUserInput: customerData,
      updateCustomerId: customerId
    }
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};

export const getAllCustomerIDs = async (accessToken: string) => {
  const requestBody = {
    query: graphql(/* GraphQL */ `
      query getAllCustomerIDs($accessToken: String!) {
        getAllCustomerIDs(accessToken: $accessToken)
      }
    `),
    variables: {
      accessToken
    }
  };

  const data = api.graphqlQuery(`http://172.20.0.3:3000/graphql`, requestBody.query, requestBody.variables);

  return data;
};
