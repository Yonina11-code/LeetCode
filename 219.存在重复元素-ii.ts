/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map()
  let length: number = nums.length
  for (let i = 0; i < length; i++) {
    if (map.has(nums[i].toString())) {
      return true
    }
    map.set(nums[i].toString(), i)
    if (map.size > k) {
      map.delete(nums[i - k].toString())
    }
  }
  return false
};
// @lc code=end

