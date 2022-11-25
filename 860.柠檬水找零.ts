/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  let five = 0, ten = 0
  for (let item of bills) {
    if (item === 5) {
      five++
    } else if (item === 10) {
      if (!five) {
        return false
      } else {
        five--
        ten++
      }
    } else if (item === 20) {
      if (!five) {
        return false
      } else if (ten) {
        ten--
        five--
      } else  if (five >= 3) {
        five = five - 3
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

