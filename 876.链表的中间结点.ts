/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let num = 0
  let curr = head
  while (curr) {
    curr = curr.next
    num++
  }
  num = Math.floor(num / 2)
  curr = head
  while (num) {
    curr = curr.next
    num--
  }
  return curr
};
// @lc code=end

