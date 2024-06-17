import { beforeEach, it, describe, expect, vi } from "vitest";
import { graphql } from "@/gql";
import api from "@/lib/api/config/api";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";

describe("GraphQL Internal API Function: Orders", () => {
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

  it("getOrderData: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getOrderData();
    expect(mockGraphQLQueryFn).toHaveBeenCalledWith("test", "test", { page: 1 });
    expect(mockGraphQLFn).toHaveBeenCalledWith(`
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
    `);
  });

  it("getOrderData: Should call graphQLQuery function with page being a number other than 1", async () => {
    const variableToTest = 3;
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    await getOrderData(variableToTest);
    expect(mockGraphQLQueryFn).toHaveBeenCalledWith("test", "test", { page: variableToTest });
  });
});
