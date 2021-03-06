/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  let result = []
  if (!root) return result
  if (root.left) {
    let left = inorderTraversal(root.left)
    result.push(...left)
  }
  result.push(root.val)
  if (root.right) {
    let right = inorderTraversal(root.right)
    result.push(...right)
  }
  return result
};
// @lc code=end

