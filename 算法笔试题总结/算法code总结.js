//1.手写防抖
function debounce(fn, delay = 1000) {
  let time = null
  function _debounce() {
    // 如果time不为0，也就是说有定时器存在，将该定时器清除
    if (time !== null) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn()
    }, delay)
  }
  return _debounce
}
/*
2.  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。  示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
*/
function numsLinkLength(nums) {
  let sortNums = Array.from(new Set(nums.sort((a, b) => a - b)))
  let _arr = [];
  let count = 1;
  sortNums.reduce((pre, cur) => {
    if (cur - pre == 1) {
      count++;
      return cur
    } else {
      _arr.push(count)
      count = 1
    }
  })
  return _arr.length ? _arr.sort((a, b) => b - a)[0] : count;
}

// 3.输出的顺序
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(resolve => {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log('script end')
/* script start; async1 start; async2; promise1; script end; promise2; async1 end; setTimeout */

// 4. 输出的顺序   
const first = () => (new Promise((resolve, reject) => {
  console.log(3);
  let p = new Promise((resolve, reject) => {
    console.log(7);
    setTimeout(() => {
      console.log(5);
      resolve(6);
      console.log(p)
    }, 0)
    resolve(1);
  });
  resolve(2);
  p.then((arg) => {
    console.log(arg);
  });
}));
first().then((arg) => {
  console.log(arg);
});
console.log(4);
/* script start; async1 start; 4; promise2; 1; 2; async1 end; setTimeout; 5; Promise { 1 } */

