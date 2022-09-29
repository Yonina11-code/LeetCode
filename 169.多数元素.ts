/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let obj : object = {}
  nums.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  let maxCount: number = Math.max(...Object.values(obj))
  for (let [key ,value] of Object.entries(obj)) {
    if (maxCount === value) {
      return +key
    }
  }
};
// @lc code=end

