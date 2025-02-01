import cockroachSpeed from '../../../OLD-practice-typescript/older-exercise/snailPace'

const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Should return correct calculations', function () {
  it('test for fixed values', () => {
    assert.strictEqual(cockroachSpeed(1.08), 30)
    assert.strictEqual(cockroachSpeed(0), 0)
    assert.strictEqual(cockroachSpeed(0.5299999), 15)
  })
})
