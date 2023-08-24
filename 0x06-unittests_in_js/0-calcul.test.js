const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
    it('should return correct numbers when both are whole numbers', function() {
        assert.equal(calculateNumber(2, 2), 4);
    });
    
    it('when both are fractions', function () {
        assert.equal(calculateNumber(4.5, 4.4), 9)
        assert.notEqual(calculateNumber(4.4, 4.4), 9);
    });
    it('when negative number are supplied', function() {
        assert.notEqual(calculateNumber(-4.5, -4.4), 9);
        assert.equal(calculateNumber(-4.5, -4.4), -8);
    });
    it('when args are not numbers', function() {
        assert.equal(calculateNumber(null, null), 0);
        assert.equal(calculateNumber(true, true), 2);
    });
});
