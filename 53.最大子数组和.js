/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  var maxSubArray = function(nums) {
//   let addArr = [] // 相加结果
//   let length = nums.length
//   let addResult = 0 // 前一个元素的和
//   for (let j = 0; j < length; j++) {
//     addArr.push(nums[j])
//     addResult += nums[j]
//     if (addResult> 0) {
//       addArr.push(addResult)
//     } else {
//       addResult = 0
//     }
//   }
//   let result = Math.max(...addArr)
//   return result
// };
/**
 * 贪心算法：求最大子序和
 * 思想： 若当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
 *
 */

/**
 * 动态规划
 * 思想： 若前一个元素大于0，则将期加到当前元素上
 */
 var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0]
  nums.forEach((x) => {
      pre = Math.max(pre + x, x)
      maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}
// @lc code=end

