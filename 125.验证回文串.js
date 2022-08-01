/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let ss = s.toLowerCase()
  ss = ss.replace(/\W|_+/g, '')
  let halfS = ss.substring(0, Math.ceil(ss.length / 2)).split('').reverse().join('')
  // console.log('ss',ss, halfS, ss.substring(ss.length/ 2))
  if (halfS === ss.substring(ss.length/ 2)) {
    return true
  } else {
    return false
  }
};
// isPalindrome("ab_a")
// @lc code=end

