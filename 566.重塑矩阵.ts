/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let result: number[][] = new Array(r)
  let oneArr: number[] = []
  let count = r * c
  if (count !== mat.length * mat[0].length) return mat
  if (r === mat.length) return mat
  for (let i = 0; i < mat.length; i++) {
    oneArr.push(...mat[i])
  }
  for (let i = 0; i < r; i++) {
    result[i] = oneArr.splice(0, c)
  }
  return result
};
// @lc code=end

