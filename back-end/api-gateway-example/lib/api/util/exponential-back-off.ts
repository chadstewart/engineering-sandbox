const MAX_RETRIES = 3;
const BASE_DELAY_IN_MS = 1000;
const TIMEOUT_IN_MS = 8000;

type apiFuncType = typeof fetch;

export const exponentialBackOff =
  (fetchFunc: apiFuncType) =>
  async (...args: Parameters<apiFuncType>) => {
    let retries = 0;

    const controller = new AbortController();

    while (retries < MAX_RETRIES) {
      try {
        const timeoutID = setTimeout(() => {
          controller.abort("API call timed out.");
        }, TIMEOUT_IN_MS);
        const res = await fetchFunc(args[0], {
          signal: controller.signal,
          ...args[1]
        });
        const data = res.json();

        clearTimeout(timeoutID);
        return data;
      } catch (error) {
        console.error(`Error calling API`);
        retries++;

        if (retries < MAX_RETRIES) {
          const delay = BASE_DELAY_IN_MS * Math.pow(2, retries);
          console.log(`Retrying API after ${delay} ms`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        console.error(`Max retries reached.`);
        throw error;
      }
    }
  };
