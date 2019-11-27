/**
 * @file :test.js
 * @module :mocha testing
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./testing');
 
let assert = require('assert');
describe ('power of two',function(){

    it('should print the power of two',function(){
        assert.equal(access.powerof(1),2)
    })
});


