/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let j = 0
  for (let i = 0; i < nums1.length; i++) {
    if (j === nums2.length && nums2[j] === undefined && (i !== 0 && nums1[i] === 0)) break
    if (nums2[j] <= nums1[i]) {
      nums1.splice(i, 1, nums2[j], nums1[i])
      j++
    }
  }
  if (j !== nums2.length) {
    let rest = nums2.splice(j, nums2.length - j)
    nums1.splice(m+j, n, ...rest)
  } else if (nums1.length > m+n) {
    nums1.splice(m+n, nums1.length - m+n)
  }
  return nums1
};
// @lc code=end

