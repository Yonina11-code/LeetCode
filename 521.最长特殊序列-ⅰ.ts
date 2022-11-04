/*
 * @lc app=leetcode.cn id=521 lang=typescript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
function findLUSlength(a: string, b: string): number {
  if (a.length !== b.length) {
    return Math.max(a.length, b.length)
  } else if (a.length === b.length && a !== b) {
    return a.length
  }
  let result: number = -1
  let temp: number = 0
  let startIndex: number = 0
  for (let i = 0; i < a.length; i++) {
    let str: string = a.substring(startIndex, i + 1)
    if (b.indexOf(str) === -1) {
      temp = Math.max(temp, str.length)
    } else {
      startIndex++
      i = startIndex
    }
  }
  startIndex = 0
  for (let i = 0; i < b.length; i++) {
    let str: string = b.substring(startIndex, i + 1)
    if (a.indexOf(str) === -1) {
      temp = Math.max(temp, str.length)
    } else {
      startIndex++
      i = startIndex
    }
  }
  if (temp) {
    return temp
  } else {
    return result
  }
};
// @lc code=end

