/**
 * @vitest-environment happy-dom
 */

import useMainNav from "@/lib/hooks/use-main-nav";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Utility Function Hook: UseMainNav", () => {
  it("Matches the snapshot of useMainNav", () => {
    const {
      result: { current: variableToSnapshot }
    } = renderHook(useMainNav);

    expect(variableToSnapshot).toMatchSnapshot();
  });
});
