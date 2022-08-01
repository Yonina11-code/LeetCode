/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {}
  nums.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] ++
    }
  })
  for (let item in obj) {
    if (obj[item] === 1) {
      return item
    }
  }
};
// @lc code=end

