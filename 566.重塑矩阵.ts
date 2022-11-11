/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let result: number[][] = []
  let count = r & c
  if (count !== mat.length * mat[0].length) return mat
  if (c % mat[0].length) return mat // 行数不能取整
  let mr = 0, mc = 0, rr = 0, cc = 0

};
// @lc code=end

