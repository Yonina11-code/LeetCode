/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!(headA && headB)) return null
    let arr  = []
    let temp = headA
    while(temp) {
      arr.push(temp)
      temp = temp.next
    }
    temp = headB
    while (temp) {
      if (arr.includes(temp)) {
        return temp
      } else {
        temp = temp.next
      }
    }
    return null
};
// @lc code=end

