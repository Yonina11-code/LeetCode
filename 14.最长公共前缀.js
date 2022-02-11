/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = ''
  for (let i = 0; i < strs[0].length; i++) {
    for (let item = 1; item < strs.length; item++) {
      if (strs[0][i] !== strs[item][i] || i === item.length - 1) {
        return str
      }
    }
    str += strs[0][i]
  }
  return str
};
// @lc code=end

