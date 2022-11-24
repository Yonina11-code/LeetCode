/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(operations: string[]): number {
  let arr: number[] = []
  operations.forEach(item => {
    let temp: number = 0
    switch (item) {
      case '+':
        temp = arr[arr.length - 1] + arr[arr.length - 2]
        arr.push(temp)
        break
      case 'D':
        temp = arr[arr.length - 1] * 2
        arr.push(temp)
        break
      case 'C':
        arr.pop()
        break
      default:
        arr.push(Number(item))
    }
  })
  if (arr.length) {
    return arr.reduce((pre, cur) => pre + cur)
  } else {
    return 0
  }
};
// @lc code=end

