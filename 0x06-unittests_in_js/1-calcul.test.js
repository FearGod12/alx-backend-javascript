const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('when type is "SUM"', function () {
        assert.equal(calculateNumber('SUM', 2, 4), 6)
    });
    it('when type is "SUBTRACT"', function () {
        assert.equal(calculateNumber('SUBTRACT', 4, 3), 1);
    });
    it('when type is "DIVIDE"', function () {
        assert.equal(calculateNumber('DIVIDE', 4, 2), 2)
        assert.equal(calculateNumber('DIVIDE', 4, 0.3), 'Error');
    });
});
