/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return []
  let result = []
  for (let i = 0; i < numRows; i++) {
    let cols = [1]
    for (let j = 1; j <= i; j++) {
      let temp = (result[i -1][j -1] || 0) + (result[i -1][j] || 0)
      cols.push(temp)
    }
    result.push(cols)
  }
  return result
};
// @lc code=end

