app = require('./api');
const chai = require('chai');
const request = require('request');
const expect = chai.expect;
sinon = require('sinon');

const url = 'http://localhost:7865/cart/';

describe('test suite for the cart endpoint with id', function () {
  it('correct status and result when /cart/:id is hit with a number', function (done) {
    const id = 12;
    request.get(url + id, (err, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${id}\n`);
      done();
    });
  });

  it('correct status and result when /cart/:id is hit with other than a number', function (done) {
    const id = 'hello';
    request.get(url + id, (err, resp, body) => {
      expect(resp.statusCode).to.equal(404);
      expect(body).to.not.equal(`Payment methods for cart ${id}\n`);
      done();
    });
  });
});
