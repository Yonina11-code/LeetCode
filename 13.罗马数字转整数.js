/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const romannum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let arr = []
  let num = 0
  for (let i of s) {
    arr.push(romannum[i])
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr[i] === 5 || arr[i] === 10) && arr[i-1] === 1) {
      num += arr[i] - arr[i-1]
      --i
      continue
    }
    if ((arr[i] === 50 || arr[i] === 100) && arr[i-1] === 10) {
      num += arr[i] - arr[i-1]
      --i
      continue
    }
    if ((arr[i] === 500 || arr[i] === 1000) && arr[i-1] === 100) {
      num += arr[i] - arr[i-1]
      --i
      continue
    }
    num += arr[i]
  }
  return num
};
// @lc code=end

