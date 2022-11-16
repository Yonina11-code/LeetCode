/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  popoSort(nums)
  let length: number = nums.length
  return Math.max(nums[0] * nums[1] * nums[length -1], nums[length - 3] * nums[length - 2] * nums[length -1])
};

function popoSort (nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
}
// @lc code=end

