const chai = require('chai');
const calculateNumber = require('./1-calcul');

const expect = chai.expect;

describe('calculateNumber', function () {
    it('when type is "SUM"', function () {
        expect(calculateNumber('SUM', 2, 4)).to.equal(6)
    });
    it('when type is "SUBTRACT"', function () {
        expect(calculateNumber('SUBTRACT', 4, 3)).to.equal(1)
    });
    it('when type is "DIVIDE"', function () {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2)
        expect(calculateNumber('DIVIDE', 4, 0.3)).to.equal('Error');
    });
});
