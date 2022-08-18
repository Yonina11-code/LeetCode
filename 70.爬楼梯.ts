/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n
  let r: number = 0
  let lower: number = 1
  let low: number = 2
  for (let i : number = 3; i <= n; i++) {
    r = (low + lower)
    lower = low
    low = r
  }
  return r
};
// @lc code=end

