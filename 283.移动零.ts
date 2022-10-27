/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroIndex: number = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroIndex += 1
      i--
    }
  }
  for (let i = 0; i < zeroIndex; i++) {
    nums.push(0)
  }
  // return nums
};
// @lc code=end

