/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let temp = new ListNode(head.next.val, null) // 4
  if (head.next.next) {
    head.next = swapPairs(head.next.next) // 3
  } else {
    head.next = null
  }
  temp.next = head // 1
  head = temp
  return head

};
// @lc code=end

