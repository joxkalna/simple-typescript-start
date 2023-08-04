import { describe, expect, test } from "@jest/globals";
import firstWord from "../older-exercise/firstWord";

describe("check if the word returns the first stirng only", () => {
  test("check if first string of letters is returned", () => {
    expect(firstWord("I AM AMAZING")).toBe("I");
  });
});
