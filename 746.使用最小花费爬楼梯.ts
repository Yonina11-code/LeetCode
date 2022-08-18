/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  let result: number[] = new Array(cost.length).fill(0)
  let index: number = 2
  while (index - 1 < cost.length) {
    result[index] = Math.min(cost[index - 1] + result[index - 1], cost[index - 2] + result[index - 2])
    index++
  }
  return result[result.length - 1]
};
// @lc code=end

