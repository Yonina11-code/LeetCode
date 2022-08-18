/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1
  if (m === 2) return n
  if (n === 2) return m
  let result = uniquePaths(m -1, n) + uniquePaths(m, n - 1)
  return result
};
// @lc code=end

