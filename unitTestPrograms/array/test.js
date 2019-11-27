/**
 * @file :test.js
 * @module :mocha testing
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});