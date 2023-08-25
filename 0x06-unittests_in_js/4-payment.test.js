const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  it('stub the Util.calculateNumber', function () {
    stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    stub.restore();
    spy.restore();
  });
});
