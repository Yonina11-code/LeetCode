/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let left: number = 1
  let right: number = n
  let mid: number = Math.floor((left + right) / 2)
  while (true) {
    let temp = guess(mid)
    if (temp === 0) {
      return mid
    } else if (temp === -1) {
      right = mid
    } else {
      left = mid
    }
    mid = Math.floor((left + right) / 2)
  }
};
// @lc code=end

