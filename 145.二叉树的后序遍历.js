/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let nums = []
  if (!root) return nums
  if (root.left) {
    let left = postorderTraversal(root.left)
    nums.push(...left)
  }
  if (root.right) {
    let right = postorderTraversal(root.right)
    nums.push(...right)
  }
  nums.push(root.val)
  return nums
};
// @lc code=end

