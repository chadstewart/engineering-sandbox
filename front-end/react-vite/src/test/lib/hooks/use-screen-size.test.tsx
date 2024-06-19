/**
 * @vitest-environment happy-dom
 */

import { useScreenSize } from "@/lib/hooks/use-screen-size";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Utility React Hook: UseScreenSize", () => {
  it("Should return a screen size", () => {
    const {
      result: { current }
    } = renderHook(useScreenSize);
    expect(current).toBe(1024);
  });

  it("Should return the current screen size when the window is resized", async () => {
    const { rerender, result } = renderHook(useScreenSize);
    expect(result.current).toBe(1024);

    act(() => {
      //@ts-expect-error Need to figure out how to get happyDOM types to get rid of squiggly
      window.happyDOM.setInnerWidth(500);
    });

    await rerender();

    expect(result.current).toBe(500);
  });
});
