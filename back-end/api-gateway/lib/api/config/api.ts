import { createZodFetcher } from "zod-fetch";
import { exponentialBackOff } from "../util/exponential-back-off";

const api = {
  get: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "GET",
      ...config
    })
  ),
  post: createZodFetcher((url: URL | RequestInfo, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...config
    })
  ),
  put: createZodFetcher((url: URL | RequestInfo, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "PUT",
      body: JSON.stringify(body),
      ...config
    })
  ),
  patch: createZodFetcher((url: URL | RequestInfo, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...config
    })
  ),
  delete: createZodFetcher((url: URL | RequestInfo, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "DELETE",
      ...config
    })
  )
};

export default api;
