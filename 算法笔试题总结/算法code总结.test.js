const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const code = fs.readFileSync(path.join(__dirname, '算法code总结.js'), 'utf8');
const sandbox = {
  console: { log() {} },
  clearTimeout() {},
  setTimeout() {
    return 1;
  },
  Promise,
};

vm.runInNewContext(code, sandbox);

[
  { input: [100, 4, 200, 1, 3, 2], expected: 4 },
  { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
  { input: [1, 2, 5, 6, 7], expected: 3 },
  { input: [1, 2, 4, 5, 6, 10, 11, 12, 13], expected: 4 },
  { input: [], expected: 0 },
].forEach(({ input, expected }) => {
  assert.strictEqual(sandbox.numsLinkLength(input), expected);
});
