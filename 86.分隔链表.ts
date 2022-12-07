/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  let small = new ListNode(0, null)
  let large = new ListNode(0, null)
  let smallHead = small, largeHead = large
  while (head) {
    if (head.val < x) {
      smallHead.next = head
      smallHead = smallHead.next
    } else {
      largeHead.next = head
      largeHead = largeHead.next
    }
    head = head.next
  }
  // console.log(small, large)
  largeHead.next = null
  smallHead.next = large.next
  return small.next
};
// @lc code=end

