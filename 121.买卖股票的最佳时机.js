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
  for (let i = 1; i < prices.length; i++) {
    let temp = Math.min(prices[i - 1], prices[i])
    let tempResult = prices[i] - temp
    result = Math.max(temp, result)
  }
  return result

};
// @lc code=end
