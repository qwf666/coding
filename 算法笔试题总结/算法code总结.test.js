const assert = require('node:assert/strict');
const { numsLinkLength } = require('./算法code总结');

assert.equal(numsLinkLength([]), 0);
assert.equal(numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.equal(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.equal(numsLinkLength([1, 2, 10, 11, 12]), 3);

const input = [3, 1, 2];
assert.equal(numsLinkLength(input), 3);
assert.deepEqual(input, [3, 1, 2]);

console.log('numsLinkLength tests passed');
