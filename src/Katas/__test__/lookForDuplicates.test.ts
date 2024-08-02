import { findDups } from '../lookForDuplicats';

describe('findDups', () => {
    it('should return an array of duplicates', () => {
        const array1 = ['apple', 'cherry', 'banana'];
        const array2 = ['apple', 'tomato', 'banana'];
        const result = findDups(array1, array2);
        expect(result).toEqual(['apple', 'banana']);
    });

    it('should return an empty array when there are no duplicates', () => {
        const array1 = ['apple', 'cherry', 'banana'];
        const array2 = ['orange', 'tomato', 'grape'];
        const result = findDups(array1, array2);
        expect(result).toEqual([]);
    });

    it('should handle empty arrays', () => {
        const array1: string[] = [];
        const array2 = ['apple', 'tomato', 'banana'];
        const result = findDups(array1, array2);
        expect(result).toEqual([]);
    });

    it('should handle arrays with all duplicates', () => {
        const array1 = ['apple', 'banana', 'cherry'];
        const array2 = ['apple', 'banana', 'cherry'];
        const result = findDups(array1, array2);
        expect(result).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should handle arrays with special characters and spaces', () => {
        const array1 = ['hello world', 'foo bar', 'baz!'];
        const array2 = ['hello world', 'qux', 'baz!'];
        const result = findDups(array1, array2);
        expect(result).toEqual(['hello world', 'baz!']);
    });
});