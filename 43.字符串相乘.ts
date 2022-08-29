/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
// 大数相乘
function multiply(num1: string, num2: string): string {
  if (!num1 || !num2) return '0'
  if (num1 === '1') return num2
  if (num2 === '1') return num1
  let result: string = ''
  let index: number = num2.length -1
  while (index >= 0) {
    let jinwei: number = 0
    let temp2: number = parseInt(num2[index])
    let tempResult: string = ''.padEnd(num2.length - 1 - index, '0')
    for (let i = num1.length - 1; i >= 0; i--) {
      let temp: number = parseInt(num1[i]) * temp2
      tempResult = (temp % 10 + jinwei) % 10 + tempResult
      jinwei = Math.floor(temp / 10) + Math.floor((temp % 10 + jinwei) / 10)
    }
    if (jinwei) tempResult = jinwei + tempResult
    if (!result) {
      result = tempResult
    } else {
      // 大数相加
      result = add(result, tempResult)
    }
    index--
  }
  return result
};
// 大数相加
function add (num1: string, num2: string): string {
  let max: number = Math.max(num1.length, num2.length)
  num1.padStart(max, '0')
  num2.padStart(max, '0')
  let index: number = max - 1
  let result: string = ''
  let jinwei: number = 0
  while (index >= 0) {
    let temp: number = parseInt(num1[index]) + parseInt(num2[index])
    result = (temp % 10) + jinwei % 10 + result
    jinwei = Math.floor(temp / 10) + Math.floor((temp % 10) + jinwei / 10)
    index--
  }
  if (jinwei) {
    result = jinwei + result
  }
  return result
}
// @lc code=end

