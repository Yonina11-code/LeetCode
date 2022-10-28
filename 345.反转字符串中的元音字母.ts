/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
function reverseVowels(s: string): string {
  if (!s) return ''
  let arr: string[] = s.split('')
  let yuanyin: string[] = ['a', 'e', 'i', 'o', 'u']
  let left: number = -1
  let right: number = -1
  for (let i = 0, j = arr.length - 1; i < arr.length - 1, j > 0; ) {
    // console.log(left, right, i, j)
    if (i > j) {
      return arr.join('')
    }
    if (left === -1) {
      if (yuanyin.includes(arr[i].toLocaleLowerCase())) {
        left = i
      }
      i++
    }
    if (right === -1) {
      if (yuanyin.includes(arr[j].toLocaleLowerCase())) {
        right = j
      }
      j--
    }
    if (left !== -1 && right !== - 1) {
      let temp: string = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left = -1
      right = -1
    }
  }
  return arr.join('')
};
// @lc code=end

