/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  return digui(matrix, [])
};
function digui(matrix: number[][], result: number[]): number[] {
  if (!matrix.length) return result
  while(matrix[0].length) {
    result.push(matrix[0].shift())
  }
  matrix.shift()
  if (!matrix.length) return result
  let index: number = 0
  while (index < matrix.length) {
    let rowLast: number = matrix[index].pop()
    result.push(rowLast)
    if (!matrix[index].length) {
      matrix.splice(index, 1)
      continue
    }
    index++
  }
  if (!matrix.length) return result
  index = matrix.length - 1
  while (matrix[index].length) {
    result.push(matrix[index].pop())
  }
  matrix.pop()
  if (!matrix.length) return result
  index = matrix.length - 1
  while (index >= 0) {
    result.push(matrix[index].shift())
    if (!matrix[index].length) {
      matrix.splice(index, 1)
    }
    index--
  }
  return digui(matrix, result)
}
// @lc code=end

