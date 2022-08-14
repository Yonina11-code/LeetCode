/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true
  if (root.left && root.val <= root.left.val) {
    return false
  }
  if (root.right && root.val >= root.right.val) {
    return false
  }
  if (root.left) {
    return isValidBST(root.left)
  }
  if (root.right) {
   return  isValidBST(root.right)
  }
};
// @lc code=end

