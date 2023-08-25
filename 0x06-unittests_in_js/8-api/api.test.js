app = require('./api');
const chai = require('chai');
const request = require('request')
const expect = chai.expect;
sinon = require('sinon');


const url = 'http://localhost:7865';

describe('test suite for the index page', function () {
    it('correct status and result when / is hit', function (done) {
        request.get(url, (err, data, body) => {
            expect(data.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
