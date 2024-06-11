import { Mock, afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import api from "../../../../lib/api/config/api";
import zod from "zod";
import request from "graphql-request";
import { graphql } from "@/gql";

const testDataSchema = zod.object({
  test: zod.string()
});

describe("API Layer Config", () => {
  beforeEach(() => {
    vi.mock("zod-fetch", () => {
      return {
        createZodFetcher:
          (fetchFunc: (...args: unknown[]) => unknown) =>
          (schema: unknown, ...args: unknown[]) => {
            schema;
            return fetchFunc(...args);
          }
      };
    });

    vi.mock("graphql-request", () => {
      return {
        default: vi.fn(() => "test")
      };
    });

    global.fetch = vi.fn(() => Promise.resolve({ test: "test", json: vi.fn() })) as Mock;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Get function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.get(testDataSchema, "test");
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Get function should call global fetch function with 'test' and method: 'GET' params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.get(testDataSchema, "test");
    expect(spy).toHaveBeenLastCalledWith("test", { method: "GET" });
  });

  it("Post function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await await api.post(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Post function should call global fetch function with 'test', method: 'POST' and a body params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.post(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenCalledWith("test", { method: "POST", body: JSON.stringify({ test: "test" }) });
  });

  it("Put function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.put(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Put function should call global fetch function with 'test', method: 'PUT' and a body params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.put(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenLastCalledWith("test", { method: "PUT", body: JSON.stringify({ test: "test" }) });
  });

  it("Patch function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.patch(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Patch function should call global fetch function with 'test', method: 'PATCH' and a body params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.patch(testDataSchema, "test", { test: "test" });
    expect(spy).toHaveBeenLastCalledWith("test", { method: "PATCH", body: JSON.stringify({ test: "test" }) });
  });

  it("Delete function should call global fetch function", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.delete(testDataSchema, "test");
    expect(spy).toHaveBeenCalledOnce();
  });

  it("Delete function should call global fetch function with 'test' and method: 'DELETE' params", async () => {
    const spy = vi.spyOn(global, "fetch");
    await api.delete(testDataSchema, "test");
    expect(spy).toHaveBeenLastCalledWith("test", { method: "DELETE" });
  });

  it("GraphQlRequest function should call request function from graphql-request", async () => {
    const testRequestBody = {
      query: graphql(/* GraphQL */ `
        query test() {
          getCats() {
            url
            width
            height
          }
        }
      `)
    };
    const mockGraphQLRequestFn = vi.mocked(request);
    // @ts-expect-error: Don't care about the types here
    await api.graphqlQuery("test", testRequestBody.query);
    expect(mockGraphQLRequestFn).toHaveBeenCalledOnce();
  });
});
