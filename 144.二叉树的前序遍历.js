/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let nums = []
  if (!root) return nums
  if (root) nums.push(root.val)
  if (root.left) {
   let left = preorderTraversal(root.left)
   nums.push(...left)
  }
  if (root.right) {
    let right = preorderTraversal(root.right)
    nums.push(...right)
  }
  return nums
};
// @lc code=end

