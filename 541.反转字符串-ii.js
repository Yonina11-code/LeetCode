/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let temps = s.split('')
  let k2 = k * 2
  let index = 0 // 要截取的位置
  for (let i = k; i < temps.length; i = i + k) {
    let tempStr = temps.slice(index, k).reverse()
    temps.splice(index, k, ...tempStr)
    index = index + k2
  }
  if (index < temps.length - 1) {
    let extraIndex = index + k >  temps.length - 1 ? index + k : temps.length - 1
    let tempStr = temps.slice(index, extraIndex).reverse()
    temps.splice(index, k, ...tempStr)
    if (index + k >  temps.length - 1) {
      temps.splice(index + k, 0, temps.slice(index + k) )
    }
  }
  return temps.join('')
};
// @lc code=end

