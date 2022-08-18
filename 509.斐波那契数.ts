/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (0 <= n && n <= 1) return n
  return fib(n - 1) + fib(n - 2)
};
// @lc code=end

