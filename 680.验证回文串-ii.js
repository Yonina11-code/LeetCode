/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (isPalindrome(s)) return true
  let left = 0
  let right = s.length - 1
  while(left <= right) {
    if (s[left] !== s[right]) {
      if (left === 0) {
        if (isPalindrome(s.substring(left + 1))) {
          return true
        }
      }
      if (right === s.length - 1) {
        if (isPalindrome(s.substring(0, right))) {
          return true
        }
      } else if (isPalindrome(s.substring(0, left) + s.substring(left + 1, right) + s.substring(right))) { // 删 left
        return true
      } else if (isPalindrome(s.substring(0, left) + s.substring(left, right) + s.substring(right + 1))) { // 删right
        return true
      } else {
        return false
      }
    }
    left++
    right--
  }
  return false
};
function isPalindrome (s) {
  let left = s.substring(0, Math.ceil(s.length / 2))
  let right = s.substring(Math.floor(s.length / 2)).split('').reverse().join('')
  console.log(s, left, right)
  return left === right
}
// @lc code=end

