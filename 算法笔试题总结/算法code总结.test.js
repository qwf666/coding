const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, '算法code总结.js'), 'utf8');
const context = {
  console: { log() {} },
  setTimeout() { return 0; },
  clearTimeout() {},
  Promise,
};

vm.createContext(context);
vm.runInContext(source, context);

assert.strictEqual(context.numsLinkLength([]), 0);
assert.strictEqual(context.numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.strictEqual(context.numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.strictEqual(context.numsLinkLength([1, 3, 4, 5]), 3);
assert.strictEqual(context.numsLinkLength([-2, -1, 0, 2]), 3);

const nums = [100, 4, 200, 1, 3, 2];
assert.strictEqual(context.numsLinkLength(nums), 4);
assert.deepStrictEqual(nums, [100, 4, 200, 1, 3, 2]);

console.log('numsLinkLength tests passed');
