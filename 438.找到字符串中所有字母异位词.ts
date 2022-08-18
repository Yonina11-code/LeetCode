/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let result: number[] = []
  let pObj: object = {}
  for (let i: number = 0; i < p.length; i++) {
    let s = p[i]
    if (pObj[s]) {
      pObj[s]++
    } else {
      pObj[s] = 1
    }
  }
  let left: number = 0
  let right: number = 0
  let win: object = {} // 滑动窗口中的值
  while (right < s.length) {
    let ss = s[right]
    // if (!Object.keys(pObj).includes(ss)) {
    //   left = right
    //   right++
    //   continue
    // }
    if (right - left < p.length) {
      if (win[ss]) {
        win[ss]++
      } else {
        win[ss] = 1
      }
      if (right - left === (p.length - 1)) {
        let flag = true
        for (let [key, value] of Object.entries(pObj)) {
          if (win[key] !== value) {
            flag = false
            break
          }
        }
        flag && result.push(left)
        win[s[left]]--
        left++
        }
      } else {
        win[s[left]]--
        left++
      }
      right++
  }
  return result
};
// @lc code=end

