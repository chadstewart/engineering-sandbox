import { createZodFetcher } from "zod-fetch";

const api = {
  get: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "GET",
    ...config
  })),
  post: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "POST",
    body,
    ...config
  })),
  put: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PUT",
    body,
    ...config
  })),
  patch: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PATCH",
    body,
    ...config
  })),
  delete: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "DELETE",
    ...config
  }))
};

export default api;