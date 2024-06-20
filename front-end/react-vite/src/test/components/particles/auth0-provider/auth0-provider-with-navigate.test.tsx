/**
 * @vitest-environment happy-dom
 */

import { Auth0ProviderWithNavigate } from "@/components/particle/auth0-provider/auth0-provider-with-navigate";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Particle Component: Auth0ProviderWithNavigate", () => {
  import.meta.env.VITE_AUTH0_URL = "test";
  import.meta.env.VITE_AUTH0_CLIENT_ID = "test";
  import.meta.env.VITE_AUTH0_CALLBACK_URL = "test";
  import.meta.env.VITE_AUTH0_AUDIENCE = "test";

  it("Should match the snapshot", () => {
    const {
      result: { current: variableToSnapshot }
    } = renderHook(() => Auth0ProviderWithNavigate({ children: <div></div> }));

    expect(variableToSnapshot).toMatchSnapshot();
  });
});
