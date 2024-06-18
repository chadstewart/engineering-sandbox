import { beforeEach, it, describe, expect, vi } from "vitest";
import { graphql } from "@/gql";
import api from "@/lib/api/config/api";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";

describe("GraphQL Internal API Function: Cats", () => {
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

  it("getCats: Should call graphQLQuery and graphQL functions with appropriate arguments", async () => {
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    const mockGraphQLFn = vi.mocked(graphql);
    await getCats();
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", { getDog: false });
    expect(mockGraphQLFn).toHaveBeenLastCalledWith(`
      query GetCats($getDog: Boolean) {
        getCats(getDog: $getDog) {
          url
          width
          height
        }
      }
    `);
  });

  it("getCats: Should call graphQLQuery function with getDog being true", async () => {
    const variableToTest = true;
    const mockGraphQLQueryFn = vi.mocked(api.graphqlQuery);
    await getCats(variableToTest);
    expect(mockGraphQLQueryFn).toHaveBeenLastCalledWith("test", "test", { getDog: variableToTest });
  });
});
