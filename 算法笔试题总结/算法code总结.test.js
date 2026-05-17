const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const sourcePath = path.join(__dirname, '算法code总结.js');
const code = fs.readFileSync(sourcePath, 'utf8');

const sandbox = {
  console: { log() {} },
  setTimeout() {
    return 0;
  },
  clearTimeout() {},
};

vm.createContext(sandbox);
vm.runInContext(code, sandbox, { filename: sourcePath });

assert.equal(typeof sandbox.numsLinkLength, 'function');
assert.equal(sandbox.numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
assert.equal(sandbox.numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.equal(sandbox.numsLinkLength([1, 2, 4, 5, 6]), 3);
assert.equal(sandbox.numsLinkLength([]), 0);
assert.equal(sandbox.numsLinkLength([2, 2, 2]), 1);

console.log('numsLinkLength tests passed');
