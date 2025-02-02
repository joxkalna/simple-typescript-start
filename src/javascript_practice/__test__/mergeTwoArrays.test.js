import { mergeArrays } from '../mergeTwoArrays'

let arr1 = [9, 10, 11, 12]
let arr2 = ['a', 'b']
let arr3 = [1, 2]
let arr4 = [] //don't do anything
let arr5 = [true, false]
let arr6 = ['a', 'b']

describe('Merge Two Arrays Kata', () => {
  it('should return an array', () => {
    expect(Array.isArray(mergeArrays(arr1, arr2))).toBe(true)
  })
  it('should handle empty array', () => {
    expect(mergeArrays(arr1, arr4)).toEqual([9, 10, 11, 12])
  })
  it('should return an array with mix of string and numbers', () => {
    expect(mergeArrays(arr2, arr3)).toEqual(['a', 'b', 1, 2])
  })
  it('should return an array with mix of string and boolean', () => {
    expect(mergeArrays(arr2, arr5)).toEqual(['a', 'b', true, false])
  })
  it('should return an array with mix of string and boolean2', () => {
    expect(mergeArrays(arr2, arr5)).toEqual(['a', 'b', true, false])
  })
  it('should not duplicate array if values are the same', () => {
    expect(mergeArrays(arr2, arr6)).toEqual(['a', 'b'])
  })

  /* Extend the tests to give you sufficient test coverage to know your
     solution works as expected.
    */
})
