import { createZodFetcher } from "zod-fetch";

const api = {
  get: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "GET",
    ...config
  })
  .then(res => res.json())
  ),
  post: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "POST",
    body,
    ...config
  })
  .then(res => res.json())
  ),
  put: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PUT",
    body,
    ...config
  })
  .then(res => res.json())
  ),
  patch: createZodFetcher((url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PATCH",
    body,
    ...config
  })
  .then(res => res.json())
  ),
  delete: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "DELETE",
    ...config
  })
  .then(res => res.json())
  )
};

export default api;