/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let result : number[][] = []
  if (root.val !== null) {
    result.push([root.val])
  }
  if (root.left && root.right) {
    let left = levelOrder(root.left)
    let right = levelOrder(root.right)
    let min: number = Math.min(left.length, right.length)
    let max: number = Math.max(left.length, right.length)
    if (min) {
      for (let i : number = 0; i < max; i++) {
        let temp = [...left[i] || [], ...right[i] || []]
        result.push(temp)
      }
    } else {
      result.push(...left, ...right)
    }

  } else if (root.left) {
    result.push(...levelOrder(root.left))
  } else if (root.right) {
    result.push(...levelOrder(root.right))
  }
  return result
};
// @lc code=end

