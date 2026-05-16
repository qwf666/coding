const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, '算法code总结.js'), 'utf8');
const sandbox = {
  console: { log() {} },
  setTimeout() { return 0; },
  clearTimeout() {},
};

vm.createContext(sandbox);
vm.runInContext(`${source}\nthis.__testExports = { numsLinkLength };`, sandbox);

const { numsLinkLength } = sandbox.__testExports;

assert.strictEqual(numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.strictEqual(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.strictEqual(numsLinkLength([1, 2, 5, 6, 7]), 3);
assert.strictEqual(numsLinkLength([]), 0);
assert.strictEqual(numsLinkLength([10]), 1);

console.log('numsLinkLength tests passed');
