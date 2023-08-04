import { describe, expect, test } from "@jest/globals";
import multTwo from "../demo/multiply";

describe("multiply values", () => {
  test("times 3 and 2 to equal 6", () => {
    expect(multTwo(3, 2)).toBe(6);
  });

  test("times 1 and 0 to equal 0", () => {
    expect(multTwo(1, 0)).toBe(0);
  });
});
