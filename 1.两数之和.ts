/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i: number = 0; i < nums.length; i++) {
    let next = nums.indexOf(target - nums[i], i + 1)
    if (~next) {
      return [i, next]
    }
  }
};
// @lc code=end

