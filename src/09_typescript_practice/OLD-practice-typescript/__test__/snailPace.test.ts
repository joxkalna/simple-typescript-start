import cockroachSpeed from '../older-exercise/snailPace'

import chai from 'chai'
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Should return correct calculations', function () {
  // eslint-disable-next-line jest/expect-expect
  it('test for fixed values', () => {
    assert.strictEqual(cockroachSpeed(1.08), 30)
    assert.strictEqual(cockroachSpeed(0), 0)
    assert.strictEqual(cockroachSpeed(0.5299999), 15)
  })
})
