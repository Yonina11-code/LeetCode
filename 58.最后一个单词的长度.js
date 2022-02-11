/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 使用正则的办法
  // let str = s.replace(/\s/g, ' ').replace(/\s+$/, '').split(' ')
  // return str[str.length - 1].length
  let num = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      while (i >= 0) {
        if (s[i] !== ' ') {
          num++
          i--
        } else {
          return num
        }
      }
    }
  }
  return num
};
// @lc code=end

