import stringSequence from '../OLD-practice-typescript/stringSequence';
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('string sequence', () => {
  it('should change sequence of words from left to right', () => {
    assert.strictEqual(stringSequence('bright aright'), 'bleft aleft');
    assert.strictEqual(
      stringSequence('I am very left today but tomorrow will alright'),
      'I am very right today but tomorrow will alleft',
    );
  });
});
