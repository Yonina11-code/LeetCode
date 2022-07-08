/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  let flag = false
  if (root.val === targetSum && !(root.left || root.right)) return true
  if (root.left) {
    flag = hasPathSum(root.left, targetSum - root.val)
  }
  if (!flag && root.right) {
    flag = hasPathSum(root.right, targetSum - root.val)
  }
  return flag
};
// @lc code=end

