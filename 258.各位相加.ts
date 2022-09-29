/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */

// @lc code=start
function addDigits(num: number): number {
  let arr: string[] = num.toString().split('')
  let result: number = num
  while (result > 9) {
    result = 0
    arr.forEach(item => {
      result += +item
    })
    arr = result.toString().split('')
  }
  return result

};
// @lc code=end

