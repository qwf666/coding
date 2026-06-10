const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const codePath = path.join(__dirname, '算法code总结.js');
const context = {
  console: { log() {} },
  Promise,
  setTimeout() {},
};

vm.runInNewContext(fs.readFileSync(codePath, 'utf8'), context);

assert.strictEqual(context.numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.strictEqual(context.numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.strictEqual(context.numsLinkLength([1, 2, 10, 11, 12]), 3);
assert.strictEqual(context.numsLinkLength([]), 0);

const nums = [3, 1, 2];
assert.strictEqual(context.numsLinkLength(nums), 3);
assert.deepStrictEqual(nums, [3, 1, 2]);

console.log('numsLinkLength tests passed');
