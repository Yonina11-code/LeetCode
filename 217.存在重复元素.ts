/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 2) return false
  let index: number = 0
  while(index < nums.length) {
    let result = nums.filter((item, i) => i > index && item === nums[index])
    if (~result) {
      return true
    } else {
      index++
    }
  }
};
// @lc code=end

