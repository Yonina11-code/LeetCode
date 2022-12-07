/*
 * @lc app=leetcode.cn id=563 lang=typescript
 *
 * [563] 二叉树的坡度
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

function findTilt(root: TreeNode | null): number {
  if (!root) return 0
  let result: number = 0
  let leftSum: number = 0
  let rightSum: number = 0
  if (root.left) leftSum = nodeSum(root.left)
  if (root.right) rightSum = nodeSum(root.right)
  let last = result = Math.abs(leftSum - rightSum)
  function dfs (node) {
    if (!root) return 0
    if (node.left) {
      last = Math.abs(last - node.val)
      result += last
      dfs(node.left)
    }
    if (node.right) {
      last = Math.abs(result - node.val)
      result += last
      dfs(node.right)
    }
  }
  dfs(root)
  return result
};
function nodeSum (root: TreeNode | null): number {
  if (!root) return 0
  let sum: number = 0
  if (root.left) {
    sum += nodeSum(root.left)
  }
  if (root.right) {
    sum += nodeSum(root.right)
  }
  sum += root.val
  return sum
}
// @lc code=end

