import { createZodFetcher } from "zod-fetch";
import { exponentialBackOff } from "../util/exponential-back-off";

const api = {
  get: createZodFetcher((url: string | URL | Request, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "GET",
      ...config
    })
  ),
  post: createZodFetcher((url: string | URL | Request, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...config
    })
  ),
  put: createZodFetcher((url: string | URL | Request, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "PUT",
      body: JSON.stringify(body),
      ...config
    })
  ),
  patch: createZodFetcher((url: string | URL | Request, body: unknown, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...config
    })
  ),
  delete: createZodFetcher((url: string | URL | Request, config: RequestInit = {}) =>
    exponentialBackOff(fetch)(url, {
      method: "DELETE",
      ...config
    })
  )
};

export default api;
