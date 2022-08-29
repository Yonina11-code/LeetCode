/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let one: string = strs[0]
  while (one) {
    let flag: boolean = strs.every(item => item.indexOf(one) !== -1)
    if (flag) {
      return one
    } else {
      one = one.substring(0, one.length - 1)
    }
  }
  return one
};
// @lc code=end

