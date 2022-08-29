/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  if (!root.left && !root.right) return root
  let left: TreeNode | null = null
  let right: TreeNode | null = null
  if (root.right) {
    left = invertTree(root.right)
  } else {
    left = null
  }
  if (root.left) {
    right = invertTree(root.left)
  }
  root.left = left
  root.right = right
  return root

};
// @lc code=end

