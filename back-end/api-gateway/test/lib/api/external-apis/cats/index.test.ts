import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { getCats } from "../../../../../lib/api/external-apis/cats";
import api from "../../../../../lib/api/config/api";

describe("External API Function: Cat API", () => {
  beforeEach(() => {
    vi.mock("../../../../../lib/api/config/api", () => {
      return {
        default: {
          get: () =>
            Promise.resolve([
              {
                id: "test",
                width: 1,
                height: 1,
                url: "test"
              }
            ])
        }
      };
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Return data in it's proper shape", async () => {
    const apiData = await getCats();

    expectTypeOf(apiData).toEqualTypeOf([
      {
        id: "test",
        width: 1,
        height: 1,
        url: "test"
      }
    ]);
  });

  it("Should use the cat api url when no arguments are passed or the getDog boolean is set to false", async () => {
    const apiSpy = vi.spyOn(api, "get");
    await getCats();

    expect(apiSpy.mock.calls[0].includes("https://api.thecatapi.com/v1/images/search?limit=10")).toBeTruthy();

    await getCats(false);

    expect(apiSpy.mock.calls[1].includes("https://api.thecatapi.com/v1/images/search?limit=10")).toBeTruthy();
  });

  it("Should use the dog api url when the getDog boolean is set to true", async () => {
    const apiSpy = vi.spyOn(api, "get");
    await getCats(true);

    expect(apiSpy.mock.calls[0].includes("https://api.thedogapi.com/v1/images/search?limit=10")).toBeTruthy();
  });
});
