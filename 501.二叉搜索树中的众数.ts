/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

function findMode(root: TreeNode | null): number[] {
  if (!root.left && !root.right) return [root.val]
  let map = new Map()
  let result = []
  map.set(root.val, 1)
  if (root.left) {
    getAllNodes(root.left, map)
  }
  if (root.right) {
    getAllNodes(root.right, map)
  }
  let max = 0
  for (let [key, value] of map) {
    if (value > max) {
      result = [key]
      max = value
    } else if (value === max) {
      result.push(key)
    }
  }
  return result
};
function getAllNodes(root: TreeNode | null, map) {
  if (map.has(root.val)) {
    let num = map.get(root.val) + 1
    map.set(root.val, num)
  } else {
    map.set(root.val, 1)
  }
  if (root.left) {
    getAllNodes(root.left, map)
  }
  if (root.right) {
    getAllNodes(root.right, map)
  }
}
// @lc code=end

