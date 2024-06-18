/**
 * @vitest-environment jsdom
 */

import { updateTitle } from "@/lib/util/update-title";
import { describe } from "node:test";
import { expect, it } from "vitest";

describe("Utility Function: UpdateTitle", () => {
  it("Should update the title", () => {
    const testTitle = "Test";
    updateTitle(testTitle);
    expect(document.title).toStrictEqual(`The Engineering Sandbox | ${testTitle}`);
  });
});
