/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0
  let minP = prices[0]
  for (let i = 1; i < prices.length; i++) {
    minP = Math.min(minP, prices[i])
    result = Math.max(result, prices[i] - minP)
  }
  return result

};
// console.log(maxProfit([6,1,3,2,4,7]))
// @lc code=end
