/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
     if (n < 3) return n
    let one = 1
    let two = 2
    for (let i = 3; i <= n; i++) {
        let temp = one
        one = two
        two += temp 
    }
    return two
};
// @lc code=end

/**
 * 
 * 1、 1
 * 2、 2
 * 3： 3 1+ 2*1
 * 4、 5 1+ 1 +3*1
 * 5、 8 1+3*1+4 * 1
 * 6、1+1+
 */
