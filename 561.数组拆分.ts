/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let result: number = 0
  for (let i = 1; i < nums.length; i= i + 2) {
    result += Math.min(nums[i - 1], nums[i])
  }
  return result
};
// @lc code=end

