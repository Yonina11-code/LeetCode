/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  fastSort(nums, 0, nums.length - 1)
  let length: number = nums.length
  return Math.max(nums[0] * nums[1] * nums[length -1], nums[length - 3] * nums[length - 2] * nums[length -1])
};

function fastSort (nums, left, right) {
  let target = nums[left]
  let l = left
  let r = right
  while (l < r) {
    while (l < r && nums[r] >= target) {
      r--
    }
    if (l < r && nums[r] < target) {
      nums[l] = nums[r]
      l++
    }
    while (l < r && nums[l] <= target) {
      l++
    }
    if (l < r && nums[l] > target) {
      nums[r] = nums[l]
      r--
    }
  }
  nums[l] = target
  if (l -left > 0) {
    fastSort(nums, left, l - 1)
  }
  if (right - r > 0) {
    fastSort(nums, r + 1, right)
  }
}
// @lc code=end

