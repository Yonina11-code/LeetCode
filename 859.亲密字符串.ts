/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if (s.length < 2 || goal.length < 2) return false
  if (s === goal) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
      if (obj[i]) {
        return true
      } else {
        obj[i] = 1
      }
    }
    return false
  }
  let i = -1, j = -1, index = 0
  while (goal[index]) {
    if (s[index] !== goal[index])  {
      if (i === -1) {
        i = index
      } else {
        j = index
        let str = goal.substring(0, i) + goal[j] + goal.substring(i+1, j) + goal[i] + (goal.substring(j+1) || '')
        if (str === s) {
          return true
        } else {
          return false
        }
      }
    }
    index++
  }
  return false
};
// @lc code=end

