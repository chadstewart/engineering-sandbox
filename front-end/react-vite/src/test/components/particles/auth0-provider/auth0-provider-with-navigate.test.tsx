/**
 * @vitest-environment happy-dom
 */

import { Auth0ProviderWithNavigate } from "@/components/particle/auth0-provider/auth0-provider-with-navigate";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Particle Component: Auth0ProviderWithNavigate", () => {
  it("Should match the snapshot", () => {
    const {
      container: { firstChild: variableToSnapshot }
    } = render(<Auth0ProviderWithNavigate children={<div></div>} />);

    expect(variableToSnapshot).toMatchSnapshot();
  });
});
