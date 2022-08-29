/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  if (n === 1) return true
    let list: number[] = []
    let nums: string[] = n > 9 ? n.toString().split('') : [n + '']
    let result: number = 0
    while (!list.includes(result)) {
      list.push(result)
      result = 0
      while (nums.length) {
        let num: number = +nums.shift()
        result += Math.pow(num, 2)
      }
      if (result === 1) return true
      nums = result > 9 ? result.toString().split('') : [result + '']
    }
    return false
};
// @lc code=end

