import { whichAreIn } from '../which-are-in';

describe('whichAreIn', () => {
    it('returns correct substrings for given example', () => {
        const arr1 = ["xyz", "live", "strong"];
        const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        expect(whichAreIn(arr1, arr2)).toEqual(["live", "strong"]);
    });

    it('returns empty array when no substrings match', () => {
        const arr1 = ["tarp", "mice", "bull"];
        const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        expect(whichAreIn(arr1, arr2)).toEqual([]);
    });

    it('handles empty input arrays', () => {
        expect(whichAreIn([], ["lively", "alive"])).toEqual([]);
        expect(whichAreIn(["live"], [])).toEqual([]);
        expect(whichAreIn([], [])).toEqual([]);
    });

    it('returns results in alphabetical order', () => {
        const arr1 = ["strong", "live", "arp"];
        const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        expect(whichAreIn(arr1, arr2)).toEqual(["arp", "live", "strong"]);
    });

    it('handles case sensitivity correctly', () => {
        const arr1 = ["Live", "STRONG", "arp"];
        const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        expect(whichAreIn(arr1, arr2)).toEqual(["arp"]);
    });

    it('handles substrings at the beginning, middle, and end', () => {
        const arr1 = ["sharp", "ar", "ly"];
        const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        expect(whichAreIn(arr1, arr2)).toEqual(["ar", "ly", "sharp"]);
    });
});