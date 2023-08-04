import { digitize } from "../arrayPractice/reversedArray";

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("digitize", function () {
  it("Sample test", function () {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
    assert.deepEqual(digitize(0), [0]);
  });
});
