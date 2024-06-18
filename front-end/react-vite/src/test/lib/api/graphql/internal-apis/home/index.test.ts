import { beforeEach, it, describe, expect, vi } from "vitest";
import { graphql } from "@/gql";
import api from "@/lib/api/config/api";
import { getHomeData } from "@/lib/api/graphql/internal-apis/home";

describe("GraphQL Internal API Function: Home", () => {
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

  it("getHomeData: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getHomeData();
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", {});
    expect(mockGraphQLFn).toHaveBeenLastCalledWith(`
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
    `);
  });
});
