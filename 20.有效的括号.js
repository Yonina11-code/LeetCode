/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let copyStr = s
  let result = true
  for (let i = 0; i < copyStr.length; i++) {
    if (/[}|)|]]/.test(copyStr[i])) {
      if (s[i -1] === obj[copyStr[i]]) {
        copyStr = copyStr.slice(i-1, i)
        i = i -1
      } else {
        return false
      }
    }
  }
  return result
};
// @lc code=end

