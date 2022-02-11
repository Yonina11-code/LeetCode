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
   let sqr = [4,9,16,25,36,49,64,81]
   let nums = [2,3,4,5,6,7,8,9]
   let length = sqr.length
   let result = 1
   for (let i = 0; i < length; i++) {
    if (x >= sqr[i]) {
      let lint = x / sqr[i]
      if ( lint % 1 === 0 ) {
        result = result * nums[i] * mySqrt(Math.floor(lint))
      }
    } else {
      return result
    }
 }

}
// @lc code=end

