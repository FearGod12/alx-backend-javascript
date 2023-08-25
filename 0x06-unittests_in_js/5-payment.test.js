const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spy.restore();
  });

  it('sendPaymentRequestToAPI with 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToAPI with 10, and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
