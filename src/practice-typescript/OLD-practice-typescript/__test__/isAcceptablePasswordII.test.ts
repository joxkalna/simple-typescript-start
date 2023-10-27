import { describe, expect, test } from '@jest/globals';
import isAcceptablePassword from '../../../OLD-practice-typescript/older-exercise/isAcceptablePasswordII';
describe('check if password length has a string and a number', () => {
  test('should return false if password is 5 strings and no numbers', () => {
    expect(isAcceptablePassword('short')).toBe(false);
  });
  test('should return false if password is 10+ long string and no numbers', () => {
    expect(isAcceptablePassword('muchlonger')).toBe(false);
  });
  test('should return false if password is 6 string but no numbers', () => {
    expect(isAcceptablePassword('ashort')).toBe(false);
  });
  test('should return true if password is 6 string AND include a number', () => {
    expect(isAcceptablePassword('muchlonger5')).toBe(true);
  });
  test('should return false if password is less than 6 string AND include a number', () => {
    expect(isAcceptablePassword('sh5')).toBe(false);
  });
});

// assert.strictEqual(isAcceptablePassword("short"), false);
// assert.strictEqual(isAcceptablePassword("muchlonger"), false);
// assert.strictEqual(isAcceptablePassword("ashort"), false);
// assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
// assert.strictEqual(isAcceptablePassword("sh5"), false);
