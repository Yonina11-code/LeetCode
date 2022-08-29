/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

 function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  let left: TreeNode | null = root.left
  let right: TreeNode | null = root.right
  let flag: boolean = false
  flag = Math.abs(deepLength(left) - deepLength(right)) < 2
  if (!flag) return flag
  if (left) flag = isBalanced(left)
  if (flag && right) flag = isBalanced(right)
  return flag
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

