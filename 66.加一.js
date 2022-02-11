/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let str = ''
  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      str = (digits[i] + 1) % 10 + str
      carry =Math.floor((digits[i] + 1) / 10) // 相加大于9的位数
    } else {
      str = (digits[i] + carry) % 10 + str
      carry = Math.floor((digits[i] + carry) / 10) // 相加大于9的位数
    }
  }
  if (carry) {
    str = carry + str
  }
  return str.split('')
};

// @lc code=end

