import { describe, expect, test } from "@jest/globals";
import isEven from "../demo/isEven";

describe("check if number is even", () => {
  test("even value should return true", () => {
    expect(isEven(2)).toBe(true);
  });
  test("value for odd number should return false", () => {
    expect(isEven(3)).toBe(false);
  });
});
