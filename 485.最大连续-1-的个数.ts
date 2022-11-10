/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let result: number = 0
  let i: number = 0
  while (i < nums.length) {
    let count: number = 0
    while (nums[i]) {
      count++
      i++
    }
    if (count) {
      result = Math.max(result, count)
      count = 0
    }
    i++
  }
  return result
};
// @lc code=end

