/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  let arrIndex: string[] = []
  for (let i = 0; i < s.length; i++) {
    let item: string = s[i]
    if (arrIndex.includes(item)) continue
    let index: number = s.indexOf(item, i + 1)
    if (index === -1) {
      // console.log('i', i, item)
      return i
    } else {
      // console.log('push', i)
      arrIndex.push(item)
    }
  }
  return -1
};
// @lc code=end

