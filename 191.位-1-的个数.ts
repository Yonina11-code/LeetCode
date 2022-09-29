/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  if (!n) return 0
  let arr: string[] = n.toString().split('')
  return arr.filter(item => item === '1').length
};
// @lc code=end

