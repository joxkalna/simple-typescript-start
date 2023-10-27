import { describe, expect, test } from '@jest/globals';
import findLongestWord from '../longestWordInSentence';

describe('should return the longest word in a sentence', () => {
  test('should return sister as the longest word', () => {
    expect(findLongestWord('I am your sister')).toBe('sister');
  });
  test('should return glee as the longest word', () => {
    expect(findLongestWord('I am glee')).toBe('glee');
  });
});
