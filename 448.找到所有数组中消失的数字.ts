/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = []
  let length: number = nums.length
  for (let i = 1; i <= length; i++) {
    if (!nums.includes(i)) {
      result.push(i)
    }
  }
  return result
};
// @lc code=end

