/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null
  let ps: TreeNode[] = findTreeNodes(root, p)
  let qs: TreeNode[] = findTreeNodes(root, q)
  while(ps.length) {
    let pNode = ps.pop()
    let copyQs = [...qs]
    while (copyQs.length) {
      let qNode = copyQs.pop()
      if (pNode.val === qNode.val) {
        return pNode
      }
    }
  }
  return null
};
function findTreeNodes (root: TreeNode | null, p: TreeNode | null): TreeNode[] | null {
  if (!root) return null
  let hasTarget : boolean = false
	let parents: TreeNode[] = []
  parents.push(root)
  if (root.val === p.val) {
    return parents
  }
  if (root.left) {
    let left = findTreeNodes(root.left, p)
    if (left) {
      hasTarget = true
      parents.push(...left)
      return parents
    }
  }
  if (root.right) {
    let right = findTreeNodes(root.right, p)
    if (right) {
      hasTarget = true
      parents.push(...right)
      return parents
    }
  }
  return hasTarget ? parents : null
}
// @lc code=end

