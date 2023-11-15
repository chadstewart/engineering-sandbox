import zod from "zod";
import api from "@/lib/api/config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const testGraphQLQuery = async () => {
  const requestBody = {
    operationName: "GetOrders",
    query: `query GetOrders($authorization: String!) {
      getOrders(authorization: $authorization) {
        order_id
      }
    }`,
    variables: {
      authorization: "test"
    }
  };

  const data = api.post(
    zod.object({
      data: zod.object({
        getOrders: zod.object({
          order_id: zod.string()
        }).array()
      })
    }),
    `http://172.20.0.3:3000/graphql`,
    requestBody,
    CONFIG
  );

  return data; 
};