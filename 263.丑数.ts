/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n === 1) return true
  let uglyNums: number[] = [2,3,5]
  let flag: boolean = false
  let temp: number = n
  for (let num of uglyNums) {
    console.log('num', num)
    temp = temp / num
    while (temp > 1 && !(temp % 1)) {
      if (uglyNums.includes(temp)){
        return true
      }
    }
    temp = n
  }
  return flag
};
isUgly(6)
// @lc code=end

