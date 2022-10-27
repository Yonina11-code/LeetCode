/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return []
  let result: string[] = []
  if (!root.left && !root.right) {
    result.push(root.val + '')
  }
  if (root.left) {
    let temp = root.val
    let next = binaryTreePaths(root.left)
    next = next.map(item => {
      return temp + '->' + item
    })
    // console.log(next, temp)
    result.push(...next)
  }
  if (root.right) {
    let temp = root.val
    let next = binaryTreePaths(root.right)
    next = next.map(item => {
      return temp + '->' + item
    })
    result.push(...next)
  }
  return result
};
// @lc code=end

