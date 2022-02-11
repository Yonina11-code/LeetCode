/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let array = x.toString().split('')
  let reverseArray = []
  array.forEach(item => {
    reverseArray.unshift(item)
  })
  if (array.join('') === reverseArray.join('')) {
    return true
  } else {
    return false
  }
};
// @lc code=end

