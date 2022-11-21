/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let stack = []
  let result = {}
  for (let i = 0; i < nums2.length; i++) {
    if (!stack.length) {
      stack.push(nums2[i])
    } else {
      let pop = stack[stack.length - 1]
      while (nums2[i] > pop && pop !== undefined) {
        result[pop] = nums2[i]
        stack.pop()
        pop = stack[stack.length - 1]
      }
      stack.push(nums2[i])
      // console.log(stack)
    }
  }
  stack.forEach(item => {
    result[item] = -1
  })
  let nums = []
  nums1.forEach(item => {
    nums.push(result[item])
  })
  return nums
};
// @lc code=end

