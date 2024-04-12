import { Mock, afterEach, describe, expect, it, vi } from "vitest";
import { exponentialBackOff } from "../../../../lib/api/util/exponential-back-off";

describe("Exponential Backoff function", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Mocked fetch function gets called and properly returns data.", async () => {
    global.fetch = vi.fn(() => Promise.resolve({ test: "test", json: vi.fn(() => 1) })) as Mock;
    const spy = vi.spyOn(global, "fetch");
    const resultToTest = await exponentialBackOff(fetch)("test");
    expect(spy).toHaveBeenCalledOnce();
    expect(resultToTest).toEqual(1);
  });

  it("Mocked fetch function should be called twice and return data because it should failed once", async () => {
    let count = 0;
    let timeTaken = 0;
    const mockFetchResponse = () => {
      if (count === 0) {
        count++;
        timeTaken = performance.now();
        return Promise.reject({ test: "test", json: vi.fn() });
      }
      if (count > 0) {
        count++;
        timeTaken = performance.now();
        return Promise.resolve({ test: "test", json: vi.fn(() => 1) });
      }
    };

    global.fetch = vi.fn(mockFetchResponse) as Mock;
    const spy = vi.spyOn(global, "fetch");
    const resultToTest = await exponentialBackOff(fetch)("test");

    expect(spy).toHaveBeenCalledTimes(2);
    expect(timeTaken).toBeGreaterThan(1900);
    expect(resultToTest).toEqual(1);
  });

  it("Exponential back off function should return an error message after timing out 3 times", async () => {
    const mockFetchResponse = () => Promise.reject(() => {});

    global.fetch = vi.fn(mockFetchResponse) as Mock;
    const spy = vi.spyOn(global, "fetch");

    try {
      await exponentialBackOff(fetch)("test");
    } catch (error) {
      expect(spy).toHaveBeenCalledTimes(3);
    }
  });
}, 7000);
