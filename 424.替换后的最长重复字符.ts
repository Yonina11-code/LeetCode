/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  if (s.length < 2 || s.length <= k) return s.length
  let max: number
  let left: number = 0
  let right: number = 0
  let win: object = {}
  win[s[right]] = 1
  for (let i: number = 0; i < s.length; i++) {
    if (right !== i) {
      right = i
      if (win[s[right]]) {
        win[s[right]]++
      } else {
        win[s[right]] = 1
      }
    }
    let compare: number[] = Object.values(win)
    if (compare.length !== 1) {
      let tempMax: number = Math.max(...compare)
      let surplus: number = 0 // 当前窗口的值是否已经达到k
      let flag: boolean = false // 是否已经找到了最大值
      compare.forEach(item => {
        if (item === tempMax && !flag) {
          flag = true
        } else {
          surplus += item
        }
      })
      if (surplus > k) {
        win[s[left]]--
        left++
        i--
      } else {
        max = Math.max(max, compare.reduce((pre, item) => pre + item))
      }
    } else {
      max = compare[0]
    }
  }
  return max
};
// @lc code=end