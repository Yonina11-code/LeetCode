/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if (!x) return x
  let mid = Math.floor(x / 2)  
  let left = 1
  let right = x
   while (mid < x) {
     let result = mid * mid
     if (left === mid || right === mid ||  left >= right ) {
      return left
    }
     if (result === x) {
       return mid
     } else if (result > x ) {
       right = mid 
     } else if (result < x) {
       left = mid
     }
     mid = Math.floor((right + left) / 2)
   }
   return left
 }
// @lc code=end

