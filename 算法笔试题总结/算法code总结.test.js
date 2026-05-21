const assert = require('assert')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const sourcePath = path.join(__dirname, '算法code总结.js')
const source = fs.readFileSync(sourcePath, 'utf8')
const sandbox = {
  console: {
    log() {},
  },
  setTimeout() {},
  clearTimeout() {},
}

vm.runInNewContext(`${source}\nthis.__numsLinkLength = numsLinkLength`, sandbox, {
  filename: sourcePath,
})

const numsLinkLength = sandbox.__numsLinkLength

assert.strictEqual(numsLinkLength([]), 0)
assert.strictEqual(numsLinkLength([100, 4, 200, 1, 3, 2]), 4)
assert.strictEqual(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9)
assert.strictEqual(numsLinkLength([1, 2, 100, 101, 102]), 3)

const input = [3, 1, 2]
numsLinkLength(input)
assert.deepStrictEqual(input, [3, 1, 2])

console.log('numsLinkLength tests passed')
