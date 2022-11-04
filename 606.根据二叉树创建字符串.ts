/*
 * @lc app=leetcode.cn id=606 lang=typescript
 *
 * [606] 根据二叉树创建字符串
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

function tree2str(root: TreeNode | null): string {
  if (!root) return '()'
  let result: string = root.val+''
  if (root.left) {
    result += `(${tree2str(root.left)})`
  }
  if (root.right) {
    if (!root.left) {
      result += '()'
    }
    result += `(${tree2str(root.right)})`
  }
  return result
};
// @lc code=end

