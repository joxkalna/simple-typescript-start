import smallestNumInArray from '../../../OLD-practice-typescript/older-exercise/smallestNumberInArray'

const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Smallest Integer Tests', () => {
  it('Should return the smallest integegar in the array, 8', () => {
    assert.strictEqual(smallestNumInArray([78, 56, 232, 12, 8, 88]), 8)
  })
  it('Should return the smallest integegar in the array, 12', () => {
    assert.strictEqual(smallestNumInArray([78, 56, 232, 12, 18]), 12)
  })
  it('Should return the smallest integegar in the array, 0', () => {
    assert.strictEqual(smallestNumInArray([78, 56, 232, 12, 0]), 0)
  })
  it('Should return the smallest integegar in the array, 1', () => {
    assert.strictEqual(smallestNumInArray([1, 56, 232, 12, 8]), 1)
  })
  it('Should return the smallest integegar in the array, -3', () => {
    assert.strictEqual(smallestNumInArray([12, 56, 232, 21, 8, -3]), -3)
  })
})
