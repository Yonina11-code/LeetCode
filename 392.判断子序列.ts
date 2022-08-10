/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false
  let index : number = -1
  for(let i : number = 0; i < s.length; i++) {
    index = t.indexOf(s[i], index + 1)
    if (index === -1) return false
  }
  return true

};
// @lc code=end

