/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (!prices.length) return 0
  let result: number = 0
  let mr = prices[0]
  for (let i:number = 1; i < prices.length; i++) {
    result = Math.max(prices[i] - mr, result)
    mr = Math.min(prices[i], mr)
  }
  return result
};
// @lc code=end

