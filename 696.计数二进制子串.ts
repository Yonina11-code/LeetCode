/*
 * @lc app=leetcode.cn id=696 lang=typescript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
function countBinarySubstrings(s: string): number {
  let result: number = 0
  let arr: number[] = []
  let i: number = 0
  let temp: string = ''
  while (i < s.length) {
    // console.log('temp', temp)
    if (!temp.length || s[i] === temp[0]) {
      temp += s[i]
    } else  {
      arr.push(temp.length)
      temp = s[i]
    }
    i++
  }
  if (temp.length) {
    arr.push(temp.length)
  }
  // console.log(arr)
  for (let i = 1; i < arr.length; i++) {
    result += Math.min(arr[i - 1], arr[i])
  }
  return result
};
// @lc code=end

console.log(countBinarySubstrings['00110'])