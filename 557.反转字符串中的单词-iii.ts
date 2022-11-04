/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  let sArr: string[] = s.split(' ')
  let result: string = ''
  sArr.forEach((item, index) => {
    for (let i = item.length - 1; i >= 0; i--) {
      result += item[i]
    }
    if (index + 1 !== sArr.length) {
      result += ' '
    }
  })
  return result
};
// @lc code=end

