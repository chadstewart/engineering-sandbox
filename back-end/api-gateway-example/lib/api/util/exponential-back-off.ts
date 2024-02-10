const MAX_RETRIES = 3;
const BASE_DELAY_IN_MS = 1000;
const TIMEOUT_IN_MS = 8000;

type fetchApiArgs = [url: URL | RequestInfo, config?: RequestInit];

export const exponentialBackOff =
  (fetchFunc: (...args: fetchApiArgs) => Promise<Response>) =>
  async (...args: fetchApiArgs) => {
    let retries = 0;
    const isUnderMaxRetries = retries < MAX_RETRIES;

    const controller = new AbortController();

    while (isUnderMaxRetries) {
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
        console.error(`Error calling API: ${(error as Error).message}`);
        retries++;

        if (isUnderMaxRetries) {
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
