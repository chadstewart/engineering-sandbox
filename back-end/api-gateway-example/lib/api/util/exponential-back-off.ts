const MAX_RETRIES = 3;
const BASE_DELAY_IN_MS = 1000;

type exponentialBackOffArgs = [url: URL | RequestInfo, config?: RequestInit];

export const exponentialBackOff =
  (fetchFunc: (...args: exponentialBackOffArgs) => Promise<Response>) =>
  async (...args: exponentialBackOffArgs) => {
    let retries = 0;
    const isUnderMaxRetries = retries < MAX_RETRIES;

    while (isUnderMaxRetries) {
      try {
        const res = await fetchFunc(...args);
        const data = res.json();
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
