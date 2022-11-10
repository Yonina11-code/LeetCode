/*
 * @lc app=leetcode.cn id=495 lang=typescript
 *
 * [495] 提莫攻击
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (timeSeries.length === 1)  return duration
  let result: number = 0
  let i: number = 0
  while(i < timeSeries.length - 1) {
    if (timeSeries[i + 1] - timeSeries[i] >= duration ) {
      result += duration
    } else {
      result += timeSeries[i + 1] - timeSeries[i]
    }
    i++
  }
  result += duration // 最后一个没有遍历
  return result
};
// @lc code=end

