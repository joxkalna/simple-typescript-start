import { describe, expect, test } from '@jest/globals'
import isAllUpper from '../demo/isAllUpper'

describe('check if string is all upper', () => {
  test('check if UPPER string value returns true', () => {
    expect(isAllUpper('IAMAMAZING')).toBe(true)
  })
  test('check if lower case string value returns false', () => {
    expect(isAllUpper('lowercasescenario')).toBe(false)
  })
})
