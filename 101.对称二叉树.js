/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isSame (left, right) {
    if (!left && !right) {
      return true
    } else if (!(left && right)) {
      return false
    } else if (left.val !== right.val) {
      return false
    } else {
      return isSame(left.left, right.right) && isSame(left.right, right.left)
    }
  }
  if (!root) {
    return true
  } else if (!root.left && !root.right) {
    return root.val
  } else if (!(root.left && root.right)) {
    return false
  } else if (root.left.val === root.right.val) {
    return isSame(root.left.left, root.right.right) && isSame(root.left.right, root.right.left)
  } else {
    return false
  }
};
// @lc code=end

