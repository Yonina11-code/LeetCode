/*
 * @lc app=leetcode.cn id=520 lang=typescript
 *
 * [520] 检测大写字母
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  let exa: number = 0
  if (word[0].charCodeAt(0) < 97 ) {
    exa = 65 // 大写
  } else {
    exa = 97 // 小写
  }
  for (let i = 1; i < word.length; i++) {
    if (exa === 97) { // 小写
      if (word[i].charCodeAt(0) < 97) {
        return false
      }
    } else {
      if (word[i].charCodeAt(0) >= 97) {
        return false
      }
    }
  }
  return true
};
// @lc code=end

