const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;
sinon = require('sinon');

describe('getPaymentTokenFromAPI', function () {
  it('tests the use of promises with done() using true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(res => {
        expect(res).to.be.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
  it('test using false', function (done) {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
    done();
  });
});
