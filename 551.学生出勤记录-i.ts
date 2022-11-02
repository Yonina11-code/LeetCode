/*
 * @lc app=leetcode.cn id=551 lang=typescript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let aCount: number = 0
  let lCount: number = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      aCount++
      lCount = 0
    } else if (s[i] === 'L') {
      lCount++
    } else {
      lCount = 0
    }
    if (aCount >= 2 || lCount >= 3) {
      return false
    }
  }
  return true
};
// @lc code=end

