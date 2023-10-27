const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

import areYouPlayingBanjo from '../../../OLD-practice-typescript/older-exercise/playingBanjo';

describe('Playing Banjo', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(areYouPlayingBanjo('Adam'), 'Adam does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('Paul'), 'Paul does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('Ringo'), 'Ringo plays banjo');
    assert.strictEqual(
      areYouPlayingBanjo('bravo'),
      'bravo does not play banjo',
    );
    assert.strictEqual(areYouPlayingBanjo('rolf'), 'rolf plays banjo');
  });
});
