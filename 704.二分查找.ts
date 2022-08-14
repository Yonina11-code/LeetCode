/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  if (!nums.length) return -1
  let left: number = 0
  let right: number = nums.length - 1
  let mid : number = Math.floor(nums.length / 2)
  while (left <= right) {
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
      mid = left + Math.floor((right - mid) / 2 )
    } else if (nums[mid] > target) {
      right = mid - 1
      mid = right - Math.floor((mid - left) / 2)
    }
  }
  return -1
};
// @lc code=end

