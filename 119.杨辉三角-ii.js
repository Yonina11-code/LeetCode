/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!rowIndex) return [1]
  let result = []
  for (let i = 0; i < rowIndex + 1; i++) {
    let cols = [1]
    for (let j = 1; j <= i; j++) {
      let temp = (result[i -1][j -1] || 0) + (result[i -1][j] || 0)
      cols.push(temp)
    }
    result.push(cols)
  }
  return result[rowIndex]
};
// @lc code=end

