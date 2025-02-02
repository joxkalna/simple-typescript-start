import { describe, expect, test } from '@jest/globals'
import numberLength from '../demo/numberLength'
describe('verify number values', () => {
  test('should return a two', () => {
    expect(numberLength(55)).toBe(2)
  })
  test('should return a single value', () => {
    expect(numberLength(5)).toBe(1)
  })
})
