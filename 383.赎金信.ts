/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    let item = ransomNote[i]
    let index = magazine.indexOf(item)
    if (index === -1) {
      return false
    } else {
      let temp: string[] = magazine.split('')
      temp.splice(index, 1)
      magazine = temp.join('')
    }
  }
  return true
};
// @lc code=end

