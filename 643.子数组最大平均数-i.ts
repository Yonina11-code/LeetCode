/*
 * @lc app=leetcode.cn id=643 lang=typescript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
function findMaxAverage(nums, k) {
  let temp = nums.slice(0, k).reduce((pre, item) => pre + item)
  let result  = temp
  for (let i = k; i < nums.length; i++) {
    temp = temp - nums[i - k] + nums[i]
    result = Math.max(result, temp)
  }
  return result / k
}
// @lc code=end

