import { beforeEach, it, describe, expect, vi } from "vitest";
import { graphql } from "@/gql";
import api from "@/lib/api/config/api";
import { getProductData } from "@/lib/api/graphql/internal-apis/products";

describe("GraphQL Internal API Function: Products", () => {
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

  it("getProductData: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getProductData();
    expect(mockGraphQLQueryFn).toHaveBeenCalledWith("test", "test", { page: 1 });
    expect(mockGraphQLFn).toHaveBeenCalledWith(`
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
    `);
  });

  it("getProductData: Should call graphQLQuery function with page being a number other than 1", async () => {
    const variableToTest = 3;
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    await getProductData(variableToTest);
    expect(mockGraphQLQueryFn).toHaveBeenCalledWith("test", "test", { page: variableToTest });
  });
});
