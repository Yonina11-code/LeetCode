/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function rootLength (subRoot) {
    if (!subRoot) return 0
    if (!(subRoot.left || subRoot.right)) return 1
    return rootLength(subRoot) + 1
  }
  if (!root) return true
  return Math.abs(rootLength(root.left)-rootLength(root.right)) <= 1
};
// @lc code=end

