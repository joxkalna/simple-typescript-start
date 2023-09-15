import { count } from 'console';
import countDigits from '../practice-typescript/countDigits';

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Count how many digits in a string', () => {
  it('should count digits', () => {
    assert.strictEqual(countDigits('hi1'), 1);
    assert.strictEqual(countDigits('hi123'), 3);
    assert.strictEqual(countDigits('hi123h2'), 4);
    assert.strictEqual(
      countDigits(
        'This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year',
      ),
      8,
    );
    assert.strictEqual(countDigits('hihi'), 0);
  });
});
