import zod from "zod";
import api from "@/lib/api/config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const testGraphQLQuery = async () => {
  const requestBody = JSON.stringify({
    operationName: "GetOrders",
    query: `query GetOrders($authorization: String!) {
      getOrders(authorization: $authorization) {
        order_id
      }
    }`,
    variables: {
      authorization: "test"
    }
  });

  const data = api.post(
    zod.object({
      data: zod.object({
        getOrders: zod.object({
          order_id: zod.string()
        }).array()
      })
    }),
    requestBody,
    `http://api-gateway:3000/graphql`,
    CONFIG
  );

  return data; 
};