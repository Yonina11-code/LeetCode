/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let str = 0 // 结果
  let flag = 0 // 进位数
  let length = Math.max(a.length, b.length)
  let newA = a.padStart(length, '0')
  let newB = b.padStart(length, '0')
  for (let i = length -1; i >= 0; i--) {
    let result = +newA[i] + +newB[i] + flag
    str = (result % 2) + str + ''
    flag = Math.floor(result / 2)
  }
  if (flag) str = flag + str
  return str
};
// @lc code=end

