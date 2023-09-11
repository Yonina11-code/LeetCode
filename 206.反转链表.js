/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let arr = []
  let newList = null
  let point = newList
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  if (arr.length) {
    newList = new ListNode(arr.pop(), null)
    point = newList
  }
  while (arr.length) {
    newList.next = new ListNode(arr.pop(), null)
    newList = newList.next
  }
  return point
};
// @lc code=end

