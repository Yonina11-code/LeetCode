/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i
    } else {
      continue
    }
  }
  return nums.length
};
/** 本题要求时间复杂度为O(logn)
 * 所以可以使用二分查找：
 * 二分查找的要求即：
 * 如果一个问题中。 待查找的数是整数，
 * 大概就可以使用二分查找算法
 * */
/** 二分查找算法思想：
 *  1、先设定左侧下标left和右侧下标right，再计算中间下标mid
 * 2、每次根据nums[mid]和target之间的大小进行判断，
 * 相等则直接返回下标，
 * nums[mid] < target 则 left右移
 * nums[mid] > target 则right左移
 * left > right时，循环借宿。
 *  查找结束如果没有相等值则返回left,该值为插入位置
 * */

/** 复杂度分析
 * 时间复杂度： O(logN), 每次循环都会丢弃一半的查找空间
 * 空间复杂度： O(1)，仅使用一个整数型变量mid来记录中间值
 *
 */
// @lc code=end

