const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
    spy = sinon.spy(Utils, "calculateNumber");
    it('spy on the Util.calculateNumber', function() {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    });
});
