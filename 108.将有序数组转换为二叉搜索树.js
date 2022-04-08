/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null
  if (nums.length === 1) return new TreeNode(nums[0])
  if (nums.length === 2) return new TreeNode(nums[1], new TreeNode(nums[0]))
  if (nums.length === 3) return new TreeNode(nums[1], new TreeNode(nums[0]), new TreeNode(nums[2]))
  let mid = Math.floor(nums.length / 2)
  return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid+1)))
};
// @lc code=end

