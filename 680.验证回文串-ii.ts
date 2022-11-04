/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  if (isPalindrome(s)) return true
  let left: number = 0
  let right: number = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      if (left + 1 === right) return true // 偶数情况下，最后两个数
      if (left) {
        if (isPalindrome(s.substring(0, left) + s.substring(left + 1))) {
          return true
        }
      } else if (left === 0) {
        if (isPalindrome(s.substring(left + 1))) {
          return true
        }
      }
      if (right + 1 !== s.length) {
        if (isPalindrome(s.substring(0, right) + s.substring(right + 1))) {
          return true
        }
      } else {
        if (isPalindrome(s.substring(0, right))) {
          return true
        }
      }
      return false
    }
    left++
    right--
  }
};
function isPalindrome(s: string): boolean { // 是否是回文字符串
  let sArr: string[] = s.split('')
  let left: string[] = sArr.slice(0, Math.floor(s.length / 2))
  let right: string[] = sArr.slice(Math.ceil(s.length / 2)).reverse()
  if (left.join('') === right.join('')) {
    return true
  } else {
    return false
  }
}
// @lc code=end

