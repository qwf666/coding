const test = require('node:test');
const assert = require('node:assert/strict');

const { numsLinkLength } = require('./算法code总结');

test('numsLinkLength returns 0 for an empty array', () => {
  assert.equal(numsLinkLength([]), 0);
});

test('numsLinkLength handles duplicate values', () => {
  assert.equal(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
});

test('numsLinkLength counts a longest run after an earlier gap', () => {
  assert.equal(numsLinkLength([1, 2, 5, 6, 7]), 3);
});

test('numsLinkLength does not mutate the input array', () => {
  const nums = [100, 4, 200, 1, 3, 2];

  assert.equal(numsLinkLength(nums), 4);
  assert.deepEqual(nums, [100, 4, 200, 1, 3, 2]);
});
