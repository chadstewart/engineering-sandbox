/**
 * @vitest-environment happy-dom
 */

import ResponsiveComponent from "@/components/particle/responsive-component/responsive-component";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Particle Component: ResponsiveComponent", () => {
  it("Should match the snapshot", () => {
    const {
      container: { firstChild: variableToSnapshot }
    } = render(<ResponsiveComponent children={() => <></>} />);

    expect(variableToSnapshot).toMatchSnapshot();
  });
});
