/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  if (!root) return []
  if (root.val && !root.children.length) return [root.val]
  let result: number[] = []
  result.push(root.val)
  root.children.forEach((node, index) => {
    result.push(...preorder(node))
  })
  return result

};
// @lc code=end

