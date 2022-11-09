/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  let num: number[] = [...new Set(nums)].sort((a,b) => b - a)
  let length: number = num.length
  if (length < 3) {
    return num[0]
  } else {
    return num[2]
  }
};
// @lc code=end

