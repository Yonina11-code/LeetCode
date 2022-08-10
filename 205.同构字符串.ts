/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  let obj: object = {}
  let objt: object = {}
  let index: number = 0
  while(index < s.length) {
    let is = s[index]
    let it = t[index]
    if (!obj[is]) {
      obj[is] = it
    }
    if (obj[is] !== it) {
      return false
    }
    if (!objt[it]) {
      objt[it] = is
    }
    if (objt[it] !== is) {
      return false
    }
    index++
  }
  // if (s === t) return true
  return true
};
// @lc code=end

/**
 * 一个映射解决不了： badc ---> baba
 *
 */