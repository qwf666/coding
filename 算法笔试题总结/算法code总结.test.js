const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');
const vm = require('node:vm');

function loadAlgorithms() {
  const code = fs.readFileSync(require.resolve('./算法code总结.js'), 'utf8');
  const context = {
    clearTimeout,
    console: { log() {} },
    Promise,
    setTimeout,
  };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context;
}

test('numsLinkLength returns the longest consecutive run', () => {
  const { numsLinkLength } = loadAlgorithms();

  assert.equal(numsLinkLength([100, 4, 200, 1, 3, 2]), 4);
  assert.equal(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
});

test('numsLinkLength handles gaps, duplicates, and empty input', () => {
  const { numsLinkLength } = loadAlgorithms();

  assert.equal(numsLinkLength([1, 3, 4, 5]), 3);
  assert.equal(numsLinkLength([10, 11, 1, 2, 3]), 3);
  assert.equal(numsLinkLength([2, 2, 3, 4]), 3);
  assert.equal(numsLinkLength([]), 0);
});
