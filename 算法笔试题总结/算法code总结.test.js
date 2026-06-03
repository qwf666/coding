const assert = require('assert/strict');
const { numsLinkLength } = require('./算法code总结.js');

const cases = [
  {
    name: 'empty array',
    input: [],
    expected: 0,
  },
  {
    name: 'sample with unordered values',
    input: [100, 4, 200, 1, 3, 2],
    expected: 4,
  },
  {
    name: 'sample with duplicates',
    input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    expected: 9,
  },
  {
    name: 'longest run appears after a gap',
    input: [1, 2, 10, 11, 12, 13],
    expected: 4,
  },
  {
    name: 'negative values are part of a consecutive run',
    input: [-2, -1, 0, 2],
    expected: 3,
  },
];

cases.forEach(({ name, input, expected }) => {
  assert.equal(numsLinkLength(input), expected, name);
});

const input = [3, 1, 2];
const originalOrder = input.slice();
assert.equal(numsLinkLength(input), 3);
assert.deepEqual(input, originalOrder, 'numsLinkLength should not mutate caller input');

console.log('numsLinkLength tests passed');
