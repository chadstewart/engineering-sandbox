import { beforeEach, it, describe, expect, vi } from "vitest";
import { graphql } from "@/gql";
import api from "@/lib/api/config/api";
import { getAllCustomerIDs, getCustomerData, updateCustomerData } from "@/lib/api/graphql/internal-apis/customers";

describe("GraphQL Internal API Function: Customers", () => {
  beforeEach(() => {
    vi.mock("@/lib/api/config/api", () => {
      return {
        default: {
          graphqlQuery: vi.fn(() => "test")
        }
      };
    });

    vi.mock("@/gql", () => {
      return {
        graphql: vi.fn(() => "test")
      };
    });

    vi.stubEnv("VITE_API_GATEWAY_URL", "test");
  });

  it("getCustomerData: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getCustomerData();
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", { page: 1 });
    expect(mockGraphQLFn).toHaveBeenLastCalledWith(`
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
    `);
  });

  it("getCustomerData: Should call graphQLQuery function with page being a number other than 1", async () => {
    const variableToTest = 3;
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    await getCustomerData(variableToTest);
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", { page: variableToTest });
  });

  it("updateCustomerData: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const testData = {
      customer_id: "test",
      company_name: "test",
      contact_name: "test",
      contact_title: "test",
      address: "test",
      city: "test",
      region: "test",
      postal_code: "test",
      country: "test",
      phone: "test",
      fax: "test"
    };
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await updateCustomerData(testData, "test");
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", {
      accessToken: "test",
      customerUserInput: testData,
      updateCustomerId: "test"
    });
    expect(mockGraphQLFn).toHaveBeenLastCalledWith(`
      mutation UpdateCustomer($updateCustomerId: ID!, $accessToken: String!, $customerUserInput: CustomerUserInput) {
        updateCustomer(id: $updateCustomerId, accessToken: $accessToken, customerUserInput: $customerUserInput) {
          customer_id
        }
      }
    `);
  });

  it("getAllCustomerIDs: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getAllCustomerIDs("test");
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", { accessToken: "test" });
    expect(mockGraphQLFn).toHaveBeenLastCalledWith(`
      query getAllCustomerIDs($accessToken: String!) {
        getAllCustomerIDs(accessToken: $accessToken)
      }
    `);
  });
});
