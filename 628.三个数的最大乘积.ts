/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  popoSort(nums)
  console.log(nums)
  let result: number[] = []
  let i: number = 0
  let temp: number = 1
  while (i < 3) {
    temp *= nums[i]
    i++
  }
  if (nums.length > 3) {
    temp = 1
    i = nums.length - 4
    while (i < nums.length) {
      temp *= nums[i]
      i++
    }
  }
  return Math.max(...result)
};

function popoSort (nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
}
// @lc code=end

