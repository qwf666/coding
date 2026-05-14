const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadNumsLinkLength() {
  const sourcePath = path.join(__dirname, '算法code总结.js');
  const source = fs.readFileSync(sourcePath, 'utf8');
  const context = {
    console: { log() {} },
    setTimeout() { return 0; },
    clearTimeout() {},
    Promise,
  };

  vm.createContext(context);
  vm.runInContext(source, context);

  return context.numsLinkLength;
}

const numsLinkLength = loadNumsLinkLength();

assert.strictEqual(numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.strictEqual(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.strictEqual(numsLinkLength([1, 2, 4, 5, 6]), 3);
assert.strictEqual(numsLinkLength([]), 0);

const nums = [3, 1, 2];
assert.strictEqual(numsLinkLength(nums), 3);
assert.deepStrictEqual(nums, [3, 1, 2]);

console.log('numsLinkLength tests passed');
