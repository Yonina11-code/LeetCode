/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let oneIndex = flowerbed.indexOf(1)
  if (!~oneIndex) { // 无1
    return Math.ceil(flowerbed.length / 2)  >= n
  } else {
    if (oneIndex > 1) {
      n = n - Math.floor(oneIndex / 2)
    }
    if (n <= 0) {
      return true
    }
    let zeroIndex = flowerbed.indexOf(0, oneIndex)
    if (!~zeroIndex) return false
    let count: number = 0
    for (let i = zeroIndex; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        count++
        if (count === 3) {
          n--
          count = count - 2
          if (!n) return true
        }
      } else if (count) {
        count = 0
      }
    }
    if (count >= 2 && n) {
      n--
    }
    return n === 0
  }
};
// @lc code=end

