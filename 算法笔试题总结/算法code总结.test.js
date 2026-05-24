const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

function loadAlgorithms() {
  const sourcePath = path.join(__dirname, '算法code总结.js')
  const context = {
    console: { log() {} },
    setTimeout() {
      return 0
    },
    clearTimeout() {},
    Promise,
    module: { exports: {} },
    exports: {},
  }

  vm.createContext(context)
  vm.runInContext(fs.readFileSync(sourcePath, 'utf8'), context, {
    filename: sourcePath,
  })

  return context.module.exports
}

test('numsLinkLength returns the longest consecutive sequence length', () => {
  const { numsLinkLength } = loadAlgorithms()

  assert.equal(numsLinkLength([100, 4, 200, 1, 3, 2]), 4)
  assert.equal(numsLinkLength([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9)
  assert.equal(numsLinkLength([1, 2, 100, 101, 102, 103]), 4)
  assert.equal(numsLinkLength([]), 0)
})

test('numsLinkLength does not mutate the input array', () => {
  const { numsLinkLength } = loadAlgorithms()
  const nums = [4, 1, 3, 2]

  assert.equal(numsLinkLength(nums), 4)
  assert.deepEqual(nums, [4, 1, 3, 2])
})
