/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
  let splitS = [' ']
  let num: number = 0
  let temp: string = ''
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (!splitS.includes(item)) {
      temp += item
    } else if (temp) {
      // console.log('temp', num)
      num++
      temp = ''
    }
  }
  if (temp) {
    num++
  }
  return num
};
// @lc code=end

