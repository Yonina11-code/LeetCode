/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  6230. 长度为 K 子数组中的最大和
 var maximumSubarraySum = function(nums, k) {
  if ([...new Set(nums)].length < k) return 0
  let result = 0
  for (let i = 0; i < (nums.length - k + 1) && (nums.length - i >= k); i++) {
    let temp = nums.slice(i, i+k)
    if (temp.length === [...new Set(temp)].length) {
      let count = temp.reduce((pre, item) => {
        return pre + item
      }, 0)
      result = Math.max(count, result)
    }
  }
  return result
};
console.log(maximumSubarraySum([4,4,4], 3))