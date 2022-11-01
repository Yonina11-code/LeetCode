/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  if (s.length < 2) return false
  for (let i = 0; i < s.length / 2; i++) {
    let temp: string = s.substring(0, i+1)
    // console.log('temp', temp)
    let count: number = s.length / temp.length
    // console.log('temp.repeat(count)', count)
    if (temp.repeat(count) === s) {
      return true
    }
  }
  return false
};
// @lc code=end

