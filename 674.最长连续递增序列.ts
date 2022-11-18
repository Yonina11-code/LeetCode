/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  if (nums.length < 2) return nums.length
  let result: number = 0
  let left = 0, right = 0
  while (right < nums.length - 1) {
    if (nums[right] < nums[right + 1]) {
      right++
    } else {
      result = Math.max(result, right - left + 1)
      right++
      left = right
    }
  }
  return result = Math.max(result, right - left + 1)
};
// @lc code=end

