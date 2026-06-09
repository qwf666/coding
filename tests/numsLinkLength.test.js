const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync('算法笔试题总结/算法code总结.js', 'utf8');
const context = {
  clearTimeout,
  console: { log() {} },
  Promise,
  setTimeout,
};

vm.createContext(context);
vm.runInContext(source, context);

const cases = [
  { input: [], expected: 0 },
  { input: [100, 4, 200, 1, 3, 2], expected: 4 },
  { input: [1, 2, 4, 5, 6], expected: 3 },
  { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
  { input: [-2, -1, 0, 5], expected: 3 },
];

for (const { input, expected } of cases) {
  assert.strictEqual(
    context.numsLinkLength(input),
    expected,
    `numsLinkLength(${JSON.stringify(input)}) should be ${expected}`,
  );
}

console.log('numsLinkLength tests passed');
