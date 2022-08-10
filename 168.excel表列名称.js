/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let row = Math.floor(columnNumber / 26)
  let col = columnNumber % 26
  let result = AZ[col - 1]
  while (row > 26) {
    row = Math.floor(row / 26)
    col = row % 26
    result = AZ[col - 1] + result
  }
  if (row > 0) {
    return `${AZ[row - 1]}` + result
  } else {
    return result
  }
};
// @lc code=end

