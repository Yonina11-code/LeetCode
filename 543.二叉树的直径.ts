/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0
    let arr: number[] = []
    if (root.left) {
      arr.push(diameterOfBinaryTree(root.left) + 1)
    }
    if (root.right) {
      arr.push(diameterOfBinaryTree(root.right) + 1)
    }
    if (root.left && root.right) {
      arr.push(diameterOfBinaryTree(root.left) + diameterOfBinaryTree(root.right))
    }
  return Math.max(...arr)
};
function deepLength(root: TreeNode | null): number {
  if (!root) return 0
  let left: number = 1
  let right: number = 1
  if (root.left) left = deepLength(root.left) + 1
  if (root.right) right = deepLength(root.right) + 1
  return Math.max(left, right)
}
// @lc code=end

