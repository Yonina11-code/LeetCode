/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // if (!(p && q)) return !(p ^ q)
  if (p === null && q === null) return true
  if (p === null && q !== null || (p !== null && q === null)) return false
  if (p.val === q.val) {
    // if (!(p.left && q.left)) return p.left && q.left && (p.left.val === q.left.val)
    // if (!(p.right && q.right)) return p.right && q.right && (p.right.val === q.right.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
};
// @lc code=end

